import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hiragana")({
  component: Hiragana,
});

function Hiragana() {

  const hiraganaArray01 = [
    { "moji": "あ", "romaji": "a" },
    { "moji": "い", "romaji": "i" },
    { "moji": "う", "romaji": "u" },
    { "moji": "え", "romaji": "e" },
    { "moji": "お", "romaji": "o" },
    { "moji": "か", "romaji": "ka" },
    { "moji": "き", "romaji": "ki" },
    { "moji": "く", "romaji": "ku" },
    { "moji": "け", "romaji": "ke" },
    { "moji": "こ", "romaji": "ko" },
    { "moji": "さ", "romaji": "sa" },
    { "moji": "し", "romaji": "shi" },
    { "moji": "す", "romaji": "su" },
    { "moji": "せ", "romaji": "se" },
    { "moji": "そ", "romaji": "so" },
    { "moji": "た", "romaji": "ta" },
    { "moji": "ち", "romaji": "chi" },
    { "moji": "つ", "romaji": "tsu" },
    { "moji": "て", "romaji": "te" },
    { "moji": "と", "romaji": "to" },
    { "moji": "な", "romaji": "na" },
    { "moji": "に", "romaji": "ni" },
    { "moji": "ぬ", "romaji": "nu" },
    { "moji": "ね", "romaji": "ne" },
    { "moji": "の", "romaji": "no" },
    { "moji": "は", "romaji": "ha" },
    { "moji": "ひ", "romaji": "hi" },
    { "moji": "ふ", "romaji": "fu" },
    { "moji": "へ", "romaji": "he" },
    { "moji": "ほ", "romaji": "ho" },
    { "moji": "ま", "romaji": "ma" },
    { "moji": "み", "romaji": "mi" },
    { "moji": "む", "romaji": "mu" },
    { "moji": "め", "romaji": "me" },
    { "moji": "も", "romaji": "mo" },
    { "moji": "や", "romaji": "ya" },
    { "moji": "", "romaji": "" },
    { "moji": "ゆ", "romaji": "yu" },
    { "moji": "", "romaji": "" },
    { "moji": "よ", "romaji": "yo" },
    { "moji": "ら", "romaji": "ra" },
    { "moji": "り", "romaji": "ri" },
    { "moji": "る", "romaji": "ru" },
    { "moji": "れ", "romaji": "re" },
    { "moji": "ろ", "romaji": "ro" },
    { "moji": "わ", "romaji": "wa" },
    { "moji": "", "romaji": "" },
    { "moji": "を", "romaji": "wo" },
    { "moji": "", "romaji": "" },
    { "moji": "ん", "romaji": "n" }
  ];

  const hiraganaArray02 = [
    { "moji": "が", "romaji": "ga" },
    { "moji": "ぎ", "romaji": "gi" },
    { "moji": "ぐ", "romaji": "gu" },
    { "moji": "げ", "romaji": "ge" },
    { "moji": "ご", "romaji": "go" },

    { "moji": "ざ", "romaji": "za" },
    { "moji": "じ", "romaji": "ji" },
    { "moji": "ず", "romaji": "zu" },
    { "moji": "ぜ", "romaji": "ze" },
    { "moji": "ぞ", "romaji": "zo" },

    { "moji": "だ", "romaji": "da" },
    { "moji": "ぢ", "romaji": "ji" },
    { "moji": "づ", "romaji": "zu" },
    { "moji": "で", "romaji": "de" },
    { "moji": "ど", "romaji": "do" },

    { "moji": "ば", "romaji": "ba" },
    { "moji": "び", "romaji": "bi" },
    { "moji": "ぶ", "romaji": "bu" },
    { "moji": "べ", "romaji": "be" },
    { "moji": "ぼ", "romaji": "bo" },

    { "moji": "ぱ", "romaji": "pa" },
    { "moji": "ぴ", "romaji": "pi" },
    { "moji": "ぷ", "romaji": "pu" },
    { "moji": "ぺ", "romaji": "pe" },
    { "moji": "ぽ", "romaji": "po" }
  ];

  const hiraganaArray03 = [
    { "moji": "きゃ", "romaji": "kya" },
    { "moji": "きゅ", "romaji": "kyu" },
    { "moji": "きょ", "romaji": "kyo" },

    { "moji": "しゃ", "romaji": "sha" },
    { "moji": "しゅ", "romaji": "shu" },
    { "moji": "しょ", "romaji": "sho" },

    { "moji": "ちゃ", "romaji": "cha" },
    { "moji": "ちゅ", "romaji": "chu" },
    { "moji": "ちょ", "romaji": "cho" },

    { "moji": "にゃ", "romaji": "nya" },
    { "moji": "にゅ", "romaji": "nyu" },
    { "moji": "にょ", "romaji": "nyo" },

    { "moji": "ひゃ", "romaji": "hya" },
    { "moji": "ひゅ", "romaji": "hyu" },
    { "moji": "ひょ", "romaji": "hyo" },

    { "moji": "みゃ", "romaji": "mya" },
    { "moji": "みゅ", "romaji": "myu" },
    { "moji": "みょ", "romaji": "myo" },

    { "moji": "りゃ", "romaji": "rya" },
    { "moji": "りゅ", "romaji": "ryu" },
    { "moji": "りょ", "romaji": "ryo" },

    { "moji": "ぎゃ", "romaji": "gya" },
    { "moji": "ぎゅ", "romaji": "gyu" },
    { "moji": "ぎょ", "romaji": "gyo" },

    { "moji": "じゃ", "romaji": "ja" },
    { "moji": "じゅ", "romaji": "ju" },
    { "moji": "じょ", "romaji": "jo" },

    { "moji": "びゃ", "romaji": "bya" },
    { "moji": "びゅ", "romaji": "byu" },
    { "moji": "びょ", "romaji": "byo" },

    { "moji": "ぴゃ", "romaji": "pya" },
    { "moji": "ぴゅ", "romaji": "pyu" },
    { "moji": "ぴょ", "romaji": "pyo" }
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
              <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Hiragana Practice</p>
              <h1 className="text-3xl font-semibold">Daily Hiragana</h1>
            </div>
            <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
              <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N5</span>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-2xl bg-custom-secondary px-5 py-4 shadow-lg">
            <h2 className="text-lg font-semibold text-custom-text">Basic Hiragana</h2>
            <p className="rounded-full bg-custom-background px-3 py-1 text-md font-japanese font-light text-custom-text-muted">清音</p>
          </div>
          <div className="flex flex-wrap justify-around gap-4 p-4 border border-custom-border-hover bg-custom-secondary rounded-3xl shadow-2xl">
            {hiraganaArray01.map((element) => (
              <button onClick={() => handleAudio(element)} className="flex flex-col justify-around items-center rounded-3xl border-custom-border-hover bg-custom-background shadow-inner h-50 w-1/6 px-5 pt-10 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0.5">
                <p className="text-7xl mb-4 font-japanese">{element.moji}</p>
                <p className="text-xs pb-5 text-custom-text-muted">{element.romaji}</p>
              </button>
            ))}
          </div>

          <div className="mt-15 mb-4 flex items-center justify-between rounded-2xl bg-custom-secondary px-5 py-4 shadow-lg">
            <h2 className="text-lg font-semibold text-custom-text">Dakuten and Handakuten Hiragana</h2>
            <p className="rounded-full bg-custom-background px-3 py-1 text-md font-japanese font-light text-custom-text-muted">濁音・半濁音</p>
          </div>
          <div className="flex flex-wrap justify-around gap-4 p-4 border border-custom-border-hover bg-custom-secondary rounded-3xl shadow-2xl">
            {hiraganaArray02.map((element) => (
              <button onClick={() => handleAudio(element)} className="flex flex-col justify-around items-center rounded-3xl border-custom-border-hover bg-custom-background shadow-inner h-50 w-1/6 px-5 pt-10 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0.5">
                <p className="text-7xl mb-4 font-japanese">{element.moji}</p>
                <p className="text-xs pb-5 text-custom-text-muted">{element.romaji}</p>
              </button>
            ))}
          </div>

          <div className="mt-15 mb-4 flex items-center justify-between rounded-2xl bg-custom-secondary px-5 py-4 shadow-lg">
            <h2 className="text-lg font-semibold text-custom-text">Combination Hiragana</h2>
            <p className="rounded-full bg-custom-background px-3 py-1 text-md font-japanese font-light text-custom-text-muted">拗音</p>
          </div>
          <div className="flex flex-wrap justify-around mx-auto w-[70%] gap-4 p-4 space-y-3 border border-custom-border-hover bg-custom-secondary rounded-3xl shadow-2xl">
            {hiraganaArray03.map((element) => (
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