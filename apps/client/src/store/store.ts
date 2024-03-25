import { create } from "zustand";

interface QueueState {
  state: { name?: string }; // Replace with specific type based on your data structure
  queue: { name: string; state: number }[]; // Assuming queue holds strings, adjust if needed
  handleChangeState: (data: { name: string }) => void;
  getQueue: (data: { name: string; state: number }[]) => void;
}

export const useQueueStore = create<QueueState>()((set) => ({
  state: {},
  handleChangeState: (data: { name: string }) =>
    set((state: QueueState) => ({ ...state, state: data })),
  queue: [],
  getQueue: (data: { name: string; state: number }[]) =>
    set((state: QueueState) => ({ ...state, queue: data })),
}));
