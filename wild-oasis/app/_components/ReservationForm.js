"use client";

import Image from "next/image";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { id, regularPrice, discount, maxCapacity } = cabin;
  const isRangeSelected = Boolean(range?.from && range?.to);

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="px-7 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-medium text-primary-200">Your details</h3>

        <div className="flex items-center gap-2">
          <Image
            // Important to display google profile images
            width={24}
            height={24}
            referrerPolicy="no-referrer"
            className="rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p className="text-sm text-primary-300">{user.name}</p>
        </div>
      </div>

      <form
        className="space-y-5"
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}>
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
            Special requests{" "}
            <span className="text-primary-500">(optional)</span>
          </label>

          <textarea
            id="observations"
            name="observations"
            rows="3"
            placeholder="Pets, allergies, accessibility needs, arrival notes..."
            className="
              w-full
              resize-none
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
            "
          />
        </div>
        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>

        {!isRangeSelected && (
          <p className="rounded-xl border border-primary-800 bg-primary-900 px-4 py-3 text-sm text-primary-400">
            Select your dates above to continue.
          </p>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;
