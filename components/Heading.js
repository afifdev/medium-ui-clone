import Image from "next/image";
import Avatar from "../public/assets/images/avatar.jpeg";

export default function Heading() {
  return (
    <div className="max-w-3xl mx-auto py-4 px-12">
      <div className="font-doulos text-5xl leading-tight tracking-tight">
        The Ultimate Guide to CSS + Cheat Sheets 📑
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
        <div className="flex-grow flex gap-2 justify-end">
          <svg width="29" height="29" class="text-gray-500">
            <path
              fill="currentColor"
              d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
            ></path>
          </svg>
          <svg width="29" height="29" viewBox="0 0 29 29" class="text-gray-500">
            <path
              fill="currentColor"
              d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"
              fill="#FFFFFF"
            ></path>
          </svg>
          <svg width="29" height="29" class="text-gray-500">
            <path
              fill="currentColor"
              d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"
            ></path>
          </svg>
          <svg width="25" height="25" viewBox="0 0 25 25" class="text-gray-500">
            <path
              d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <p className="font-serif text-xl my-12">
        by Bradley Nice, Content Manager at{" "}
        <span className="underline cursor-pointer">
          ClickHelp.com — professional technical writing tool
        </span>
      </p>
    </div>
  );
}