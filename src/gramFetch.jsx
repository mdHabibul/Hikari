async function GramFetch(level, onDataLoaded) {
    try {
		const response = await fetch(`https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/grammar/n${level}.json`);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		const nextDataGram = await response.json();
		if (typeof onDataLoaded === "function") {
			onDataLoaded(nextDataGram);
		}
		return nextDataGram;
	} catch (error) {
		console.error("Error fetching grammar:", error);
		if (typeof onDataLoaded === "function") {
			onDataLoaded([]);
		}
		return null;
	}
}

export default GramFetch;