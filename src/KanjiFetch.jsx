async function KanjiFetch(level, setData) {
	try {
		const response = await fetch(`https://kanjiapi.dev/v1/kanji/jlpt-${level}-enriched`);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		const nextData = await response.json();
		setData(nextData);
	} catch (error) {
		console.error("Error fetching kanji:", error);
	}
}

export default KanjiFetch;