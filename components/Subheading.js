export default function Subheading({ isBig, children }) {
  return (
    <p className={`${isBig ? "text-3xl pt-8" : ""} font-sans font-semibold`}>
      {children}
    </p>
  );
}
