"use client";

import {
  differenceInDays,
  format,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, {
        start: range.from,
        end: range.to,
      }),
    )
  );
}

function DateSelector({ settings, bookingDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookingDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const { minBookingLength, maxBookingLength } = settings;

  const hasRange = Boolean(displayRange.from && displayRange.to);
  const numOfNights = hasRange
    ? differenceInDays(displayRange.to, displayRange.from)
    : 0;
  const cabinPrice = numOfNights * (regularPrice - discount);

  return (
    <div>
      <div
        className="flex justify-center [&_.rdp]:m-0"
        style={{
          "--rdp-accent-color": "var(--color-accent-500)",
          "--rdp-accent-color-dark": "var(--color-accent-600)",
          "--rdp-background-color": "var(--color-primary-800)",
          "--rdp-outline": "2px solid var(--color-accent-500)",
          "--rdp-outline-selected": "2px solid var(--color-accent-400)",
          "--rdp-selected-color": "var(--color-primary-900)",
        }}>
        <DayPicker
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          min={minBookingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          numberOfMonths={2}
          captionLayout="dropdown"
          disabled={(curDate) =>
            isPast(curDate) ||
            bookingDates.some((date) => isSameDay(date, curDate))
          }
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-primary-800 pt-4 text-sm">
        {hasRange ? (
          <p className="text-primary-300">
            <span className="font-semibold text-primary-100">
              {format(displayRange.from, "MMM d")} –{" "}
              {format(displayRange.to, "MMM d")}
            </span>{" "}
            · {numOfNights} {numOfNights === 1 ? "night" : "nights"} ·{" "}
            <span className="font-semibold text-accent-500">${cabinPrice}</span>
          </p>
        ) : (
          <p className="text-primary-500">
            Select your check-in and check-out dates
          </p>
        )}

        {(range.from || range.to) && (
          <button
            onClick={resetRange}
            className="shrink-0 rounded-lg border border-primary-700 px-3 py-1.5 text-xs font-medium text-primary-300 transition hover:border-primary-500 hover:text-primary-100">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
