// Overview.tsx Component
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Overview() {
  const numberOfDivs = 9;

  const divElements = [];
  for (let i = 0; i < numberOfDivs; i++) {
    divElements.push(
      <div
        className="h-64 rounded border border-zinc-800 bg-zinc-950 p-4"
        key={i}
      ></div>,
    );
  }

  return (
    <div>
      <MaxWidthWrapper>
        <div className="grid-col-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {divElements}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
