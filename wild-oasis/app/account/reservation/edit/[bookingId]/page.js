import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = await params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-semibold text-3xl tracking-tight text-accent-400 mb-10">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900/95 backdrop-blur-sm border border-primary-800 rounded-2xl py-10 px-10 shadow-2xl flex flex-col gap-8">
        <input type="hidden" value={bookingId} name="bookingId" />

        <div className="space-y-3">
          <label
            htmlFor="numGuests"
            className="block text-sm uppercase tracking-wider text-primary-300 font-medium">
            How many guests?
          </label>

          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="w-full rounded-xl border border-primary-300/20 bg-primary-200 px-5 py-4 text-primary-800 shadow-lg transition-all duration-300 outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
            required>
            <option value="">Select number of guests...</option>

            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="observations"
            className="block text-sm uppercase tracking-wider  font-medium text-white">
            Anything we should know about your stay?
          </label>

          <textarea
            name="observations"
            defaultValue={observations}
            rows={5}
            placeholder="Special requests, arrival details, dietary requirements..."
            className="w-full rounded-xl border border-primary-300/20 bg-primary-200 px-5 py-4 text-white shadow-lg transition-all duration-300 outline-none resize-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
          />
        </div>

        <div className="pt-4 border-t border-primary-800 flex justify-end">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
