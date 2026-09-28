import VocabFetch from "./VocabFetch"
import { useState, useEffect } from "react"

function VocabApi() {
    const [vocab, setVocab] = useState({
        word: null,
        meanings: [],
        examples: [],
    });

    useEffect(() => {
        async function fetchVocab() {
            const data = await VocabFetch(5);
            setVocab({
                word: data.word ?? "NNN",
                meanings: data.meanings ?? ["NNN"],
                examples: data.examples ?? ["NNN"]
            });
        }

        fetchVocab();
    }, []);



    return (
        <>
            <p>{vocab.word}</p>
        </>
    )
}

export default VocabApi