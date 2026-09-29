import { useEffect, useState } from "react";
import VocabFetch from "./VocabFetch";

function Vocabs({ level }) {
    const [dataVocab, setDataVocab] = useState([]);

    useEffect(() => {
        VocabFetch(level).then((vocabularyList) => {
            setDataVocab(vocabularyList ?? []);
        });
    }, [level]);

    return (
        <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold text-custom-text-muted">Vocabulary</p>
                        <h1 className="text-3xl font-semibold">JLPT N{level} Vocabulary</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold text-custom-text-muted">{dataVocab.length} words</span>
                    </div>
                </div>
                {dataVocab.length === 0 ? (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">
                        Loading vocabulary...
                    </div>
                ) : (
                    <VocabBox dataVocab={dataVocab} />
                )}
            </div>
        </div>
    );
}

function VocabBox({ dataVocab }) {
    return (
        <div className="flex flex-wrap gap-4">
            {dataVocab.map((element) => (
                <div key={element.word} className="w-42 rounded-2xl border border-custom-border-hover bg-custom-bg-50 p-5 text-center shadow-sm transition-all duration-100 hover:-translate-y-1 hover:cursor-pointer hover:shadow-2xl">
                    <div className="mb-4 flex min-h-5 justify-center gap-2 text-xs">
                        <p className="font-japanese font-medium">{element.reading || ""}</p>
                    </div>
                    <h2 className="mb-4 font-kanji text-6xl">{element.word}</h2>
                    <p className="text-sm">{element.meanings? element.meanings[0] : "_"}</p>
                </div>
            ))}
        </div>
    );
}

export default Vocabs;
