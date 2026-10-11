export default function TailwindSpacing() {
  return (
    <section id="wd-tailwind-spacing">
      <h2 className="text-3xl">Margin</h2>
      <div className="mb-4 bg-blue-200 p-4">
        This div has a bottom margin of 4.
      </div>
      <div className="ms-4 me-8 bg-blue-200 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>
      <h2 className="mt-8 text-3xl">Padding</h2>
      <div className="mb-4 bg-green-200 pb-8 ps-2 pt-4">
        This div has starting padding of 2, top padding of 4, and bottom padding of 8.
      </div>
      <div className="bg-green-200 p-6">
        This div has padding all around of 6.
      </div>
      <h3 className="mt-8 text-2xl font-bold">On your own</h3>
      <div className="mt-6 bg-orange-200 pb-6 ps-4">
        My sample combines top margin, start padding, and bottom padding.
      </div>
      <div id="wd-ai-spacing" className="mt-6 bg-purple-200 pb-4 ps-8">
        AI sample combines directional margin and padding utilities.
      </div>
    </section>
  );
}
