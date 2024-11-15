import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Loader2 } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  const isButtonLoading = count === 5;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          loading={isButtonLoading}
          disabled={isButtonLoading}
          hideContentOnLoading={true}
          onClick={() => setCount((count) => count + 1)}
        >
          {`count is ${count}`}
        </Button>
      </div>
    </>
  );
}

export default App;
