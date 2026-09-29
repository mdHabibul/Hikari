import { createFileRoute } from "@tanstack/react-router";
import VocabApi from "../vocabApi";

export const Route = createFileRoute("/vocab")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
    }),
    component: Vocabulary,
});

function Vocabulary() {
    const { level } = Route.useSearch();

    return <VocabApi level={level} />;
}