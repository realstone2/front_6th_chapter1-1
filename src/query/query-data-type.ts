export type QueryDataType<T> = {
  isLoading: boolean;
  data: Array<{
    page: number;
    items: T[];
  }>;
  error?: string | null;
  page?: number;
  limit?: number;
};
