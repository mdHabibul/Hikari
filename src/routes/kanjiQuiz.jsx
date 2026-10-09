import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import KanjiFetch from "../KanjiFetch";

export const Route = createFileRoute("/kanjiQuiz")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
    }),
    component: KanjiQuizRoute,
});

function KanjiQuizRoute() {
    const { level } = Route.useSearch();
    return <KanjiQuiz level={level} />;
}

function KanjiQuiz({ level }) {
    const [dataKanji, setDataKanji] = useState([]);
    const [dataKanjiLevel, setDataKanjiLevel] = useState(level);
    const [kanjiPile, setKanjiPile] = useState([]);
    const [optionPile, setOptionPile] = useState([]);
    const [kanjiIndex, setKanjiIndex] = useState([]);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        if (dataKanji.length !== 0 && dataKanjiLevel === level) return;

        function handleKanjiData(nextDataKanji) {
            setDataKanji(nextDataKanji);
            setDataKanjiLevel(level);
        }

        KanjiFetch(level, handleKanjiData);
    }, [level, dataKanji.length, dataKanjiLevel]);

    useEffect(() => {
        if (dataKanji.length === 0) return;

        const pile = dataKanji.map(element => element.kanji);
        const option = dataKanji.map(element => element.heisig_en);

        setKanjiPile(pile);
        setOptionPile(option);
    }, [dataKanji]);

    useEffect(() => {
        if (kanjiPile.length < 4) return;

        generateQuestion();
    }, [kanjiPile]);

    function generateQuestion() {
        let randomIndex01 = Math.floor(Math.random() * kanjiPile.length);

        let randomIndex02;
        do {
            randomIndex02 = Math.floor(Math.random() * kanjiPile.length);
        } while (randomIndex02 === randomIndex01);

        let randomIndex03;
        do {
            randomIndex03 = Math.floor(Math.random() * kanjiPile.length);
        } while (randomIndex03 === randomIndex01 || randomIndex03 === randomIndex02);

        let randomIndex04;
        do {
            randomIndex04 = Math.floor(Math.random() * kanjiPile.length);
        } while (randomIndex04 === randomIndex01 || randomIndex04 === randomIndex02 || randomIndex04 === randomIndex03);

        const newIndexes = [randomIndex01, randomIndex02, randomIndex03, randomIndex04];

        setKanjiIndex(newIndexes);
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
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Kanji Practice</p>
                        <h1 className="text-3xl font-semibold">Kanji Quiz</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N{level}</span>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl">
                    <div className="flex flex-col items-center px-6 pb-12 pt-12">
                        <p className="mb-8 text-xs font-medium uppercase text-custom-text-muted">Recognize the character</p>
                        <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-custom-border-hover bg-custom-background shadow-inner">
                            <span className="font-kanji text-[11rem] font-normal text-custom-text">{kanjiPile[kanjiIndex[correctIndex]]}</span>
                        </div>
                        <p className="mt-8 text-sm text-custom-text-muted">Take your time. Study at your own pace.</p>
                    </div>

                    <div className="flex flex-col gap-7 mb-7">
                        <div className="flex justify-around items-center px-15">
                            <button onClick={() => handleAnswer(0)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 0 ? correctIndex === 0 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">A</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[0]]}</p>
                            </button>

                            <button onClick={() => handleAnswer(1)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 1 ? correctIndex === 1 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">B</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[1]]}</p>
                            </button>
                        </div>

                        <div className="flex justify-around items-center px-15">
                            <button onClick={() => handleAnswer(2)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 2 ? correctIndex === 2 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">C</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[2]]}</p>
                            </button>

                            <button onClick={() => handleAnswer(3)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 3 ? correctIndex === 3 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">D</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[3]]}</p>
                            </button>
                        </div>
                    </div>

                    <div className="mb-10 flex justify-end pr-15">
                        <button onClick={generateQuestion} className="group rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">Next Kanji<span className="inline-block ml-3 transition-transform group-hover:translate-x-3">→</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KanjiQuiz;