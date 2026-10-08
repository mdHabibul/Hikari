import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/grammarQuiz")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
    }),
    component: GrammarQuizRoute,
});

function GrammarQuizRoute() {
    const { level } = Route.useSearch();
    return <GrammarQuiz level={level} />;
}

function GrammarQuiz({ level }) {
    return null;
}

export default GrammarQuiz;