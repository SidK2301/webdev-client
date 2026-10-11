import "@/app/labs/lab2/tailwind/utilities.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";
import { LuCodeXml } from "react-icons/lu";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl" aria-label="Six React Icons examples">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <h3 className="mt-4 text-base font-semibold">On your own</h3>
      <div className="flex gap-3 text-4xl">
        <TbBrandNextjs className="text-purple-600" />
        <LuCodeXml className="text-emerald-600" />
      </div>
      <h3 className="mt-4 text-base font-semibold">With AI</h3>
      <div className="flex gap-3 text-4xl">
        <MdOutlineSchool className="text-blue-600" />
        <HiOutlineSparkles className="text-amber-500" />
      </div>
    </div>
  );
}
