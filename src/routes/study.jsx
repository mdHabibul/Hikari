import { createFileRoute } from "@tanstack/react-router";
import Vocabs from "../vocabs";
import GramApi from "../gramApi";
import Grams from "./grams";

export const Route = createFileRoute("/study")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
        subject: ["kanji", "vocabulary", "grammar"].includes(search.subject) ? search.subject : "kanji",
        mode: ["practice", "browse", "quiz"].includes(search.mode) ? search.mode : "practice",
    }),
    component: StudyPlaceholder,
});

function StudyPlaceholder() {
    const { level, subject, mode } = Route.useSearch();

    if (subject === "vocabulary" && mode === "browse") {
        return <Vocabs level={level} />;
    }

    if (subject === "grammar" && mode === "practice") {
        return <GramApi level={level} />;
    }

    if (subject === "grammar" && mode === "browse") {
        return <Grams level={level} />;
    }

    return null;
}