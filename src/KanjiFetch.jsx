async function KanjiFetch(level, setDataKanji) {
	try {
		const response = await fetch(`https://kanjiapi.dev/v1/kanji/jlpt-${level}-enriched`);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		const nextDataKanji = await response.json();
		setDataKanji(nextDataKanji);
	} catch (error) {
		console.error("Error fetching kanji:", error);
	}
}

export default KanjiFetch;