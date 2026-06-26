"use client";

import { useReservation } from "./ReservationContext";

function ReserveButton({ cabinName }) {
  const { range } = useReservation();
  const isReady = Boolean(range?.from && range?.to);

  return (
    <div className="border-t border-primary-800 px-7 py-6">
      <button
        disabled={!isReady}
        className="
          w-full
          rounded-xl
          bg-accent-500
          py-3.5
          text-base
          font-semibold
          text-primary-900
          transition
          hover:bg-accent-400
          disabled:cursor-not-allowed
          disabled:bg-primary-700
          disabled:text-primary-400
          disabled:hover:bg-primary-700
        ">
        {isReady ? `Reserve ${cabinName}` : "Select your dates"}
      </button>

      <p className="mt-3 text-center text-xs text-primary-500">
        No payment required today
      </p>
    </div>
  );
}

export default ReserveButton;
