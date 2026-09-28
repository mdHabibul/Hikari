import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/selectType")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
    }),
    component: SelectType,
});

function SelectType() {
    const navigate = useNavigate();
    const { level } = Route.useSearch();

    return (
        <div className="min-h-screen w-full bg-custom-background px-6 py-20 font-english text-custom-text">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-custom-text-muted">Kanji study</p>
            <h1 className="mb-4 text-center text-4xl font-semibold sm:text-5xl">Choose your study mode</h1>
            <p className="mb-12 text-center text-sm text-custom-text-muted">JLPT N{level}</p>

            <div className="m-auto flex max-w-3xl flex-col justify-center gap-4">
                <button onClick={() => navigate({ to: `/jlpt-n${level}` })} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                    <div>
                        <p className="mb-2 text-xl font-semibold text-custom-text">Practice</p>
                        <p className="text-sm text-custom-text-muted">Practice random kanjis from JLPT N{level}.</p>
                    </div>
                    <span className="text-custom-text-muted transition-transform group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-xl text-custom-text-muted transition-all duration-200 group-hover:translate-x-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>

                    </span>
                </button>

                <button onClick={() => navigate({ to: "/kanjis", search: { level } })} className="group flex items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:border-custom-primary hover:bg-custom-secondary-hover hover:shadow-2xl active:bg-custom-mint-hover">
                    <div>
                        <p className="mb-2 text-xl font-semibold text-custom-text">All Kanji Heatmap</p>
                        <p className="text-sm text-custom-text-muted">Browse the full JLPT N{level} kanji list.</p>
                    </div>
                    <span className="text-custom-text-muted transition-transform group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-xl text-custom-text-muted transition-all duration-200 group-hover:translate-x-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </span>
                </button>

                <button disabled className="group flex cursor-not-allowed items-center justify-between rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-6 text-left opacity-50">
                    <div>
                        <p className="mb-2 text-xl font-semibold text-custom-text">Knowledge Check</p>
                        <p className="text-sm text-custom-text-muted">Test yourself on the kanji you have studied.</p>
                    </div>
                    <span className="text-sm text-custom-text-muted">-</span>
                </button>
            </div>
        </div>
    );
}
