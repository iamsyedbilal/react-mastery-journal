"use client";

import { useState } from "react";
import { getCountryDataList, getEmojiFlag } from "countries-list";

const countries = getCountryDataList()
  .map((c) => ({
    name: c.name,
    flag: getEmojiFlag(c.iso2),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function SelectCountry({ name, defaultCountry = "" }) {
  const [selected, setSelected] = useState(defaultCountry || "");

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <select
      name={name}
      value={selected}
      onChange={handleChange}
      className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500">
      <option value="" disabled>
        Select a country
      </option>

      {countries.map((country) => (
        <option
          key={country.name}
          value={country.name} // ✅ STORE FULL NAME
        >
          {country.flag} {country.name}
        </option>
      ))}
    </select>
  );
}
