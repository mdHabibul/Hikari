// import { createFileRoute } from '@tanstack/react-router'

import { useState, useEffect } from "react";
import KanjiFetch from "../KanjiFetch";

// export const Route = createFileRoute('/kanjiQuiz')({
//   component: KanjiQuiz,
// })

function KanjiQuiz() {
    const level = 5;
    const [dataKanji, setDataKanji] = useState([]);
    const [dataKanjiLevel, setDataKanjiLevel] = useState(5);
    const [kanjiPile, setKanjiPile] = useState([]);
    const [optionPile, setOptionPile] = useState([]);
    const [kanjiIndex, setKanjiIndex] = useState([]);
    const [correctIndex, setCorrectIndex] = useState(null);

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
        setKanjiPile(pile);

        const option = dataKanji.map(element => element.heisig_en);
        setOptionPile(option);

    }, [dataKanji]);

    useEffect(() => {
        if (kanjiPile.length === 0) return;

        let randomIndex02, randomIndex03, randomIndex04;
        let randomIndex01 = Math.floor(Math.random() * kanjiPile.length);

        do {
            randomIndex02 = Math.floor(Math.random() * kanjiPile.length);
        } while (randomIndex02 === randomIndex01);

        do {
            randomIndex03 = Math.floor(Math.random() * kanjiPile.length);
        } while (randomIndex03 === randomIndex01 || randomIndex03 === randomIndex02);

        do {
            randomIndex04 = Math.floor(Math.random() * kanjiPile.length);
        } while (randomIndex04 === randomIndex01 || randomIndex04 === randomIndex02 || randomIndex04 === randomIndex03);

        setKanjiIndex([randomIndex01, randomIndex02, randomIndex03, randomIndex04]);
        setCorrectIndex(Math.floor(Math.random() * kanjiIndex.length));
    }, [kanjiPile]);

    return (
        <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
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
                            <button className="border border-custom-border-dark min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 hover:scale-102 active:scale-98">
                                <p className="mr-8 pr-8 border-r">A</p>
                                <p className="uppercase font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[0]]}</p>
                            </button>
                            <button className="border border-custom-border-dark min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 hover:scale-102 active:scale-98">
                                <p className="mr-8 pr-8 border-r">B</p>
                                <p className="uppercase font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[1]]}</p>
                            </button>
                        </div>
                        <div className="flex justify-around items-center px-15">
                            <button className="border border-custom-border-dark min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 hover:scale-102 active:scale-98">
                                <p className="mr-8 pr-8 border-r">C</p>
                                <p className="uppercase font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[2]]}</p>
                            </button>
                            <button className="border border-custom-border-dark min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 hover:scale-102 active:scale-98">
                                <p className="mr-8 pr-8 border-r">D</p>
                                <p className="uppercase font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[kanjiIndex[3]]}</p>
                            </button>
                        </div>
                    </div>
                    <div className="mb-10 flex justify-end pr-15">
                        <button className="group rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">Next Kanji<span className="inline-block ml-3 transition-transform group-hover:translate-x-3">→</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanjiQuiz