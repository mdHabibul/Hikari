import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/katakana")({
  component: Katakana,
});

function Katakana() {

  const katakanaArray01 = [
    { "moji": "ア", "romaji": "a" },
    { "moji": "イ", "romaji": "i" },
    { "moji": "ウ", "romaji": "u" },
    { "moji": "エ", "romaji": "e" },
    { "moji": "オ", "romaji": "o" },
    { "moji": "カ", "romaji": "ka" },
    { "moji": "キ", "romaji": "ki" },
    { "moji": "ク", "romaji": "ku" },
    { "moji": "ケ", "romaji": "ke" },
    { "moji": "コ", "romaji": "ko" },
    { "moji": "サ", "romaji": "sa" },
    { "moji": "シ", "romaji": "shi" },
    { "moji": "ス", "romaji": "su" },
    { "moji": "セ", "romaji": "se" },
    { "moji": "ソ", "romaji": "so" },
    { "moji": "タ", "romaji": "ta" },
    { "moji": "チ", "romaji": "chi" },
    { "moji": "ツ", "romaji": "tsu" },
    { "moji": "テ", "romaji": "te" },
    { "moji": "ト", "romaji": "to" },
    { "moji": "ナ", "romaji": "na" },
    { "moji": "ニ", "romaji": "ni" },
    { "moji": "ヌ", "romaji": "nu" },
    { "moji": "ネ", "romaji": "ne" },
    { "moji": "ノ", "romaji": "no" },
    { "moji": "ハ", "romaji": "ha" },
    { "moji": "ヒ", "romaji": "hi" },
    { "moji": "フ", "romaji": "fu" },
    { "moji": "ヘ", "romaji": "he" },
    { "moji": "ホ", "romaji": "ho" },
    { "moji": "マ", "romaji": "ma" },
    { "moji": "ミ", "romaji": "mi" },
    { "moji": "ム", "romaji": "mu" },
    { "moji": "メ", "romaji": "me" },
    { "moji": "モ", "romaji": "mo" },
    { "moji": "ヤ", "romaji": "ya" },
    { "moji": "", "romaji": "" },
    { "moji": "ユ", "romaji": "yu" },
    { "moji": "", "romaji": "" },
    { "moji": "ヨ", "romaji": "yo" },
    { "moji": "ラ", "romaji": "ra" },
    { "moji": "リ", "romaji": "ri" },
    { "moji": "ル", "romaji": "ru" },
    { "moji": "レ", "romaji": "re" },
    { "moji": "ロ", "romaji": "ro" },
    { "moji": "ワ", "romaji": "wa" },
    { "moji": "", "romaji": "" },
    { "moji": "ヲ", "romaji": "wo" },
    { "moji": "", "romaji": "" },
    { "moji": "ン", "romaji": "n" }
  ];

  const katakanaArray02 = [
    { "moji": "ガ", "romaji": "ga" },
    { "moji": "ギ", "romaji": "gi" },
    { "moji": "グ", "romaji": "gu" },
    { "moji": "ゲ", "romaji": "ge" },
    { "moji": "ゴ", "romaji": "go" },

    { "moji": "ザ", "romaji": "za" },
    { "moji": "ジ", "romaji": "ji" },
    { "moji": "ズ", "romaji": "zu" },
    { "moji": "ゼ", "romaji": "ze" },
    { "moji": "ゾ", "romaji": "zo" },

    { "moji": "ダ", "romaji": "da" },
    { "moji": "ヂ", "romaji": "ji" },
    { "moji": "ヅ", "romaji": "zu" },
    { "moji": "デ", "romaji": "de" },
    { "moji": "ド", "romaji": "do" },

    { "moji": "バ", "romaji": "ba" },
    { "moji": "ビ", "romaji": "bi" },
    { "moji": "ブ", "romaji": "bu" },
    { "moji": "ベ", "romaji": "be" },
    { "moji": "ボ", "romaji": "bo" },

    { "moji": "パ", "romaji": "pa" },
    { "moji": "ピ", "romaji": "pi" },
    { "moji": "プ", "romaji": "pu" },
    { "moji": "ペ", "romaji": "pe" },
    { "moji": "ポ", "romaji": "po" }
  ];

  const katakanaArray03 = [
    { "moji": "キャ", "romaji": "kya" },
    { "moji": "キュ", "romaji": "kyu" },
    { "moji": "キョ", "romaji": "kyo" },

    { "moji": "シャ", "romaji": "sha" },
    { "moji": "シュ", "romaji": "shu" },
    { "moji": "ショ", "romaji": "sho" },

    { "moji": "チャ", "romaji": "cha" },
    { "moji": "チュ", "romaji": "chu" },
    { "moji": "チョ", "romaji": "cho" },

    { "moji": "ニャ", "romaji": "nya" },
    { "moji": "ニュ", "romaji": "nyu" },
    { "moji": "ニョ", "romaji": "nyo" },

    { "moji": "ヒャ", "romaji": "hya" },
    { "moji": "ヒュ", "romaji": "hyu" },
    { "moji": "ヒョ", "romaji": "hyo" },

    { "moji": "ミャ", "romaji": "mya" },
    { "moji": "ミュ", "romaji": "myu" },
    { "moji": "ミョ", "romaji": "myo" },

    { "moji": "リャ", "romaji": "rya" },
    { "moji": "リュ", "romaji": "ryu" },
    { "moji": "リョ", "romaji": "ryo" },

    { "moji": "ギャ", "romaji": "gya" },
    { "moji": "ギュ", "romaji": "gyu" },
    { "moji": "ギョ", "romaji": "gyo" },

    { "moji": "ジャ", "romaji": "ja" },
    { "moji": "ジュ", "romaji": "ju" },
    { "moji": "ジョ", "romaji": "jo" },

    { "moji": "ビャ", "romaji": "bya" },
    { "moji": "ビュ", "romaji": "byu" },
    { "moji": "ビョ", "romaji": "byo" },

    { "moji": "ピャ", "romaji": "pya" },
    { "moji": "ピュ", "romaji": "pyu" },
    { "moji": "ピョ", "romaji": "pyo" }
  ];

  const handleAudio = (element) => {
    if (!window.speechSynthesis) return;

    const speech = element.moji;
    const speak = new SpeechSynthesisUtterance(speech);

    speak.lang = "ja-JP";
    speak.rate = 0.9;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speak);
  }

  return (
    <div>
      <div className="min-h-screen w-full bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light text-custom-text font-english">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Katakana Practice</p>
              <h1 className="text-3xl font-semibold">Daily Katakana</h1>
            </div>
            <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
              <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N5</span>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-2xl bg-custom-secondary px-5 py-4 shadow-lg">
            <h2 className="text-lg font-semibold text-custom-text">Basic Katakana</h2>
            <p className="rounded-full bg-custom-background px-3 py-1 text-md font-japanese font-light text-custom-text-muted">清音</p>
          </div>
          <div className="flex flex-wrap justify-around gap-4 p-4 border border-custom-border-hover bg-custom-secondary rounded-3xl shadow-2xl">
            {katakanaArray01.map((element) => (
              <button onClick={() => handleAudio(element)} className="flex flex-col justify-around items-center rounded-3xl border-custom-border-hover bg-custom-background shadow-inner h-50 w-1/6 px-5 pt-10 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0.5">
                <p className="text-7xl mb-4 font-japanese">{element.moji}</p>
                <p className="text-xs pb-5 text-custom-text-muted">{element.romaji}</p>
              </button>
            ))}
          </div>

          <div className="mt-15 mb-4 flex items-center justify-between rounded-2xl bg-custom-secondary px-5 py-4 shadow-lg">
            <h2 className="text-lg font-semibold text-custom-text">Dakuten and Handakuten Katakana</h2>
            <p className="rounded-full bg-custom-background px-3 py-1 text-md font-japanese font-light text-custom-text-muted">濁音・半濁音</p>
          </div>
          <div className="flex flex-wrap justify-around gap-4 p-4 border border-custom-border-hover bg-custom-secondary rounded-3xl shadow-2xl">
            {katakanaArray02.map((element) => (
              <button onClick={() => handleAudio(element)} className="flex flex-col justify-around items-center rounded-3xl border-custom-border-hover bg-custom-background shadow-inner h-50 w-1/6 px-5 pt-10 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0.5">
                <p className="text-7xl mb-4 font-japanese">{element.moji}</p>
                <p className="text-xs pb-5 text-custom-text-muted">{element.romaji}</p>
              </button>
            ))}
          </div>

          <div className="mt-15 mb-4 flex items-center justify-between rounded-2xl bg-custom-secondary px-5 py-4 shadow-lg">
            <h2 className="text-lg font-semibold text-custom-text">Combination Katakana</h2>
            <p className="rounded-full bg-custom-background px-3 py-1 text-md font-japanese font-light text-custom-text-muted">拗音</p>
          </div>
          <div className="flex flex-wrap justify-around mx-auto w-[70%] gap-4 p-4 space-y-3 border border-custom-border-hover bg-custom-secondary rounded-3xl shadow-2xl">
            {katakanaArray03.map((element) => (
              <button onClick={() => handleAudio(element)} className="flex flex-col justify-around items-center rounded-3xl border-custom-border-hover bg-custom-background shadow-inner h-40 w-1/4 px-5 pt-10 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0.5">
                <p className="text-5xl mb-4 font-japanese">{element.moji}</p>
                <p className="text-xs pb-5 text-custom-text-muted">{element.romaji}</p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}