import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/info")({
    component: Info,
});

function Info() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-custom-background bg-[url('/topography.svg')] bg-repeat bg-blend-soft-light font-english text-custom-text">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">About Hikari</p>
                        <h1 className="text-3xl font-semibold">Japanese study, all in one place</h1>
                    </div>
                    <button onClick={() => navigate({ to: "/home" })} className="rounded-xl border border-custom-border-hover bg-custom-secondary px-5 py-3 text-sm font-semibold text-custom-text transition-colors hover:bg-custom-secondary-hover">
                        Choose a level <span className="ml-2">→</span>
                    </button>
                </div>
                <p className="mb-6 max-w-3xl text-base text-custom-text-muted">Hikari is a clean and focused Japanese learning platform built to help students study smarter, not harder. It brings kanji, vocabulary, and grammar together in one place so learners can move steadily from basic understanding to confident JLPT preparation.</p>

                <section className="mb-10 rounded-2xl border border-custom-border-hover bg-custom-bg-200 p-6 shadow-sm">
                    <h2 className="mb-3 text-xl font-semibold">About this project</h2>
                    <p className="text-sm leading-7 text-custom-text-muted">
                        Hikari was created for learners who want a simple, organized, and motivating way to practice Japanese every day. With structured content across JLPT N5 to N1, the site makes it easy to explore topics by level, review essential patterns, and build consistent study habits.
                    </p>
                </section>

                <section className="mb-10 rounded-2xl border border-custom-border-hover bg-custom-bg-400 p-6 shadow-sm">
                    <h2 className="mb-3 text-xl font-semibold">Created by</h2>
                    <p className="text-sm leading-7 text-custom-text-muted">
                        <span className="font-semibold text-custom-navbar-hover text-[18px] mr-1">Md. Habibul Bashar Alif</span> is the creator behind this project, with a focus on building practical study tools that are easy to use and helpful for self-learning.
                    </p>
                </section>

                <div>
                    <h2 className="mb-4 text-xl font-semibold">Study content overview</h2>
                    <div className="flex flex-col gap-4">
                        <section className="flex flex-wrap items-start gap-5 rounded-2xl border border-custom-border-hover bg-custom-bg-200 p-6 shadow-sm">
                            <div className="min-w-36">
                                <p className="text-xs font-semibold uppercase text-custom-text-muted">Kanji</p>
                                <p className="mt-2 text-3xl font-semibold">2211</p>
                            </div>
                            <p className="min-w-52 flex-1 text-sm text-custom-text-muted">Practice readings and meanings, or browse the kanji frequency heatmap.</p>
                        </section>
                        <section className="flex flex-wrap items-start gap-5 rounded-2xl border border-custom-border-hover bg-custom-bg-400 p-6 shadow-sm">
                            <div className="min-w-36">
                                <p className="text-xs font-semibold uppercase text-custom-text-muted">Vocabulary</p>
                                <p className="mt-2 text-3xl font-semibold">7811</p>
                            </div>
                            <p className="min-w-52 flex-1 text-sm text-custom-text-muted">Study Japanese words with readings, meanings, and example sentences.</p>
                        </section>
                        <section className="flex flex-wrap items-start gap-5 rounded-2xl border border-custom-border-hover bg-custom-bg-50 p-6 shadow-sm">
                            <div className="min-w-36">
                                <p className="text-xs font-semibold uppercase text-custom-text-muted">Grammar</p>
                                <p className="mt-2 text-3xl font-semibold">526</p>
                            </div>
                            <p className="min-w-52 flex-1 text-sm text-custom-text-muted">Practice grammar patterns or browse meanings, formation, and examples.</p>
                        </section>
                    </div>
                </div>
                <section className="mt-10 border-t border-custom-border-hover pt-8">
                    <h2 className="mb-3 text-xl font-semibold">Five JLPT levels</h2>
                    <p className="text-sm text-custom-text-muted">Start at N5 for beginner material and work up to N1 for advanced study. Choose a level to see its kanji, vocabulary, and grammar options.</p>
                </section>
                <p className="mt-6 text-xs text-custom-text-muted">Content totals across JLPT N1 to N5.</p>
            </div>
            <h2 className="text-lg font-semibold text-custom-text text-center">Connect with me</h2>
            <div className="mt-4 pb-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-white">
                <a className="inline-flex h-14 w-40 items-center justify-center gap-2 rounded-2xl bg-[#5865F2] px-4 font-semibold hover:bg-[#4752C4] active:scale-98" href="https://discord.com/users/1067391651951149136" target="_blank"><svg className="h-6 w-6 shrink-0" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g></svg>Discord</a>
                <a className="inline-flex h-14 w-40 items-center justify-center gap-2 rounded-2xl bg-[#24292F] px-4 font-semibold hover:bg-[#3B424A] active:scale-98" href="https://github.com/mdHabibul" target="_blank"><svg className="h-6 w-6 shrink-0" fill="#ffffff" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"></path></g></svg>GitHub</a>
                <a className="inline-flex h-14 w-40 items-center justify-center gap-2 rounded-2xl bg-[#FF4500] px-4 font-semibold hover:bg-[#D93A00] active:scale-98" href="https://reddit.com/user/habibulBasharAlif" target="_blank"><svg className="h-6 w-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" /><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" /></svg>Reddit</a>
            </div>
        </div>
    );
}