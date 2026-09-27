// import KanjiApi from "./kanjiApi"
// import data from "./KanjiApi"

const data = [
    {
        "alternate_stroke_counts": [],
        "freq_mainichi_shinbun": 308,
        "grade": 8,
        "heisig_en": "bestow",
        "jlpt": 3,
        "kanji": "与",
        "kun_readings": [
            "あた.える",
            "あずか.る",
            "くみ.する",
            "ともに"
        ],
        "meanings": [
            "bestow",
            "participate in",
            "give",
            "award",
            "impart",
            "provide",
            "cause",
            "gift",
            "godsend"
        ],
        "name_readings": [
            "とも",
            "ゆ"
        ],
        "notes": [],
        "on_readings": [
            "ヨ"
        ],
        "stroke_count": 3,
        "unicode": "4E0E"
    },
    {
        "alternate_stroke_counts": [],
        "freq_mainichi_shinbun": 247,
        "grade": 3,
        "heisig_en": "both",
        "jlpt": 3,
        "kanji": "両",
        "kun_readings": [
            "てる",
            "ふたつ"
        ],
        "meanings": [
            "both",
            "old Japanese coin",
            "counter for carriages (e.g., in a train)",
            "two"
        ],
        "name_readings": [
            "もろ"
        ],
        "notes": [],
        "on_readings": [
            "リョウ"
        ],
        "stroke_count": 6,
        "unicode": "4E21"
    },
    {
        "alternate_stroke_counts": [],
        "freq_mainichi_shinbun": 377,
        "grade": 3,
        "heisig_en": "ride",
        "jlpt": 3,
        "kanji": "乗",
        "kun_readings": [
            "の.る",
            "-の.り",
            "の.せる"
        ],
        "meanings": [
            "ride",
            "power",
            "multiplication",
            "record",
            "counter for vehicles",
            "board",
            "mount",
            "join"
        ],
        "name_readings": [
            "のり"
        ],
        "notes": [],
        "on_readings": [
            "ジョウ",
            "ショウ"
        ],
        "stroke_count": 9,
        "unicode": "4E57"
    },
    {
        "alternate_stroke_counts": [],
        "freq_mainichi_shinbun": 180,
        "grade": 3,
        "heisig_en": "beforehand",
        "jlpt": 3,
        "kanji": "予",
        "kun_readings": [
            "あらかじ.め"
        ],
        "meanings": [
            "beforehand",
            "previous",
            "myself",
            "I"
        ],
        "name_readings": [],
        "notes": [],
        "on_readings": [
            "ヨ",
            "シャ"
        ],
        "stroke_count": 4,
        "unicode": "4E88"
    },
    {
        "alternate_stroke_counts": [],
        "freq_mainichi_shinbun": 271,
        "grade": 4,
        "heisig_en": "contend",
        "jlpt": 3,
        "kanji": "争",
        "kun_readings": [
            "あらそ.う",
            "いか.でか"
        ],
        "meanings": [
            "contend",
            "dispute",
            "argue"
        ],
        "name_readings": [],
        "notes": [],
        "on_readings": [
            "ソウ"
        ],
        "stroke_count": 6,
        "unicode": "4E89"
    }
]

function KanjiBox() {
    return (
        <div className="flex gap-2 text-center">
            {data.map(element => (
                <div className="bg-custom-border-dark space-y-2">
                    <div className="flex gap-0.5">
                        <p>{element.kun_readings[0]}</p>•<p>{element.on_readings[0]}</p>
                    </div>
                    <h1 className="font-extrabold text-5xl">{element.kanji}</h1>
                    <p>{element.heisig_en}</p>
                </div>
            ))}
        </div>
    )
}

function Kanjis() {
    return (
        <div className="bg-custom-background w-full p-20 flex">
            <KanjiBox />
        </div>
    )
}

export default Kanjis