"use client";

import Link from "next/link";
import { useState } from "react";
import StoreExercises from "./StoreExercises";

type Person = { firstName: string; lastName: string; age: number; city: string };

function ChildCounter({ count, onChange }: { count: number; onChange: (value: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded bg-green-600 px-3 py-1 text-white" onClick={() => onChange(count + 1)}>Up</button>
      <button className="rounded bg-red-600 px-3 py-1 text-white" onClick={() => onChange(count - 1)}>Down</button>
    </div>
  );
}

export default function Lab4() {
  const [count, setCount] = useState(7);
  const [childCount, setChildCount] = useState(7);
  const [likesReact, setLikesReact] = useState(true);
  const [likesNext, setLikesNext] = useState(false);
  const [firstName, setFirstName] = useState("Siddhi");
  const [startDate, setStartDate] = useState("2026-09-08");
  const [endDate, setEndDate] = useState("2026-12-18");
  const [person, setPerson] = useState<Person>({ firstName: "Ada", lastName: "Lovelace", age: 36, city: "London" });
  const [items, setItems] = useState(["Learn React state", "Build a form", "Ship Lab 4"]);
  const [life, setLife] = useState("Learning");
  const [message, setMessage] = useState("Ready");
  const [profileSaved, setProfileSaved] = useState(false);

  const addItem = () => setItems((current) => [...current, `New item ${current.length + 1}`]);
  const changePerson = (field: keyof Person, value: string) =>
    setPerson((current) => ({ ...current, [field]: field === "age" ? Number(value) : value }));

  return (
    <div id="wd-lab4" className="flex max-w-4xl flex-col gap-5 p-4">
      <h2 className="text-2xl font-semibold">Lab 4 — Events, State, and Stores</h2>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Click Events</h3>
        <p>{message}</p>
        <button id="wd-onclick-hello" className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-white" onClick={() => setMessage("Hello from Siddhi!")}>Say hello</button>
        <button id="wd-onclick-goodbye" className="rounded bg-slate-600 px-3 py-1.5 text-white" onClick={() => setMessage("Goodbye!")}>Say goodbye</button>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Passing Data to Event Handlers</h3>
        <p>{life}</p>
        {["Life is good", "Life is creative", "Life is a journey"].map((value) => (
          <button key={value} className="mr-2 rounded border px-3 py-1.5" onClick={() => setLife(value)}>{value}</button>
        ))}
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Passing Functions to Children</h3>
        <button className="mr-2 rounded border px-3 py-1.5" onClick={() => setMessage("Siddhi's parent callback ran.")}>Run my callback</button>
        <button className="rounded border px-3 py-1.5" onClick={() => setMessage("Sample callback ran.")}>Run sample callback</button>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">let vs. useState Counter: {count}</h3>
        <p>A plain variable does not trigger a React render; useState does.</p>
        <button id="wd-counter-up-click" className="mr-2 rounded bg-green-600 px-3 py-1.5 text-white" onClick={() => setCount((value) => value + 1)}>Up</button>
        <button id="wd-counter-down-click" className="mr-2 rounded bg-red-600 px-3 py-1.5 text-white" onClick={() => setCount((value) => value - 1)}>Down</button>
        <button id="wd-counter-reset-click" className="rounded border px-3 py-1.5" onClick={() => setCount(7)}>Reset to 7</button>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Parent and Child Shared Counter: {childCount}</h3>
        <ChildCounter count={childCount} onChange={setChildCount} />
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Boolean State</h3>
        <label className="mr-5"><input type="checkbox" checked={likesReact} onChange={(event) => setLikesReact(event.target.checked)} /> I like React: {String(likesReact)}</label>
        <label><input type="checkbox" checked={likesNext} onChange={(event) => setLikesNext(event.target.checked)} /> I like Next.js: {String(likesNext)}</label>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Controlled String State</h3>
        <label htmlFor="wd-first-name" className="mr-2">First name</label>
        <input id="wd-first-name" className="rounded border px-2 py-1" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <p>Current value: {firstName}</p>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Date State</h3>
        <label htmlFor="wd-start-date" className="mr-2">Start date</label>
        <input id="wd-start-date" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
        <p>Selected date: {startDate}</p>
        <label htmlFor="wd-end-date" className="mr-2">End date</label>
        <input id="wd-end-date" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Object State</h3>
        <div className="mb-3 flex flex-wrap gap-2">
          <input aria-label="Person first name" className="rounded border px-2 py-1" value={person.firstName} onChange={(event) => changePerson("firstName", event.target.value)} />
          <input aria-label="Person last name" className="rounded border px-2 py-1" value={person.lastName} onChange={(event) => changePerson("lastName", event.target.value)} />
          <input aria-label="Person age" type="number" className="w-24 rounded border px-2 py-1" value={person.age} onChange={(event) => changePerson("age", event.target.value)} />
          <input id="wd-person-city" aria-label="Person city" className="rounded border px-2 py-1" value={person.city} onChange={(event) => changePerson("city", event.target.value)} />
        </div>
        <pre className="overflow-auto rounded bg-slate-100 p-3">{JSON.stringify(person, null, 2)}</pre>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Array State</h3>
        <button id="wd-add-item-click" className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-white" onClick={addItem}>Add</button>
        <button id="wd-clear-items-click" className="rounded border px-3 py-1.5" onClick={() => setItems([])}>Clear array</button>
        <ul className="mt-3 list-disc pl-6">
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="my-1">{item} <button aria-label={`Delete ${item}`} className="ml-2 rounded border px-2 py-0.5" onClick={() => setItems((current) => current.filter((_, i) => i !== index))}>Delete</button></li>
          ))}
        </ul>
      </section>

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Profile Form State</h3>
        <label className="mr-2"><input type="checkbox" checked={profileSaved} onChange={(event) => setProfileSaved(event.target.checked)} /> Profile reviewed</label>
        <p>{profileSaved ? "Profile ready to save." : "Review the profile fields before saving."}</p>
      </section>
      <StoreExercises />

      <section className="rounded border p-4">
        <h3 className="mb-2 text-lg font-semibold">Encoding State in the URL</h3>
        <ul className="space-y-1">
          <li><Link className="underline" href="/labs/lab4/url-encoding/query-params?a=3&b=4">Query parameters: 3 + 4</Link></li>
          <li><Link className="underline" href="/labs/lab4/url-encoding/path-params/3/4">Path parameters: 3 + 4</Link></li>
          <li><Link className="underline" href="/labs/lab4/url-encoding/path-params/2.5/-1.25">Decimal path parameters: 2.5 + (-1.25)</Link></li>
        </ul>
      </section>
    </div>
  );
}
