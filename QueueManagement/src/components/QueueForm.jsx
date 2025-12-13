import { useState } from "react";

function QueueForm({ addToQueue }) {
  const [username, setUsername] = useState("");
  const [serviceType, setServiceType] = useState("");

  function handleQueueFormSubmit(e) {
    e.preventDefault();

    if (!username || !serviceType) return;

    addToQueue(username, serviceType);
    setUsername("");
    setServiceType("");
  }

  return (
    <form className="queue-form" onSubmit={handleQueueFormSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Customer Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <select
        className="form-select"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
      >
        <option value="">Select Service</option>
        <option value="General Support">General Support</option>
        <option value="Technical Issue">Technical Issue</option>
        <option value="Billing Inquiry">Billing Inquiry</option>
      </select>

      <button className="btn btn-submit" type="submit">
        Add to Queue
      </button>
    </form>
  );
}

export default QueueForm;
