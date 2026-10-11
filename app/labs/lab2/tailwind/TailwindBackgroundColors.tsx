export default function TailwindBackgroundColors() {
  return (
    <section id="wd-tailwind-background-colors">
      <h2 className="mb-4 text-3xl font-bold">Background Colors</h2>
      <div className="mb-4 bg-red-500 p-4 text-white">
        This div has a red background.
      </div>
      <div className="mb-4 bg-green-500 p-4 text-white">
        This div has a green background.
      </div>
      <div className="mb-4 bg-blue-500 p-4 text-white">
        This div has a blue background.
      </div>
      <div className="mb-4 bg-yellow-500 p-4 text-black">
        This div has a yellow background.
      </div>
      <h3 className="mt-4 text-lg font-bold">On your own</h3>
      <div className="mb-4 bg-purple-300 p-4 text-black">
        My sample uses a purple background with dark text.
      </div>
      <div id="wd-ai-bg" className="mb-4 bg-indigo-700 p-4 text-white">
        AI sample uses a dark indigo background with white text.
      </div>
    </section>
  );
}
