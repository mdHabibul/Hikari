import GramFetch from "./gramFetch";
import { useState, useEffect } from "react"

function GramApi({ level = 3 }) {
    const [dataGram, setDataGram] = useState(null)
    const [gram, setGram] = useState({
        pattern: null,
        romaji: null,
        meaning: null,
        formation: null,
        examplesArray: [],
        isLoading: true,
        // showReading: false,
        // showMeaning: false,
        // showEx: false,
        // showReadingBtn: true,
        // showMeaningBtn: true,
        // showExBtn: true,
    });

    useEffect(() => {
        function fetchGram() {
            GramFetch(level).then((gramList) => {
                setDataGram(gramList);
                if (!gramList.length) {
                    setVocab((currentGram) => ({
                        ...currentGram,
                        pattern: "_",
                        isLoading: false,
                    }));
                    return;
                }

                const randomIndex = Math.floor(Math.random() * gramList.length);
                const randomGram = gramList[randomIndex];
                setGram({
                    pattern: randomGram.pattern ?? null,
                    romaji: randomGram.romaji ?? null,
                    meaning: randomGram.meaning ?? null,
                    formation: randomGram.formation ?? null,
                    examplesArray: randomGram.examples ?? [],
                    isLoading: false,
                    // showReading: false,
                    // showMeaning: false,
                    // showEx: false,
                    // showReadingBtn: true,
                    // showMeaningBtn: true,
                    // showExBtn: true,
                });
            });
        }

        fetchGram();
    }, [level]);

    function nextGram() {
        if (!dataGram.length) return;

        const randomGram = dataGram[Math.floor(Math.random() * dataGram.length)];
        setGram({
            pattern: randomGram.pattern ?? null,
            romaji: randomGram.romaji ?? null,
            meaning: randomGram.meaning ?? null,
            formation: randomGram.formation ?? null,
            examplesArray: randomGram.examples ?? [],
            isLoading: false,
            // showReading: false,
            // showMeaning: false,
            // showEx: false,
            // showReadingBtn: true,
            // showMeaningBtn: true,
            // showExBtn: true,
        });
    }

    const patternFontSize = `${Math.min(3.75, 15 / Math.max(gram.pattern?.length ?? 1, 1))}rem`;

    return (
        <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Grammar Practice</p>
                        <h1 className="text-3xl font-semibold">Daily Grammar</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N{level}</span>
                    </div>
                </div>
                {gram.isLoading && (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">
                        Loading grammar...
                    </div>
                )}
                {gram.pattern && (
                    <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl">
                        <div className="border-b border-custom-border-hover px-8 py-8 text-center">
                            <p className="mb-4 text-xs font-semibold uppercase text-custom-text-muted">Grammar Pattern</p>
                            <div className="mx-auto flex w-fit items-center justify-center rounded-3xl border border-custom-border-hover bg-custom-background px-10 py-10 shadow-inner">
                                <h2 className="whitespace-nowrap font-kanji font-normal text-[3rem] text-center text-custom-text">{gram.pattern}</h2>
                            </div>
                            {gram.romaji && <p className="mt-3 text-lg text-custom-text-muted">{gram.romaji}</p>}
                        </div>
                        <div className="flex">
                            <section className="w-1/2 border-r border-custom-border-hover bg-custom-secondary p-6">
                                <h3 className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Meaning</h3>
                                <p className="whitespace-pre-line text-base leading-7 text-custom-text">
                                    {gram.meaning || "No meaning available"}
                                </p>
                            </section>
                            <section className="w-1/2 bg-custom-secondary p-6">
                                <h3 className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Formation</h3>
                                <p className="whitespace-pre-line text-base leading-7 text-custom-text">
                                    {gram.formation || "No formation information available"}
                                </p>
                            </section>
                        </div>
                        <div className="border-t border-custom-border-hover px-6 py-5">
                            <div className="flex justify-center gap-3">
                                <button onClick={() => setGram((prev) => ({ ...prev, pattern: null }))} className="rounded-xl border border-custom-border-hover bg-custom-background px-8 py-3 text-sm font-medium text-custom-text-muted transition-all duration-500 hover:border-custom-primary hover:text-custom-text">Clear</button>
                                <button onClick={nextGram} className="rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">Next Grammar<span className="ml-3">→</span></button>
                            </div>
                        </div>
                        <section className="border-t border-custom-border-hover px-6 py-6">
                            <h3 className="mb-4 text-xs font-semibold uppercase text-custom-text-muted">Examples</h3>
                            {gram.examplesArray.length > 0 ? (
                                <div className="divide-y divide-custom-border-hover">
                                    {gram.examplesArray.map((example, index) => (
                                        <div key={`${example.ja}-${index}`} className="py-4 first:pt-0 last:pb-0">
                                            <p className="font-japanese text-lg leading-8 text-custom-text">{example.ja || "Japanese example unavailable"}</p>
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
        </div>
    );
}

export default GramApi;