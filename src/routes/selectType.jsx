import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/selectType")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
        subject: ["kanji", "vocabulary", "grammar"].includes(search.subject) ? search.subject : "kanji",
    }),
    component: SelectType,
});

function SelectType() {
    const navigate = useNavigate();
    const { level, subject } = Route.useSearch();
    const subjectLabels = {
        kanji: "Kanji",
        vocabulary: "Vocabulary",
        grammar: "Grammar",
    };
    const studyModes = {
        kanji: [
            { title: "Practice", description: `Practice random kanji from JLPT N${level}.`, mode: "practice" },
            { title: "All Kanji Heatmap", description: `Browse the full JLPT N${level} kanji list.`, mode: "browse" },
            // { title: "Knowledge Check", description: "Test yourself on the kanji you have studied.", mode: "quiz" },
        ],
        vocabulary: [
            { title: "Practice", description: `Practice JLPT N${level} vocabulary.`, mode: "practice" },
            { title: "Vocabulary List", description: `Browse JLPT N${level} vocabulary.`, mode: "browse" },
            // { title: "Knowledge Check", description: "Test yourself on the vocabulary you have studied.", mode: "quiz" },
        ],
        grammar: [
            { title: "Practice", description: `Practice JLPT N${level} grammar.`, mode: "practice" },
            { title: "Grammar Patterns", description: `Browse JLPT N${level} grammar patterns.`, mode: "browse" },
            { title: "Knowledge Check", description: "Test yourself on the grammar you have studied.", mode: "quiz" },
        ],
    };

    function openStudyMode(mode) {
        if (subject === "kanji" && mode === "practice") {
            navigate({ to: `/jlpt-n${level}` });
            return;
        }

        if (subject === "kanji" && mode === "browse") {
            navigate({ to: "/kanjis", search: { level } });
            return;
        }

        if (subject === "vocabulary" && mode === "practice") {
            navigate({ to: "/vocab", search: { level } });
            return;
        }

        navigate({ to: "/study", search: { level, subject, mode } });
    }

    return (
        <div className="min-h-screen w-full bg-custom-background px-6 py-20 font-english text-custom-text">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-custom-text-muted">{subjectLabels[subject]} study</p>
            <h1 className="mb-4 text-center text-4xl font-semibold sm:text-5xl">Choose your {subjectLabels[subject].toLowerCase()} study mode</h1>
            <p className="mb-12 text-center text-sm text-custom-text-muted">JLPT N{level}</p>

            <div className="m-auto flex max-w-3xl flex-col justify-center gap-4">
                {studyModes[subject].map(({ title, description, mode }) => (
                    <button key={mode} onClick={() => openStudyMode(mode)} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                        <div>
                            <p className="mb-2 text-xl font-semibold text-custom-text">{title}</p>
                            <p className="text-sm text-custom-text-muted">{description}</p>
                        </div>
                        <span className="text-custom-text-muted transition-transform group-hover:translate-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
