import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/hiraganaQuiz")({
    component: HiraganaQuiz,
});

function HiraganaQuiz() {

    const dataHiragana = [
        { "moji": "あ", "romaji": "a" },
        { "moji": "い", "romaji": "i" },
        { "moji": "う", "romaji": "u" },
        { "moji": "え", "romaji": "e" },
        { "moji": "お", "romaji": "o" },
        { "moji": "か", "romaji": "ka" },
        { "moji": "き", "romaji": "ki" },
        { "moji": "く", "romaji": "ku" },
        { "moji": "け", "romaji": "ke" },
        { "moji": "こ", "romaji": "ko" },
        { "moji": "さ", "romaji": "sa" },
        { "moji": "し", "romaji": "shi" },
        { "moji": "す", "romaji": "su" },
        { "moji": "せ", "romaji": "se" },
        { "moji": "そ", "romaji": "so" },
        { "moji": "た", "romaji": "ta" },
        { "moji": "ち", "romaji": "chi" },
        { "moji": "つ", "romaji": "tsu" },
        { "moji": "て", "romaji": "te" },
        { "moji": "と", "romaji": "to" },
        { "moji": "な", "romaji": "na" },
        { "moji": "に", "romaji": "ni" },
        { "moji": "ぬ", "romaji": "nu" },
        { "moji": "ね", "romaji": "ne" },
        { "moji": "の", "romaji": "no" },
        { "moji": "は", "romaji": "ha" },
        { "moji": "ひ", "romaji": "hi" },
        { "moji": "ふ", "romaji": "fu" },
        { "moji": "へ", "romaji": "he" },
        { "moji": "ほ", "romaji": "ho" },
        { "moji": "ま", "romaji": "ma" },
        { "moji": "み", "romaji": "mi" },
        { "moji": "む", "romaji": "mu" },
        { "moji": "め", "romaji": "me" },
        { "moji": "も", "romaji": "mo" },
        { "moji": "や", "romaji": "ya" },
        { "moji": "ゆ", "romaji": "yu" },
        { "moji": "よ", "romaji": "yo" },
        { "moji": "ら", "romaji": "ra" },
        { "moji": "り", "romaji": "ri" },
        { "moji": "る", "romaji": "ru" },
        { "moji": "れ", "romaji": "re" },
        { "moji": "ろ", "romaji": "ro" },
        { "moji": "わ", "romaji": "wa" },
        { "moji": "を", "romaji": "wo" },
        { "moji": "ん", "romaji": "n" },

        { "moji": "が", "romaji": "ga" },
        { "moji": "ぎ", "romaji": "gi" },
        { "moji": "ぐ", "romaji": "gu" },
        { "moji": "げ", "romaji": "ge" },
        { "moji": "ご", "romaji": "go" },

        { "moji": "ざ", "romaji": "za" },
        { "moji": "じ", "romaji": "ji" },
        { "moji": "ず", "romaji": "zu" },
        { "moji": "ぜ", "romaji": "ze" },
        { "moji": "ぞ", "romaji": "zo" },

        { "moji": "だ", "romaji": "da" },
        { "moji": "ぢ", "romaji": "ji" },
        { "moji": "づ", "romaji": "zu" },
        { "moji": "で", "romaji": "de" },
        { "moji": "ど", "romaji": "do" },

        { "moji": "ば", "romaji": "ba" },
        { "moji": "び", "romaji": "bi" },
        { "moji": "ぶ", "romaji": "bu" },
        { "moji": "べ", "romaji": "be" },
        { "moji": "ぼ", "romaji": "bo" },

        { "moji": "ぱ", "romaji": "pa" },
        { "moji": "ぴ", "romaji": "pi" },
        { "moji": "ぷ", "romaji": "pu" },
        { "moji": "ぺ", "romaji": "pe" },
        { "moji": "ぽ", "romaji": "po" },

        { "moji": "きゃ", "romaji": "kya" },
        { "moji": "きゅ", "romaji": "kyu" },
        { "moji": "きょ", "romaji": "kyo" },

        { "moji": "しゃ", "romaji": "sha" },
        { "moji": "しゅ", "romaji": "shu" },
        { "moji": "しょ", "romaji": "sho" },

        { "moji": "ちゃ", "romaji": "cha" },
        { "moji": "ちゅ", "romaji": "chu" },
        { "moji": "ちょ", "romaji": "cho" },

        { "moji": "にゃ", "romaji": "nya" },
        { "moji": "にゅ", "romaji": "nyu" },
        { "moji": "にょ", "romaji": "nyo" },

        { "moji": "ひゃ", "romaji": "hya" },
        { "moji": "ひゅ", "romaji": "hyu" },
        { "moji": "ひょ", "romaji": "hyo" },

        { "moji": "みゃ", "romaji": "mya" },
        { "moji": "みゅ", "romaji": "myu" },
        { "moji": "みょ", "romaji": "myo" },

        { "moji": "りゃ", "romaji": "rya" },
        { "moji": "りゅ", "romaji": "ryu" },
        { "moji": "りょ", "romaji": "ryo" },

        { "moji": "ぎゃ", "romaji": "gya" },
        { "moji": "ぎゅ", "romaji": "gyu" },
        { "moji": "ぎょ", "romaji": "gyo" },

        { "moji": "じゃ", "romaji": "ja" },
        { "moji": "じゅ", "romaji": "ju" },
        { "moji": "じょ", "romaji": "jo" },

        { "moji": "びゃ", "romaji": "bya" },
        { "moji": "びゅ", "romaji": "byu" },
        { "moji": "びょ", "romaji": "byo" },

        { "moji": "ぴゃ", "romaji": "pya" },
        { "moji": "ぴゅ", "romaji": "pyu" },
        { "moji": "ぴょ", "romaji": "pyo" }
    ];

    const option = ["A", "B", "C", "D"];

    const mojiPile = dataHiragana.map((element) => element.moji);
    const optionPile = dataHiragana.map((element) => element.romaji);
    const [mojiIndex, setMojiIndex] = useState([]);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        generateQuestion();
    }, []);

    function generateQuestion() {
        let randomIndex01 = Math.floor(Math.random() * mojiPile.length);

        let randomIndex02;
        do {
            randomIndex02 = Math.floor(Math.random() * mojiPile.length);
        } while (randomIndex02 === randomIndex01);

        let randomIndex03;
        do {
            randomIndex03 = Math.floor(Math.random() * mojiPile.length);
        } while (randomIndex03 === randomIndex01 || randomIndex03 === randomIndex02);

        let randomIndex04;
        do {
            randomIndex04 = Math.floor(Math.random() * mojiPile.length);
        } while (randomIndex04 === randomIndex01 || randomIndex04 === randomIndex02 || randomIndex04 === randomIndex03);

        const newIndexes = [randomIndex01, randomIndex02, randomIndex03, randomIndex04];

        setMojiIndex(newIndexes);
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
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Hiragana Practice</p>
                        <h1 className="text-3xl font-semibold">Hiragana Quiz</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N5</span>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl">
                    <div className="flex flex-col items-center px-6 pb-12 pt-12">
                        <p className="mb-8 text-xs font-medium uppercase text-custom-text-muted">Recognize the character</p>
                        <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-custom-border-hover bg-custom-background shadow-inner">
                            <span className="font-kanji text-[8rem] font-normal text-custom-text">{mojiPile[mojiIndex[correctIndex]]}</span>
                        </div>
                        <p className="mt-8 text-sm text-custom-text-muted">Take your time. Study at your own pace.</p>
                    </div>

                    <div className="flex flex-col gap-7 mb-7">
                        <div className="flex justify-around items-center px-15">
                            <button onClick={() => handleAnswer(0)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 0 ? correctIndex === 0 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">A</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[mojiIndex[0]]}</p>
                            </button>

                            <button onClick={() => handleAnswer(1)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 1 ? correctIndex === 1 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">B</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[mojiIndex[1]]}</p>
                            </button>
                        </div>

                        <div className="flex justify-around items-center px-15">
                            <button onClick={() => handleAnswer(2)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 2 ? correctIndex === 2 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">C</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[mojiIndex[2]]}</p>
                            </button>

                            <button onClick={() => handleAnswer(3)} className={`border min-h-15 w-90 text-2xl flex items-center px-5 rounded-2xl transition-all duration-200 ${selectedAnswer === 3 ? correctIndex === 3 ? "border-custom-success bg-custom-bg-100" : "border-custom-danger bg-custom-danger-subtle" : "border-custom-border-dark bg-custom-surface text-custom-text hover:border-custom-primary hover:bg-custom-surface-hover active:scale-[0.98]"}`}>
                                <p className="mr-8 pr-8 border-r border-current">D</p>
                                <p className="font-serif font-extralight overflow-auto scrollbar-track-transparent no-scrollbar">{optionPile[mojiIndex[3]]}</p>
                            </button>
                        </div>
                    </div>

                    <div className="mb-10 flex justify-between items-center px-15">
                        <p className={`h-5 text-sm font-medium ${selectedAnswer === null ? "invisible" : selectedAnswer === correctIndex ? "text-custom-success" : "text-custom-danger"}`}>{selectedAnswer !== null && `Correct answer: ${option[correctIndex]}`}</p>
                        <button onClick={generateQuestion} className="group rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">Next Kanji<span className="inline-block ml-3 transition-transform group-hover:translate-x-3">→</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}