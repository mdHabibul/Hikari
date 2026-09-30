async function GramFetch(level) {
    try {
		const response = await fetch(`https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/grammar/n${level}.json`);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		const nextDataGram = await response.json();
		return nextDataGram;
	} catch (error) {
		console.error("Error fetching grammar:", error);
		return null;
	}
}

export default GramFetch;