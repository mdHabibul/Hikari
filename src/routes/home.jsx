import { createFileRoute, useNavigate } from "@tanstack/react-router";
import LevelBtn from "../levelBtn";

export const Route = createFileRoute("/home")({
    component: Home,
});

function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen text-center bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light font-english text-custom-text">
            <div className="py-15">
                <p className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Your Learning Journey</p>
                <h1 className="mb-4 text-center text-5xl font-semibold">Select your level</h1>
                <p className="mb-12 text-center text-sm text-custom-text-muted">Choose a JLPT level and start learning at your own pace.</p>
                <div className="flex justify-center gap-5 flex-wrap m-auto mt-10 w-250 text-custom-mint-light">
                    <LevelBtn level={1} subText={"Advanced"} />
                    <LevelBtn level={2} subText={"Upper Intermediate"} />
                    <LevelBtn level={3} subText={"Intermediate"} />
                    <LevelBtn level={4} subText={"Elementary"} />
                    <LevelBtn level={5} subText={"Beginner"} />
                </div>
                <section className="mx-auto mt-24 max-w-5xl px-6 text-left">
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Inside Hikari</p>
                            <h2 className="text-3xl font-semibold">Your Japanese study toolkit</h2>
                        </div>
                        <button onClick={() => navigate({ to: "/info" })} className="rounded-xl border border-custom-border-hover bg-custom-secondary px-5 py-3 text-sm font-semibold text-custom-text transition-colors hover:bg-custom-secondary-hover">
                            More about Hikari <span className="ml-2">→</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="min-w-52 flex-1 rounded-2xl border border-custom-border-hover bg-custom-bg-200 p-6 text-custom-text shadow-sm">
                            <p className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Kanji</p>
                            <p className="mb-3 text-3xl font-semibold">2211</p>
                            <p className="text-sm text-custom-text-muted">Practice readings and meanings, or browse the kanji frequency heatmap.</p>
                        </div>
                        <div className="min-w-52 flex-1 rounded-2xl border border-custom-border-hover bg-custom-bg-400 p-6 text-custom-text shadow-sm">
                            <p className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Vocabulary</p>
                            <p className="mb-3 text-3xl font-semibold">7811</p>
                            <p className="text-sm text-custom-text-muted">Study Japanese words with readings, meanings, and example sentences.</p>
                        </div>
                        <div className="min-w-52 flex-1 rounded-2xl border border-custom-border-hover bg-custom-bg-50 p-6 text-custom-text shadow-sm">
                            <p className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Grammar</p>
                            <p className="mb-3 text-3xl font-semibold">526</p>
                            <p className="text-sm text-custom-text-muted">Practice grammar patterns or browse meanings, formation, and examples.</p>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-custom-text-muted">Content totals across JLPT N1 to N5.</p>
                </section>
            </div>
        </div>
    )
}

export default Home