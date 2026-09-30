import { useEffect, useState } from "react";
import GramFetch from "../gramFetch";

function Grams({ level }) {
    const [gramList, setGramList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openGramIndex, setOpenGramIndex] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        function handleGramData(nextGramList) {
            setGramList(nextGramList ?? []);
            setIsLoading(false);
        }

        GramFetch(level).then(handleGramData);
    }, [level]);

    return (
        <></>
    );
}

export default Grams;