"use client";

import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookingDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  const regularPrice = cabin.regularPrice;
  const discount = cabin.discount;

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div
      className="
        rounded-2xl
        border
        border-primary-800
        bg-primary-950
        p-6
      ">
      <div className="mb-8">
        <h3 className="text-xl font-medium text-accent-500">
          Select your stay
        </h3>

        <p className="mt-1 text-sm text-primary-400">
          Choose check-in and check-out dates
        </p>
      </div>

      {/* PRICE */}
      <div className="mb-8 border-b border-primary-800 pb-6">
        {discount > 0 ? (
          <div className="flex items-center gap-3">
            <span className="text-4xl font-light text-primary-50">
              ${regularPrice - discount}
            </span>

            <span className="text-primary-500 line-through">
              ${regularPrice}
            </span>

            <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs text-accent-500">
              Save ${discount}
            </span>
          </div>
        ) : (
          <span className="text-4xl font-light text-primary-50">
            ${regularPrice}
          </span>
        )}

        <p className="mt-2 text-sm text-primary-400">per night</p>
      </div>

      {/* CALENDAR */}
      <div className="flex justify-center">
        <DayPicker
          onSelect={setRange}
          selected={range}
          min={minBookingLength}
          max={maxBookingLength}
          mode="range"
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear()}
          numberOfMonths={2}
          captionLayout="dropdown"
        />
      </div>

      {range.from || range.to ? (
        <button
          className="border border-primary-800 py-2 px-4 text-sm font-semibold"
          onClick={resetRange}>
          Clear
        </button>
      ) : null}
    </div>
  );
}

export default DateSelector;
