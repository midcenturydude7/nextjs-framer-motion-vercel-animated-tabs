// Integrations.tsx Component
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Integrations() {
  return (
    <div className="flex h-screen flex-col">
      <MaxWidthWrapper>
        <span className="mx-auto px-4 text-4xl">Integrations</span>
      </MaxWidthWrapper>

      <div className="mt-10 flex w-full border-t border-zinc-800 px-4">
        <MaxWidthWrapper>
          <div className="mt-8 h-[800px] rounded-lg border border-zinc-800 bg-zinc-950"></div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
