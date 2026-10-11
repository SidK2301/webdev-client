export default function TailwindResponsiveShowHide() {
  return (
    <div id="wd-tailwind-responsive-show-hide">
      <p className="block bg-red-200 p-2 md:hidden">small screen</p>
      <p className="hidden bg-green-200 p-2 md:block">large screen</p>
    </div>
  );
}
