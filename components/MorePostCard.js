import Image from "next/image";
export default function MorePostCard({ title, image }) {
  return (
    <div className="my-8 flex border border-gray-200 items-stretch">
      <div className="px-4 py-8">
        <p>{title}</p>
        <p className="text-gray-500 text-lg">
          by Bradley Nice, Content Manager at ClickHelp.co — best technical
          writing tool
        </p>
        <p className="text-sm text-gray-500">medium.com</p>
      </div>
      <div className="flex-grow w-44 bg-blue-500 relative">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
