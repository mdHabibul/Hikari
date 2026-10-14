import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import GramFetch from "../gramFetch";

export const Route = createFileRoute("/grammarQuiz")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
    }),
    component: GrammarQuizRoute,
});

function GrammarQuizRoute() {
    const { level } = Route.useSearch();
    return <GrammarQuiz level={level} />;
}

function GrammarQuiz({ level }) {
    const option = ["A", "B", "C", "D"];
    const [dataGram, setDataGram] = useState([]);
    const [dataGramLevel, setDataGramLevel] = useState(level);
    const [gramPile, setGramPile] = useState([]);
    const [optionPile, setOptionPile] = useState([]);
    const [gramIndex, setGramIndex] = useState([]);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        if (dataGram.length !== 0 && dataGramLevel === level) return;

        function handleGramData(nextDataGram) {
            setDataGram(nextDataGram);
            setDataGramLevel(level);
        }

        GramFetch(level, handleGramData);
    }, [level, dataGram.length, dataGramLevel]);

    useEffect(() => {
        if (dataGram.length === 0) return;

        const pile = dataGram.map(element => element.pattern);
        const option = dataGram.map(element => element.meaning);

        setGramPile(pile);
        setOptionPile(option);
    }, [dataGram]);

    useEffect(() => {
        if (gramPile.length < 4) return;

        generateQuestion();
    }, [gramPile]);

    function generateQuestion() {
        let randomIndex01 = Math.floor(Math.random() * gramPile.length);

        let randomIndex02;
        do {
            randomIndex02 = Math.floor(Math.random() * gramPile.length);
        } while (randomIndex02 === randomIndex01);

        let randomIndex03;
        do {
            randomIndex03 = Math.floor(Math.random() * gramPile.length);
        } while (randomIndex03 === randomIndex01 || randomIndex03 === randomIndex02);

        let randomIndex04;
        do {
            randomIndex04 = Math.floor(Math.random() * gramPile.length);
        } while (randomIndex04 === randomIndex01 || randomIndex04 === randomIndex02 || randomIndex04 === randomIndex03);

        const newIndexes = [randomIndex01, randomIndex02, randomIndex03, randomIndex04];

        setGramIndex(newIndexes);
        setCorrectIndex(Math.floor(Math.random() * 4));
        setSelectedAnswer(null);
    }

    function handleAnswer(option) {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(option);
    }

    return (
        <div className="min-h-screen w-full bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light text-custom-text font-english">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Grammar Quiz</p>
                        <h1 className="text-3xl font-semibold">Daily Grammar</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N{level}</span>
                    </div>
                </div>

                {gramPile.length >= 4 && correctIndex !== null && gramIndex.length === 4 ? (
                    <>
                        <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl">
                            <div className="px-8 py-4 text-center">
                                <p className="mb-4 text-xs font-semibold uppercase text-custom-text-muted">Grammar Pattern</p>
                                <div className="mx-auto flex w-fit items-center justify-center rounded-3xl border border-custom-border-hover bg-custom-background px-10 py-10 shadow-inner">
                                    <h2 className="whitespace-nowrap font-kanji font-normal text-[3rem] text-center text-custom-text">{gramPile[gramIndex[correctIndex]]}</h2>
                                </div>
                                <p className="mt-8 text-sm text-custom-text-muted">Take your time. Study at your own pace.</p>
                            </div>
                            <div className="flex flex-col gap-7 mb-7 mt-8">
                                <div className="flex flex-col space-y-4 justify-around items-start px-15">
                                    <button onClick={() => handleAnswer(0)} className={`border min-h-15 w-170 text-[18px] flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 0 ? correctIndex === 0 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                        <p className="mr-8 pr-8 border-r border-current">A</p>
                                        <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[gramIndex[0]]}</p>
                                    </button>

                                    <button onClick={() => handleAnswer(1)} className={`border min-h-15 w-170 text-[18px] flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 1 ? correctIndex === 1 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                        <p className="mr-8 pr-8 border-r border-current">B</p>
                                        <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[gramIndex[1]]}</p>
                                    </button>

                                    <button onClick={() => handleAnswer(2)} className={`border min-h-15 w-170 text-[18px] flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 2 ? correctIndex === 2 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                        <p className="mr-8 pr-8 border-r border-current">C</p>
                                        <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[gramIndex[2]]}</p>
                                    </button>

                                    <button onClick={() => handleAnswer(3)} className={`border min-h-15 w-170 text-[18px] flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 3 ? correctIndex === 3 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                        <p className="mr-8 pr-8 border-r border-current">D</p>
                                        <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[gramIndex[3]]}</p>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-10 flex justify-between items-center px-15">
                                <p className={`h-5 text-sm font-medium ${selectedAnswer === null ? "invisible" : selectedAnswer === correctIndex ? "text-custom-success" : "text-custom-danger"}`}>{selectedAnswer !== null && `Correct answer: ${option[correctIndex]}`}</p>
                                <button onClick={generateQuestion} className="group rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">Next<span className="inline-block ml-3 transition-transform group-hover:translate-x-3">→</span></button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl p-10 text-center">
                        <p className="text-sm uppercase tracking-[0.2em] text-custom-text-muted">Loading quiz...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GrammarQuiz;