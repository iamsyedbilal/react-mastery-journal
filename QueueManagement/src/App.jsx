import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [queue, setQueue] = useState([]);

  function addToQueue(params) {}

  function updateStatus(params) {}

  function removeFromQueue(params) {}

  return (
    <div>
      <header>
        <h2>Queue Management System</h2>
        <p>Manage Your Coustomers efficently</p>
      </header>
      <main>
        <QueueForm />
        <QueueDisplay />
      </main>
    </div>
  );
}

export default App;
