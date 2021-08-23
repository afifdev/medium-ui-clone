import Image from "next/image";
export default function MorePostCard({ title, image }) {
  return (
    <div className="my-6 md:my-8 flex border border-gray-200 items-stretch">
      <div className="px-2 md:px-4 py-4 md:py-8">
        <p className="line-clamp-2">{title}</p>
        <p className="text-gray-500 text-lg line-clamp-2">
          by Bradley Nice, Content Manager at ClickHelp.co — best technical
          writing tool
        </p>
        <p className="text-sm text-gray-500">medium.com</p>
      </div>
      <div className="flex-grow flex-shrink-0 w-40 bg-blue-500 relative">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
