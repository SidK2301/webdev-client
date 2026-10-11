export default function TailwindTypography() {
  return (
    <section id="wd-tailwind-typography">
      <h2 className="text-3xl">Font Size</h2>
      <p className="text-sm">This is small text.</p>
      <p className="text-base">This is base text.</p>
      <p className="text-lg">This is large text.</p>
      <p className="text-xl">This is extra large text.</p>
      <p className="text-2xl">This is 2x extra large text.</p>
      <p className="text-3xl">This is 3x extra large text.</p>
      <h2 className="mt-4 text-3xl font-bold">Font Weight</h2>
      <p className="font-thin">This is thin font weight.</p>
      <p className="font-light">This is light font weight.</p>
      <p className="font-normal">This is normal font weight.</p>
      <p className="font-medium">This is medium font weight.</p>
      <p className="font-semibold">This is semi-bold font weight.</p>
      <p className="font-bold">This is bold font weight.</p>
      <p className="font-extrabold">This is extra-bold font weight.</p>
      <p className="font-black">This is black font weight.</p>
      <h3 className="mt-4 text-lg font-bold">On your own</h3>
      <p className="text-xl font-semibold">My sample pairs large text with a semi-bold weight.</p>
      <p id="wd-ai-type" className="text-2xl font-medium">
        AI sample pairs extra-large text with medium weight.
      </p>
    </section>
  );
}
