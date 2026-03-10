export interface Toast {
  id: string;
  type: 'success' | 'error' | 'caution';
  message: string;
  duration: number;
}
