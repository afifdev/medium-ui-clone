import Image from "next/image";
import LevelUp from "../public/assets/images/levelup.png";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center shadow-sm px-16 py-3.5 max-w-7xl mx-auto">
      <div className="flex justify-center gap-4 items-center">
        <svg viewBox="0 0 1043.63 592.71" class="w-11 h-auto cursor-pointer">
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
            </g>
          </g>
        </svg>
        <div className="w-0.5 h-8 items-stretch bg-gray-200"></div>
        <div className="w-60 h-full flex justify-center items-center">
          <Image src={LevelUp} layout="intrinsic" className="cursor-pointer" />
        </div>
      </div>
      <div className="text-sm flex justify-center items-center gap-8 text-green-700">
        <a>Sign In</a>
        <a className="px-4 py-2 rounded-full border border-green-700">
          Get Started
        </a>
      </div>
    </div>
  );
}
