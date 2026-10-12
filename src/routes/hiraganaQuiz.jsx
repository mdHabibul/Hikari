import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hiraganaQuiz")({
    component: HiraganaQuiz,
});

function HiraganaQuiz() {
    return <main className="min-h-screen w-full bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light" />;
}