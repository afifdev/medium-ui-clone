import Image from "next/image";
export default function Credit({ image, isPersonal, title, desc }) {
  return (
    <div className="flex gap-2 mt-6 mb-16 font-sans">
      <div className="w-10 h-10 sm:w-20 sm:h-20 relative flex-grow-0 flex-shrink-0">
        <Image src={image} layout="fill" className="rounded-full" />
      </div>
      <div className="font-medium leading-loose">
        <p
          className={`${
            isPersonal ? "block" : "hidden"
          } text-sm text-gray-500 tracking-wider`}
        >
          WRITTEN BY
        </p>
        <div className="flex justify-start items-center gap-2">
          <p className="font-semibold text-base sm:text-1.5xl">{title}</p>
          <a className="text-xs bg-green-700 text-white rounded-full py-1 px-2 block sm:hidden">
            Follow
          </a>
        </div>
        <p className="text-base text-gray-500">{desc}</p>
      </div>
      <div>
        <a className="text-sm bg-green-700 text-white rounded-full px-3 py-2 hidden sm:block">
          Follow
        </a>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isPersonal ? "hidden sm:block" : "hidden"
          } p-2 text-white h-10 w-10 rounded-full bg-green-700`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}
