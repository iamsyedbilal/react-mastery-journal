import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [queue, setQueue] = useState([]);

  // Add new customer
  function addToQueue(username, serviceType) {
    setQueue([
      ...queue,
      {
        id: Date.now(),
        username,
        serviceType,
        status: "waiting",
      },
    ]);
  }

  // Update customer status
  function updateQueue(id, newStatus) {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  }

  // Remove customer
  function removeQueue(id) {
    setQueue(queue.filter((customer) => customer.id !== id));
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h2 className="app-title">Queue Management System</h2>
        <p className="app-subtitle">Manage your customers efficiently</p>
      </header>

      <main className="app-main">
        <QueueForm addToQueue={addToQueue} />
        <QueueDisplay
          queue={queue}
          updateQueue={updateQueue}
          removeQueue={removeQueue}
        />
      </main>
    </div>
  );
}

export default App;
