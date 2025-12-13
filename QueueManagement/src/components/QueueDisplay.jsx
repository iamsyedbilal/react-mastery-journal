function QueueDisplay({ queue, updateQueue, removeQueue }) {
  return (
    <div className="queue-container">
      {queue.length === 0 ? (
        <p className="queue-empty">No customers in the queue</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div key={customer.id} className="queue-item">
              <div className="queue-item-header">
                <strong className="customer-name">{customer.username}</strong>
              </div>

              <div className="customer-service">
                Service: <span>{customer.serviceType}</span>
              </div>

              <div className={`customer-status status-${customer.status}`}>
                Status: {customer.status}
              </div>

              <div className="queue-actions">
                {customer.status === "waiting" && (
                  <button
                    className="btn btn-start"
                    onClick={() => updateQueue(customer.id, "serving")}
                  >
                    Start Service
                  </button>
                )}

                {customer.status === "serving" && (
                  <button
                    className="btn btn-complete"
                    onClick={() => updateQueue(customer.id, "completed")}
                  >
                    Complete Service
                  </button>
                )}

                <button
                  className="btn btn-remove"
                  onClick={() => removeQueue(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
