async function VocabFetch({ level }) {
	try {
		const response = await fetch(`https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/vocab/n${level}.json`);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		const nextDataVocab = await response.json();
		return nextDataVocab;
	} catch (error) {
		console.error("Error fetching vocabulary:", error);
		return null;
	}
}

export default VocabFetch;