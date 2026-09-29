import grams from "./grams";

async function GramFetch(level) {
    return grams.filter((grammar) => grammar.level === Number(level));
}

export default GramFetch;