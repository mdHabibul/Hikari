// import { createFileRoute } from '@tanstack/react-router'

import { useState, useEffect } from "react";
import KanjiFetch from "../KanjiFetch";

// export const Route = createFileRoute('/kanjiQuiz')({
//   component: KanjiQuiz,
// })

function KanjiQuiz() {
    const level = 3;
    const [dataKanji, setDataKanji] = useState([]);
    const [dataKanjiLevel, setDataKanjiLevel] = useState(3);
    const [kanjiPile, setKanjiPile] = useState([]);
    const [kanjiIndex, setKanjiIndex] = useState(null)

    useEffect(() => {
        if (dataKanji.length !== 0 && dataKanjiLevel === level) return;

        function handleKanjiData(nextDataKanji) {
            setDataKanji(nextDataKanji);
            setDataKanjiLevel(level);
        }

        KanjiFetch(level, handleKanjiData);
    }, [level, dataKanji.length, dataKanjiLevel]);

    useEffect(() => {
        const pile = dataKanji.map(element => element.kanji);
        setKanjiPile(pile);
    }, [dataKanji]);

    return (
        <div>
        </div>
    )
}

export default KanjiQuiz