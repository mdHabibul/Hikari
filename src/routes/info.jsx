import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/info")({
    component: Info,
});

function Info() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-custom-background font-english text-custom-text">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">About Hikari</p>
                        <h1 className="text-3xl font-semibold">Japanese study, all in one place</h1>
                    </div>
                    <button onClick={() => navigate({ to: "/home" })} className="rounded-xl border border-custom-border-hover bg-custom-secondary px-5 py-3 text-sm font-semibold text-custom-text transition-colors hover:bg-custom-secondary-hover">
                        Choose a level <span className="ml-2">→</span>
                    </button>
                </div>
                <p className="mb-10 max-w-3xl text-base text-custom-text-muted">
                    Hikari organizes kanji, vocabulary, and grammar by JLPT level. Choose a level to practice a subject or browse its study lists.
                </p>
                <div className="flex flex-col gap-4">
                    <section className="flex flex-wrap items-start gap-5 rounded-2xl border border-custom-border-hover bg-custom-bg-200 p-6 shadow-sm">
                        <div className="min-w-36">
                            <p className="text-xs font-semibold uppercase text-custom-text-muted">Kanji</p>
                            <p className="mt-2 text-3xl font-semibold">2211</p>
                        </div>
                        <p className="min-w-52 flex-1 text-sm text-custom-text-muted">Practice readings and meanings, or browse the kanji frequency heatmap.</p>
                    </section>
                    <section className="flex flex-wrap items-start gap-5 rounded-2xl border border-custom-border-hover bg-custom-bg-400 p-6 shadow-sm">
                        <div className="min-w-36">
                            <p className="text-xs font-semibold uppercase text-custom-text-muted">Vocabulary</p>
                            <p className="mt-2 text-3xl font-semibold">7811</p>
                        </div>
                        <p className="min-w-52 flex-1 text-sm text-custom-text-muted">Study Japanese words with readings, meanings, and example sentences.</p>
                    </section>
                    <section className="flex flex-wrap items-start gap-5 rounded-2xl border border-custom-border-hover bg-custom-bg-50 p-6 shadow-sm">
                        <div className="min-w-36">
                            <p className="text-xs font-semibold uppercase text-custom-text-muted">Grammar</p>
                            <p className="mt-2 text-3xl font-semibold">526</p>
                        </div>
                        <p className="min-w-52 flex-1 text-sm text-custom-text-muted">Practice grammar patterns or browse meanings, formation, and examples.</p>
                    </section>
                </div>
                <section className="mt-10 border-t border-custom-border-hover pt-8">
                    <h2 className="mb-3 text-xl font-semibold">Five JLPT levels</h2>
                    <p className="text-sm
                     text-custom-text-muted">
                        Start at N5 for beginner material and work up to N1 for advanced study. Choose a level to see its kanji, vocabulary, and grammar options.
                    </p>
                </section>
                <p className="mt-6 text-xs text-custom-text-muted">Content totals across JLPT N1 to N5.</p>
            </div>
        </div>
    );
}