import { useEffect, useState } from "react";
import GramFetch from "../gramFetch";

function Grams({ level }) {
    const [gramList, setGramList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openGramIndex, setOpenGramIndex] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        function handleGramData(nextGramList) {
            setGramList(nextGramList ?? []);
            setIsLoading(false);
        }

        GramFetch(level).then(handleGramData);
    }, [level]);

    return (
        <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Grammar</p>
                        <h1 className="text-3xl font-semibold">Grammar Patterns</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N{level}</span>
                    </div>
                </div>
                {isLoading ? (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">
                        Loading grammar patterns...
                    </div>
                ) : gramList.length === 0 ? (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">
                        No grammar patterns available.
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {gramList.map((gram, index) => (
                            <div key={gram.pattern} className={`overflow-hidden rounded-2xl border border-custom-border-hover bg-custom-secondary shadow-sm transition-shadow ${openGramIndex === index ? "shadow-md" : ""}`}>
                                <div onClick={() => setOpenGramIndex(openGramIndex === index ? null : index)} className="flex cursor-pointer items-start gap-4 px-6 py-5">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-custom-border-hover bg-custom-background text-xs font-semibold text-custom-text-muted">{String(index + 1).padStart(2, "0")}</span>
                                    <div className="min-w-0 flex-1 pt-0.5">
                                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                            <h2 className="font-kanji text-3xl font-medium text-custom-text">{gram.pattern}</h2>
                                            {gram.romaji && <p className="text-sm text-custom-text-muted">{gram.romaji}</p>}
                                        </div>
                                        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-custom-text-muted">
                                            {Array.isArray(gram.meaning) ? gram.meaning.join(", ") : gram.meaning || "No meaning available"}
                                        </p>
                                    </div>
                                    <span className="shrink-0 rounded-lg border border-custom-border-hover bg-custom-background px-3 py-2 text-xs font-semibold text-custom-text-muted">{openGramIndex === index ? "Close" : "Details"}</span>
                                </div>
                                {openGramIndex === index && <div className="border-t border-custom-border-hover px-6 py-2">
                                    <section className="py-4">
                                        <h3 className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Formation</h3>
                                        <p className="whitespace-pre-line text-sm leading-7 text-custom-text">
                                            {Array.isArray(gram.formation) ? gram.formation.join(", ") : gram.formation || "No formation information available"}
                                        </p>
                                    </section>
                                    <section className="border-t border-custom-border-hover py-4">
                                        <h3 className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Examples</h3>
                                        {gram.examples.length ? (
                                            <div>
                                                {gram.examples.map((example, exampleIndex) => (
                                                    <div key={example.ja} className="border-t border-custom-border-hover py-3 first:border-t-0 first:pt-0 last:pb-0">
                                                        <p className="font-japanese text-base leading-8 text-custom-text">{example.ja || "Japanese example unavailable"}</p>
                                                        <p className="mt-1 text-sm leading-6 text-custom-text-muted">{example.en || "Translation unavailable"}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-custom-text-muted">No examples available</p>
                                        )}
                                    </section>
                                </div>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Grams;