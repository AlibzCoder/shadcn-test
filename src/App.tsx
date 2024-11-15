import { useEffect } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { DataTableDemo } from "./DataTableDemo";
import ModeToggle from "@/components/mode-toggle";
import useTransactionsStore from "./store/transactions";
import { fetchData } from "./lib/utils";
import { Payment } from "./types/transactions";

function App() {
  const {
    isLoading: isLoadingTransactions,
    setTransactions,
    setIsLoadingTransactions,
  } = useTransactionsStore();

  useEffect(()=>{
    LoadList()
  },[])

  function LoadList() {
    if (!isLoadingTransactions) {
      setIsLoadingTransactions(true);
      fetchData("https://ce1b489e9446461588e26dedcb8c4af4.api.mockbin.io")
        .then((data: Payment[] | any[]) => {
          if (data && {}.toString.call(data) === "[object Array]")
            setTransactions(data);
        })
        .finally(() => {
          setIsLoadingTransactions(false);
        });
    }
  }

  return (
    <>
      <h1>ShadCN Test</h1>
      <ModeToggle />
      <div className="card">
        <Button
          loading={isLoadingTransactions}
          disabled={isLoadingTransactions}
          hideContentOnLoading={true}
          onClick={LoadList}
        >
          Refresh
        </Button>
        <DataTableDemo />
      </div>
    </>
  );
}

export default App;
