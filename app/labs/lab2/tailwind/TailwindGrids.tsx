export default function TailwindGrids() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Tailwind Grids</h2>
      <div>
        <h3 className="mt-6 text-lg font-bold">4 Columns Grid</h3>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="bg-blue-300 p-3 text-center">
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mt-6 text-lg font-bold">3 Columns Grid</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-300 p-3 text-center">01</div>
          <div className="bg-blue-300 p-3 text-center">02</div>
          <div className="bg-blue-300 p-3 text-center">03</div>
          <div className="col-span-2 bg-blue-300 p-3 text-center">04</div>
          <div className="bg-blue-300 p-3 text-center">05</div>
          <div className="bg-blue-300 p-3 text-center">06</div>
          <div className="col-span-2 bg-blue-300 p-3 text-center">07</div>
        </div>
      </div>
      <div id="wd-tailwind-grid-system" className="mt-6">
        <h2 className="text-2xl font-bold">Grid system</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 text-white">
            <h3 className="text-lg font-bold">Left half</h3>
          </div>
          <div className="bg-blue-500 text-white">
            <h3 className="text-lg font-bold">Right half</h3>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <div className="col-span-4 bg-yellow-500">
            <h3 className="text-lg font-bold">One third</h3>
          </div>
          <div className="col-span-8 bg-green-500 text-white">
            <h3 className="text-lg font-bold">Two thirds</h3>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <div className="col-span-2 bg-black text-white">
            <h3 className="text-lg font-bold">Sidebar</h3>
          </div>
          <div className="col-span-8 bg-gray-500 text-white">
            <h3 className="text-lg font-bold">Main content</h3>
          </div>
          <div className="col-span-2 bg-blue-400">
            <h3 className="text-lg font-bold">Sidebar</h3>
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-lg font-bold">On your own: six-column split</h3>
      <div id="wd-your-grid" className="grid grid-cols-6 gap-4">
        <div className="col-span-2 bg-orange-300 p-3 text-center">My two-column panel</div>
        <div className="col-span-4 bg-teal-300 p-3 text-center">My four-column panel</div>
      </div>
      <div id="wd-ai-grid" className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-3 bg-indigo-300 p-3">AI sample: three columns</div>
        <div className="col-span-9 bg-rose-300 p-3">AI sample: nine columns</div>
      </div>
    </section>
  );
}
