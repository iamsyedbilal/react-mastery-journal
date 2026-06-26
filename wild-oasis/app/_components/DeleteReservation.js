"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteReservation } from "../_lib/actions";
import { useTransition } from "react";

export default function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this reservation?",
    );

    if (!confirmed) return;

    startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      title="Cancel reservation"
      className="
        flex flex-1 items-center justify-center gap-2
        text-primary-400
        hover:text-red-300
        hover:bg-red-500/10
        disabled:cursor-not-allowed
        disabled:opacity-50
        transition-all duration-300
      ">
      {isPending ? (
        <span className="text-xs tracking-wide">Cancelling...</span>
      ) : (
        <>
          <TrashIcon className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wide"></span>
        </>
      )}
    </button>
  );
}
