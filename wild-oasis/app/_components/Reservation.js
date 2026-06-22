import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const [settings, bookingDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="sticky top-10 h-fit space-y-6">
      <DateSelector
        settings={settings}
        bookingDates={bookingDates}
        cabin={cabin}
      />

      <ReservationForm cabin={cabin} />

      <div className="rounded-2xl border border-primary-800 bg-primary-950 p-5">
        <button
          className="
                w-full
                rounded-xl
                bg-accent-500
                py-4
                text-lg
                font-semibold
                text-primary-900
                transition-all
                hover:bg-accent-600
              ">
          Reserve {cabin.name} cabin →
        </button>

        <p className="mt-3 text-center text-xs text-primary-400">
          No payment required today
        </p>
      </div>
    </div>
  );
}
