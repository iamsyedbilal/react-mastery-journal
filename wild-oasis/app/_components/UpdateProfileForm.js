"use client";
import Image from "next/image";
import SelectCountry from "./SelectCountry";
import { updateGuestProfile } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

export default function UpdateProfileForm({ guest }) {
  const { fullName, email, nationality, countryFlag, nationalID } = guest;

  return (
    <form className="space-y-8" action={updateGuestProfile}>
      {/* Card */}
      <div className="rounded-xl border border-primary-800 bg-primary-950 p-6 sm:p-8 space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm text-primary-300">Full name</label>
          <input
            defaultValue={fullName}
            name="fullName"
            disabled
            className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800 disabled:opacity-50"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm text-primary-300">Email address</label>
          <input
            defaultValue={email}
            disabled
            name="email"
            className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800 disabled:opacity-50"
          />
        </div>

        {/* Nationality Selection */}
        <div className="space-y-2">
          <label className="text-sm text-primary-300">
            Where are you from?
          </label>
          <div className="flex items-center gap-3">
            {countryFlag && (
              <Image
                height={20}
                width={20}
                src={countryFlag}
                alt="Country flag"
                className="h-5 w-5 rounded-sm object-cover"
              />
            )}
            <div className="flex-1">
              <SelectCountry name="nationality" defaultCountry={nationality} />
            </div>
          </div>
        </div>

        {/* National ID */}
        <div className="space-y-2">
          <label className="text-sm text-primary-300">National ID number</label>
          <input
            name="nationalID"
            defaultValue={nationalID}
            className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <SubmitButton
          pendingLabel="Updating..."
          type="submit"
          className="rounded-xl bg-accent-500 px-8 py-4 font-semibold text-primary-900 transition-all hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.3)]">
          Update profile
        </SubmitButton>
      </div>
    </form>
  );
}
