// Domains.tsx Component
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Domains() {
  const numberOfDivs = 3;

  const divElements = [];
  for (let i = 0; i < numberOfDivs; i++) {
    divElements.push(
      <div
        key={i}
        className="mt-8 h-20 w-full rounded-lg border border-zinc-800 bg-zinc-950"
      ></div>,
    );
  }
  return (
    <div className="flex flex-col">
      <MaxWidthWrapper>
        <span className="px-4 text-4xl md:px-8">Domains</span>
      </MaxWidthWrapper>

      <div className="mt-10 border-t border-zinc-800">
        <MaxWidthWrapper>{divElements}</MaxWidthWrapper>
      </div>
    </div>
  );
}
