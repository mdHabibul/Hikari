import VocabFetch from "./VocabFetch"
import { useState, useEffect } from "react"

function VocabApi() {
    const [vocab, setVocab] = useState({
        word: null,
        meanings: [],
        examples: [],
        isLoading: true,
    });

    useEffect(() => {
        async function fetchVocab() {
            const vocabularyList = await VocabFetch(5);
            if (!vocabularyList?.length) {
                setVocab((currentVocab) => ({
                    ...currentVocab,
                    word: "NNN",
                    isLoading: false,
                }));
                return;
            }

            const randomIndex = Math.floor(Math.random() * vocabularyList.length);
            const randomVocab = vocabularyList[randomIndex];
            setVocab({
                word: randomVocab.word ?? "NNN",
                meanings: randomVocab.meanings ?? ["NNN"],
                examples: randomVocab.examples ?? [],
                isLoading: false,
            });
        }

        fetchVocab();
    }, []);



    return (
        <>
            {vocab.isLoading ? (
                <p>Loading vocabulary...</p>
            ) : (
                <p>{vocab.word}</p>
            )}
        </>
    )
}

export default VocabApi