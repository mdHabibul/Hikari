import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/kanaMode")({
    validateSearch: (search) => ({
        script: search.script === "katakana" ? "katakana" : "hiragana",
    }),
    component: KanaMode,
});

function KanaMode() {
    const navigate = useNavigate();
    const { script } = Route.useSearch();
    const title = script === "katakana" ? "Katakana" : "Hiragana";

    return (
        <div className="min-h-screen w-full bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light px-6 py-20 font-english text-custom-text">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-custom-text-muted">{title} study</p>
            <h1 className="mb-4 text-center text-4xl font-semibold sm:text-5xl">How would you like to study?</h1>
            <p className="mb-12 text-center text-sm text-custom-text-muted">Choose a learning mode to continue.</p>

            <div className="m-auto flex max-w-3xl flex-col justify-center gap-4">
                <button
                    onClick={() => navigate({ to: `/${script}` })}
                    className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover"
                >
                    <div>
                        <p className="mb-2 text-xl font-semibold">Learn</p>
                        <p className="text-sm text-custom-text-muted">Study the {title.toLowerCase()} syllabary.</p>
                    </div>
                    <span className="text-custom-text-muted transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button
                    onClick={() => navigate({ to: `/${script}Quiz` })}
                    className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover"
                >
                    <div>
                        <p className="mb-2 text-xl font-semibold">Quiz</p>
                        <p className="text-sm text-custom-text-muted">Test your {title.toLowerCase()} knowledge.</p>
                    </div>
                    <span className="text-custom-text-muted transition-transform group-hover:translate-x-1">→</span>
                </button>
            </div>
        </div>
    );
}