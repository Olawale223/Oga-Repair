import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-page px-6">
      <div className="max-w-[560px] text-center">
        <p className="eyebrow-copy">Page Not Found</p>
        <h1 className="mt-4 text-display font-semibold text-ink">This repair route is missing.</h1>
        <p className="mt-6 text-[1.1rem] leading-8 text-mutedDark">
          The page you asked for could not be found. Head back to the main experience and we’ll
          get you where you need to go.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Return Home</Button>
        </div>
      </div>
    </main>
  );
}
