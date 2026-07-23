import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />
      <Container className="relative text-center">
        <p className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white">
          This page took a detour.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-300">
          The page you&apos;re looking for isn&apos;t here — but your next batch
          of auto glass jobs could be. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" withArrow>
            Back to home
          </Button>
          <Button href="/audit" variant="outline">
            Get a free audit
          </Button>
        </div>
      </Container>
    </section>
  );
}
