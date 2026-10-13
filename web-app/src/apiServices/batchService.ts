// Batch Service in TypeScript
import { mockDelay } from './axiosInstance';
import { MOCK_BATCHES } from '../utils/mockData';
import type { BatchItem } from '../utils/mockData';

export interface EnrollResponse {
  success: boolean;
  batchId: string;
  message: string;
}

export interface NotifyResponse {
  success: boolean;
  email: string;
  message: string;
}

export const batchService = {
  async getBatches(category: string = 'all'): Promise<BatchItem[]> {
    await mockDelay(350);
    if (!category || category === 'all') {
      return [...MOCK_BATCHES];
    }
    return MOCK_BATCHES.filter((batch) => batch.category === category);
  },

  async getBatchById(id: string): Promise<BatchItem> {
    await mockDelay(200);
    const found = MOCK_BATCHES.find((b) => b.id === id);
    if (!found) {
      throw new Error('Batch not found');
    }
    return { ...found };
  },

  async enrollBatch(batchId: string): Promise<EnrollResponse> {
    await mockDelay(500);
    return {
      success: true,
      batchId,
      message: 'Enrollment initiated! Access grant confirmed.',
    };
  },

  async registerITNotification(email: string): Promise<NotifyResponse> {
    await mockDelay(400);
    return {
      success: true,
      email,
      message: 'Thank you! You will be notified when A. R. Global Technologies launches.',
    };
  },
};

export default batchService;
