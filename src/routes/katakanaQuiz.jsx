import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/katakanaQuiz")({
    component: KatakanaQuiz,
});

function KatakanaQuiz() {
    return <main className="min-h-screen w-full bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light" />;
}