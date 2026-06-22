"use client";

import { useState } from "react";
import { getCountryDataList, getEmojiFlag } from "countries-list";

const countries = getCountryDataList()
  .map((c) => ({
    name: c.name,
    flag: getEmojiFlag(c.iso2),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function SelectCountry({
  defaultCountry = "",
  onChange = () => {},
}) {
  const [selected, setSelected] = useState(defaultCountry);

  function handleChange(e) {
    const value = e.target.value;
    setSelected(value);
    onChange(value);
  }

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800
      focus:outline-none focus:ring-2 focus:ring-accent-500">
      <option value="" disabled>
        Select a country
      </option>
      {countries.map((country) => (
        <option key={country.name} value={country.name.toLowerCase()}>
          {country.flag} {country.name}
        </option>
      ))}
    </select>
  );
}
