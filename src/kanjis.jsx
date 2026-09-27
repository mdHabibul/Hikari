import { useEffect, useState } from "react";
import KanjiFetch from "./KanjiFetch";

function KanjiBox({ data }) {
    return (
        <div className="flex flex-wrap gap-4">
            {data.map((element) => (
            <div className="w-42 rounded-2xl border border-custom-border-hover bg-custom-secondary p-5 text-center shadow-sm">
                    <div className="mb-4 flex min-h-5 justify-center gap-2 text-xs text-custom-text-muted">
                        <p className="font-japanese font-medium">{element.kun_readings[0] ? element.kun_readings[0] : ""}</p>
                        {element.kun_readings[0] && element.on_readings[0] && <span>•</span>}
                        <p className="font-japanese font-medium">{element.on_readings[0] ? element.on_readings[0] : ""}</p>
                    </div>
                    <h2 className="mb-4 font-kanji text-6xl leading-none text-custom-text">{element.kanji}</h2>
                    <p className="min-h-10 text-sm text-custom-text-muted">{element.heisig_en ? element.heisig_en : "_"}</p>
                </div>
            ))}
        </div>
    );
}

function Kanjis() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length !== 0) return;

        KanjiFetch(1, setData);
    }, [data.length]);

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
                    <KanjiBox data={data} />
                )}
            </div>
        </div>
    );
}

export default Kanjis;
