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
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-custom-text-muted">{subject === "vocabulary" ? "Vocabulary" : subject === "grammar" ? "Grammar" : "Kanji"} study</p>
            <h1 className="mb-4 text-center text-4xl font-semibold sm:text-5xl">Choose your {subject === "vocabulary" ? "vocabulary" : subject === "grammar" ? "grammar" : "kanji"} study mode</h1>
            <p className="mb-12 text-center text-sm text-custom-text-muted">JLPT N{level}</p>

            <div className="m-auto flex max-w-3xl flex-col justify-center gap-4">
                {subject === "vocabulary" ? (
                    <>
                        <button onClick={() => openStudyMode("practice")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Practice</p><p className="text-sm text-custom-text-muted">Practice JLPT N{level} vocabulary.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                        <button onClick={() => openStudyMode("browse")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Vocabulary List</p><p className="text-sm text-custom-text-muted">Browse JLPT N{level} vocabulary.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                        {/* <button onClick={() => openStudyMode("quiz")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Knowledge Check</p><p className="text-sm text-custom-text-muted">Test yourself on the vocabulary you have studied.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button> */}
                    </>
                ) : subject === "grammar" ? (
                    <>
                        <button onClick={() => openStudyMode("practice")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Practice</p><p className="text-sm text-custom-text-muted">Practice JLPT N{level} grammar.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                        <button onClick={() => openStudyMode("browse")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Grammar Patterns</p><p className="text-sm text-custom-text-muted">Browse JLPT N{level} grammar patterns.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                        <button onClick={() => openStudyMode("quiz")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Knowledge Check</p><p className="text-sm text-custom-text-muted">Test yourself on the grammar you have studied.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => openStudyMode("practice")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Practice</p><p className="text-sm text-custom-text-muted">Practice random kanji from JLPT N{level}.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                        <button onClick={() => openStudyMode("browse")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">All Kanji Heatmap</p><p className="text-sm text-custom-text-muted">Browse the full JLPT N{level} kanji list.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button>
                        {/* <button onClick={() => openStudyMode("quiz")} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                            <div><p className="mb-2 text-xl font-semibold text-custom-text">Knowledge Check</p><p className="text-sm text-custom-text-muted">Test yourself on the kanji you have studied.</p></div>
                            <span className="text-custom-text-muted transition-transform group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
                        </button> */}
                    </>
                )}
            </div>
        </div>
    );
}
