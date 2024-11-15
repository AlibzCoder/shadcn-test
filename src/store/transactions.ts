import { Payment } from "@/types/transactions";
import { create } from "zustand";

interface TransactionsStoreType {
  transaction: Payment[];
  isLoading: boolean;
  setTransactions: (data: Payment[]) => void;
  setIsLoadingTransactions: (isLoading: boolean) => void;
}

const useTransactionsStore = create<TransactionsStoreType>((set) => ({
  transaction: [],
  isLoading: false,
  setTransactions: (data) => set(() => ({ transaction: data })),
  setIsLoadingTransactions: (isLoading) => set(() => ({ isLoading: isLoading })),
}));

export default useTransactionsStore;
