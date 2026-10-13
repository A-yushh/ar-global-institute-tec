// Redux Toolkit Batch Slice in TypeScript
import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MOCK_BATCHES } from '../../utils/mockData';
import type { BatchItem } from '../../utils/mockData';
import batchService from '../../apiServices/batchService';
import type { RootState } from '../store';

export const fetchBatchesThunk = createAsyncThunk<BatchItem[], string, { rejectValue: string }>(
  'batch/fetchBatches',
  async (category, { rejectWithValue }) => {
    try {
      const data = await batchService.getBatches(category);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to load batches';
      return rejectWithValue(message);
    }
  }
);

export interface BatchState {
  items: BatchItem[];
  activeFilterTab: string;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: BatchState = {
  items: MOCK_BATCHES,
  activeFilterTab: 'all',
  searchQuery: '',
  isLoading: false,
  error: null,
};

const batchSlice = createSlice({
  name: 'batch',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilterTab = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatchesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBatchesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchBatchesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Failed to load batches';
      });
  },
});

export const { setActiveFilter, setSearchQuery } = batchSlice.actions;

// Base Selectors
export const selectAllBatches = (state: RootState): BatchItem[] => state.batch.items;
export const selectActiveFilterTab = (state: RootState): string => state.batch.activeFilterTab;
export const selectBatchSearchQuery = (state: RootState): string => state.batch.searchQuery;
export const selectBatchLoading = (state: RootState): boolean => state.batch.isLoading;

// Memoized Selector (createSelector)
export const selectFilteredBatches = createSelector(
  [selectAllBatches, selectActiveFilterTab, selectBatchSearchQuery],
  (batches: BatchItem[], activeTab: string, searchQuery: string): BatchItem[] => {
    let result = batches;

    if (activeTab && activeTab !== 'all') {
      result = result.filter((batch) => batch.category === activeTab);
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (batch) =>
          batch.title.toLowerCase().includes(query) ||
          batch.targetClass.toLowerCase().includes(query) ||
          batch.faculty.toLowerCase().includes(query)
      );
    }

    return result;
  }
);

export default batchSlice.reducer;
