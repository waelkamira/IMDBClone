"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
