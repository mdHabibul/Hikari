import VocabFetch from "./VocabFetch"
import { useState, useEffect } from "react"

function VocabApi() {
    const [dataVocab, setDataVocab] = useState(null)
    const [vocab, setVocab] = useState({
        word: null,
        reading: null,
        meaningsArray: [],
        examplesArray: [],
        isLoading: true,
        showReading: false,
        showMeaning: false,
        showEx: false,
        showReadingBtn: true,
        showMeaningBtn: true,
        showExBtn: true,
    });

    useEffect(() => {
        function fetchVocab() {
            VocabFetch(1).then((vocabularyList) => {
                setDataVocab(vocabularyList);
                if (!vocabularyList.length) {
                    setVocab((currentVocab) => ({
                        ...currentVocab,
                        word: "_",
                        isLoading: false,
                    }));
                    return;
                }

                const randomIndex = Math.floor(Math.random() * vocabularyList.length);
                const randomVocab = vocabularyList[randomIndex];
                setVocab({
                    word: randomVocab.word ?? null,
                    reading: randomVocab.reading ?? null,
                    meaningsArray: randomVocab.meanings ?? [],
                    examplesArray: randomVocab.examples ?? [],
                    isLoading: false,
                    showReading: false,
                    showMeaning: false,
                    showEx: false,
                    showReadingBtn: true,
                    showMeaningBtn: true,
                    showExBtn: true,
                });
            });
        }

        fetchVocab();
    }, []);

    function nextWord() {
        if (!dataVocab.length) return;

        const randomVocab = dataVocab[Math.floor(Math.random() * dataVocab.length)];
        setVocab({
            word: randomVocab.word ?? null,
            reading: randomVocab.reading ?? null,
            meaningsArray: randomVocab.meanings ?? [],
            examplesArray: randomVocab.examples ?? [],
            isLoading: false,
            showReading: false,
            showMeaning: false,
            showEx: false,
            showReadingBtn: true,
            showMeaningBtn: true,
            showExBtn: true,
        });
    }

    const handleReadingButtonClick = () => {
        setVocab((prev) => ({ ...prev, showReading: true, showReadingBtn: false }));
    };

    const handleMeaningButtonClick = () => {
        setVocab((prev) => ({ ...prev, showMeaning: true, showMeaningBtn: false }));
    };

    const handleExButtonClick = () => {
        setVocab((prev) => ({ ...prev, showEx: true, showExBtn: false }));
    };


    return (
        <>
            <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Vocabulary Practice</p>
                            <h1 className="text-3xl font-semibold">Daily Vocabulary</h1>
                        </div>
                        <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                            <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N1</span>
                        </div>
                    </div>
                    {vocab.length === 0 && (
                        <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">
                            Loading vocabulary...
                        </div>
                    )}
                    {vocab.word && (
                        <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl">
                            <div className="flex flex-col items-center px-6 pb-12 pt-12">
                                <p className="mb-8 text-xs font-medium uppercase text-custom-text-muted">Recognize the word</p>
                                <div className="flex px-10 py-10 items-center justify-center rounded-3xl border border-custom-border-hover bg-custom-background shadow-inner">
                                    <span className="font-kanji text-[8rem] text-center font-normal text-custom-text">{vocab.word}</span>
                                </div>
                                <p className="mt-8 text-sm text-custom-text-muted">Take your time. Study at your own pace.</p>
                            </div>
                            <div className="border-t border-custom-border-hover px-6 py-6">
                                <div className="flex justify-center gap-3">
                                    <button onClick={() => setVocab((prev) => ({ word: null }))} className="rounded-xl border border-custom-border-hover bg-custom-background px-8 py-3 text-sm font-medium text-custom-text-muted hover:border-custom-primary hover:text-custom-text transition-all duration-500">Clear</button>
                                    <button onClick={nextWord} className="rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">Next Word<span className="ml-3">→</span></button>
                                </div>
                            </div>
                            <div className="border-t border-custom-border-hover">
                                <div className="flex">
                                    <div className="w-1/3 border-r border-custom-border-hover p-8">
                                        <div className="mb-5 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-custom-text-muted">READING</span>
                                            <span className="text-sm font-japanese text-custom-text-muted">読み</span>
                                        </div>
                                        {vocab.showReading ? (
                                            <div className="min-h-24">
                                                <p className="mb-3 text-xs text-custom-text-muted">Japanese reading</p>
                                                <div className="whitespace-pre-line space-y-2 text-lg font-japanese text-custom-text">
                                                    {vocab.reading ? vocab.reading : "_"}
                                                </div>
                                            </div>
                                        ) :
                                            (
                                                <button onClick={handleReadingButtonClick} className="flex w-full items-center justify-between rounded-xl border border-custom-border-hover bg-custom-background px-4 py-4 text-left hover:border-custom-primary">
                                                    <span className="text-sm font-medium text-custom-text-muted">Reveal</span>
                                                    <span className="text-custom-text-muted">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                                    </span>
                                                </button>
                                            )}
                                    </div>
                                    <div className="w-1/3 p-8">
                                        <div className="mb-5 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-custom-text-muted">MEANING</span>
                                            <span className="text-sm font-japanese text-custom-text-muted">意味</span>
                                        </div>
                                        {vocab.showMeaning ? (
                                            <div className="min-h-24">
                                                <p className="mb-3 text-xs text-custom-text-muted">English Meaning</p>
                                                <div className="whitespace-pre-line space-y-2 text-lg font-serif text-custom-text">
                                                    {vocab.meaningsArray.length > 0 ? vocab.meaningsArray.join("\n") : "No information available"}
                                                </div>
                                            </div>
                                        ) : (
                                            <button onClick={handleMeaningButtonClick} className="flex w-full items-center justify-between rounded-xl border border-custom-border-hover bg-custom-background px-4 py-4 text-left hover:border-custom-primary">
                                                <span className="text-sm font-medium text-custom-text-muted">Reveal</span>
                                                <span className="text-custom-text-muted">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                    <div className="w-1/3 p-8">
                                        <div className="mb-5 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-custom-text-muted">Example</span>
                                            <span className="text-sm font-japanese text-custom-text-muted">例</span>
                                        </div>
                                        {vocab.showEx ? (
                                            <div className="min-h-24">
                                                <p className="mb-3 text-xs text-custom-text-muted">English Example</p>
                                                <div className="whitespace-pre-line space-y-2 text-lg font-normal font-serif text-custom-text">

                                                    {vocab.examplesArray.length > 0 ? vocab.examplesArray.map((element, index) => (
                                                        <div className="my-3">
                                                            <p>Jp :{element.ja}</p>
                                                            <p>En :{element.en}</p>
                                                        </div>
                                                    )) : "No information available"}
                                                </div>
                                            </div>
                                        ) : (
                                            <button onClick={handleExButtonClick} className="flex w-full items-center justify-between rounded-xl border border-custom-border-hover bg-custom-background px-4 py-4 text-left hover:border-custom-primary">
                                                <span className="text-sm font-medium text-custom-text-muted">Reveal</span>
                                                <span className="text-custom-text-muted">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default VocabApi