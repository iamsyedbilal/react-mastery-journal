"use client";

function ReservationForm({ cabin }) {
  const maxCapacity = cabin.maxCapacity;
  console.log(maxCapacity);

  return (
    <div
      className="
        rounded-2xl
        border
        border-primary-800
        bg-primary-950
        p-6
      ">
      <h3 className="mb-6 text-xl font-medium text-accent-500">
        Reservation details
      </h3>

      <form className="space-y-6">
        {/* GUESTS */}
        <div>
          <label
            htmlFor="numGuests"
            className="mb-2 block text-sm text-primary-300">
            Guests
          </label>

          <select
            id="numGuests"
            name="numGuests"
            className="
              w-full
              rounded-xl
              border
              border-primary-700
              bg-primary-900
              px-4
              py-3
              text-primary-100
              outline-none
              transition-all
              focus:border-accent-500
            ">
            <option value="">Select number of guests</option>

            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        {/* NOTES */}
        <div>
          <label
            htmlFor="observations"
            className="mb-2 block text-sm text-primary-300">
            Special requests
          </label>

          <textarea
            id="observations"
            name="observations"
            rows="5"
            placeholder="Pets, allergies, accessibility needs, arrival notes..."
            className="
              w-full
              rounded-xl
              border
              border-primary-700
              bg-primary-900
              px-4
              py-3
              text-primary-100
              resize-none
              outline-none
              transition-all
              focus:border-accent-500
            "
          />
        </div>

        {/* SUMMARY */}
        <div className="rounded-xl border border-primary-800 bg-primary-900 p-4">
          <p className="text-sm text-primary-400">
            Your reservation summary will appear here after selecting dates.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
