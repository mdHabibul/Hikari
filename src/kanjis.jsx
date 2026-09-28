import { useEffect, useState } from "react";
import KanjiFetch from "./KanjiFetch";

function KanjiBox({ data, maxFreq }) {
    return (
        <div className="flex flex-wrap gap-4">
            {data.map((element) => (
                <div className={`w-42 rounded-2xl border border-custom-border-hover ${element.freq_mainichi_shinbun >= maxFreq * 0.9 ? "bg-custom-bg-900 text-custom-bg-100" : element.freq_mainichi_shinbun >= maxFreq * 0.8 ? "bg-custom-bg-800 text-custom-bg-50" : element.freq_mainichi_shinbun >= maxFreq * 0.7 ? "bg-custom-bg-700 text-custom-bg-50" : element.freq_mainichi_shinbun >= maxFreq * 0.6 ? "bg-custom-bg-600" : element.freq_mainichi_shinbun >= maxFreq * 0.5 ? "bg-custom-bg-500" : element.freq_mainichi_shinbun >= maxFreq * 0.4 ? "bg-custom-bg-400" : element.freq_mainichi_shinbun >= maxFreq * 0.3 ? "bg-custom-bg-300" : element.freq_mainichi_shinbun >= maxFreq * 0.2 ? "bg-custom-bg-200" : element.freq_mainichi_shinbun >= maxFreq * 0.1 ? "bg-custom-bg-100" : "bg-custom-bg-50"} p-5 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:cursor-pointer transition-all duration-100`}>
                    <div className="mb-4 flex min-h-5 justify-center gap-2 text-xs">
                        <p className="font-japanese font-medium">{element.kun_readings[0] ? element.kun_readings[0] : ""}</p>
                        {element.kun_readings[0] && element.on_readings[0] && <span>•</span>}
                        <p className="font-japanese font-medium">{element.on_readings[0] ? element.on_readings[0] : ""}</p>
                    </div>
                    <h2 className="mb-4 font-kanji text-6xl">{element.kanji}</h2>
                    <p className="text-sm">{element.heisig_en ? element.heisig_en : "_"}</p>
                    <progress className="w-[100%] h-1 [&::-webkit-progress-bar]:bg-custom-border-hover [&::-webkit-progress-value]:bg-custom-forest" value={element.freq_mainichi_shinbun} max={maxFreq} />
                </div>
            ))}
        </div>
    );
}

function Kanjis() {
    const [data, setData] = useState([]);
    const [maxFreq, setMaxFreq] = useState(0);

    useEffect(() => {
        if (data.length !== 0) return;

        KanjiFetch(1, setData);

    }, [data.length]);

    useEffect(() => {
        if (data.length === 0) return;

        const max = Math.max(
            ...data.map((element) => element.freq_mainichi_shinbun)
        );
        setMaxFreq(max);
        console.log("freq:" + max);
    }, [data]);

    return (
        <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold text-custom-text-muted">Kanji frequency</p>
                        <h1 className="text-3xl font-semibold">JLPT N1 Heatmap</h1>
                    </div>
                    <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
                        <span className="text-xs font-semibold text-custom-text-muted">{data.length} characters</span>
                    </div>
                </div>
                {data.length === 0 ? (
                    <div className="rounded-2xl border border-custom-border-hover bg-custom-secondary px-6 py-16 text-center text-sm text-custom-text-muted">
                        Loading kanji...
                    </div>
                ) : (
                    <KanjiBox data={data} maxFreq={maxFreq} />
                )}
            </div>
        </div>
    );
}

export default Kanjis;
