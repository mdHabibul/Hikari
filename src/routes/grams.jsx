import { useEffect, useState } from "react";
import GramFetch from "../gramFetch";

function Grams({ level }) {
    const [gramList, setGramList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openGram, setOpenGram] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        GramFetch(level).then((data) => {
            setGramList(data || []);
            setIsLoading(false);
        });
    }, [level]);

    return (
        <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Grammar</p>
                        <h1 className="text-3xl font-semibold">Grammar Patterns</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2"><span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N{level}</span></div>
                </div>

                {isLoading ? (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">Loading grammar patterns...</div>
                ) : gramList.length === 0 ? (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">No grammar patterns available.</div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {gramList.map((gram, index) => (
                            <div key={gram.pattern} className="overflow-hidden rounded-2xl border border-custom-border-hover bg-custom-secondary shadow-sm">
                                <div onClick={() => setOpenGram(openGram === gram.pattern ? null : gram.pattern)} className="flex cursor-pointer items-start gap-4 px-6 py-5">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-custom-border-hover bg-custom-background text-xs font-semibold text-custom-text-muted">{index + 1}</span>
                                    <div className="min-w-0 flex-1 pt-0.5">
                                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                            <h2 className="font-kanji text-3xl font-medium text-custom-text">{gram.pattern}</h2>
                                            {gram.romaji && <p className="text-sm text-custom-text-muted">{gram.romaji}</p>}
                                        </div>
                                        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-custom-text-muted">{Array.isArray(gram.meaning) ? gram.meaning.join(", ") : gram.meaning || "No meaning available"}</p>
                                    </div>
                                    <div className="flex items-center rounded-lg border border-custom-border-hover bg-custom-background px-3 py-2 text-xs font-semibold text-custom-text-muted">
                                        <span>{openGram === gram.pattern ? "Close" : "Details"}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4.1 12 6" /><path d="m5.1 8-2.9-.8" /><path d="m6 12-1.9 2" /><path d="M7.2 2.2 8 5.1" /><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" /></svg>
                                    </div>
                                </div>

                                {openGram === gram.pattern && (
                                    <div className="border-t border-custom-border-hover px-6 py-2">
                                        <section className="py-4">
                                            <h3 className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Formation</h3>
                                            <p className="whitespace-pre-line text-sm text-custom-text">{Array.isArray(gram.formation) ? gram.formation.join(", ") : gram.formation || "No formation information available"}</p>
                                        </section>

                                        <section className="border-t border-custom-border-hover py-4">
                                            <h3 className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Examples</h3>
                                            {gram.examples?.length ? (
                                                <div>
                                                    {gram.examples.map((example, i) => (
                                                        <div key={i} className="border-t border-custom-border-hover py-3 first:border-t-0 first:pt-0 last:pb-0">
                                                            <p className="font-japanese text-base text-custom-text">{example.ja || "Japanese example unavailable"}</p>
                                                            <p className="mt-1 text-sm leading-6 text-custom-text-muted">{example.en || "Translation unavailable"}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-custom-text-muted">No examples available</p>
                                            )}
                                        </section>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Grams;