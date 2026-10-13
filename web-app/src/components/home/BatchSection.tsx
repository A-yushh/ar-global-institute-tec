// Batch Section with Category Tabs and Search Filtering with Tailwind CSS v4 in TypeScript
import { memo, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { BATCH_FILTER_TABS } from '../../utils/constants';
import type { FilterTabItem } from '../../utils/constants';
import type { BatchItem } from '../../utils/mockData';
import {
  selectFilteredBatches,
  selectActiveFilterTab,
  selectBatchSearchQuery,
  setActiveFilter,
  setSearchQuery,
} from '../../store/slices/batchSlice';
import type { AppDispatch } from '../../store/store';
import SectionHeading from '../common/SectionHeading';
import BatchCard from './BatchCard';

export const BatchSection = memo(function BatchSection() {
  const dispatch = useDispatch<AppDispatch>();
  const filteredBatches: BatchItem[] = useSelector(selectFilteredBatches);
  const activeTab: string = useSelector(selectActiveFilterTab);
  const searchQuery: string = useSelector(selectBatchSearchQuery);

  const handleTabClick = useCallback(
    (tabId: string) => {
      dispatch(setActiveFilter(tabId));
    },
    [dispatch]
  );

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchQuery(e.target.value));
    },
    [dispatch]
  );

  return (
    <section id="batches" className="bg-bg-white py-20 px-5">
      <div className="max-w-[1240px] mx-auto">
        <SectionHeading
          badge="ADMISSIONS OPEN"
          title="Choose Your Live & Interactive"
          highlightText="Coaching Batch"
          subtitle="Top faculty lectures, daily practice problems, and 1-on-1 mentorship designed for maximum rank acceleration."
          align="center"
        />

        <div className="flex flex-col gap-5 mb-9 items-center">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5" role="tablist" aria-label="Batch Categories">
            {BATCH_FILTER_TABS.map((tab: FilterTabItem) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`rounded-full px-5 py-2 text-sm font-semibold cursor-pointer transition-all duration-150 outline-none ${
                    isActive
                      ? 'bg-primary border border-primary text-white shadow-md'
                      : 'bg-bg-light border border-border-light text-text-secondary hover:border-primary/40 hover:text-primary'
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" aria-hidden="true">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              placeholder="Search batches by exam, class, or faculty..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border-light text-sm font-sans text-text-primary bg-bg-light outline-none transition-all focus:border-primary focus:bg-white focus:ring-3 focus:ring-primary/20"
              aria-label="Search batches"
            />
          </div>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredBatches.length > 0 ? (
            filteredBatches.map((batch: BatchItem) => (
              <BatchCard key={batch.id} batch={batch} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 px-5 bg-bg-light rounded-2xl border border-dashed border-border-medium">
              <h4 className="text-lg font-bold text-text-primary mb-2">No matching batches found</h4>
              <p className="text-sm text-text-muted m-0">
                Try adjusting your search keywords or select "All Batches" to browse all offerings.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default BatchSection;
