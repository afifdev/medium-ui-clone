import Image from "next/image";
import Avatar from "../public/assets/images/avatar.jpeg";
import Socmed from "./Socmed";

export default function Heading() {
  return (
    <div className="max-w-3xl mx-auto py-4 px-6 md:px-12">
      <div className="font-doulos text-4xl md:text-5xl leading-tight tracking-tightest md:tracking-tight">
        The Ultimate Guide to CSS + Cheat Sheets 📑
      </div>
      <div className="mt-6 mb-8">
        <Socmed hidden />
      </div>
      <div className="flex justify-start gap-2 items-center my-6">
        <div className="w-12 h-12 rounded-full relative">
          <Image src={Avatar} className="rounded-full" layout="fill" />
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2 mb-0.5">
            <p>Bradely Nice</p>
            <a className="px-2 py-0.5 rounded-full bg-green-700 text-white">
              Follow
            </a>
          </div>
          <div className="flex items-center text-gray-500">
            <p>Jul 16, 2018</p>
            <p>. 4 min read</p>
          </div>
        </div>
        <Socmed />
      </div>
      <p className="font-serif text-lg md:text-1.5xl tracking-tight my-6 md:my-12">
        by Bradley Nice, Content Manager at{" "}
        <span className="underline cursor-pointer">
          ClickHelp.com — professional technical writing tool
        </span>
      </p>
    </div>
  );
}
