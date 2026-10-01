import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useState } from "react"
import logo from '../assets/hikari.png'

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    const [hamIsClicked, setHamIsClicked] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="font-english flex justify-between items-center px-6 bg-custom-navbar-bg text-custom-navbar-text">
                <div className="flex justify-center items-center">
                    <img className="size-12" src={logo} alt="Hikari logo" />
                    <h1 className="text-custom-navbar-title pl-3 py-1 uppercase text-5xl">Hikari</h1>
                </div>
                <div className="flex justify-around gap-8">
                    <button onClick={() => navigate({ to: "/home" })} className="px-4 py-2 hover:bg-custom-navbar-hover hover:rounded-2xl hover:cursor-pointer active:bg-custom-navbar-active">Home</button>
                    <button className="px-4 py-2 hover:bg-custom-navbar-hover hover:rounded-2xl hover:cursor-pointer active:bg-custom-navbar-active">Progress</button>
                    <button className="px-4 py-2 hover:bg-custom-navbar-hover hover:rounded-2xl hover:cursor-pointer active:bg-custom-navbar-active">Focus</button>
                    <button onClick={() => navigate({ to: "/info" })} className="px-4 py-2 hover:bg-custom-navbar-hover hover:rounded-2xl hover:cursor-pointer active:bg-custom-navbar-active">Info</button>
                </div>
                <div className="flex justify-around items-center gap-5">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        <input type="text" className="w-36 rounded-lg border border-transparent bg-custom-navbar-hover px-3 py-1.5 text-left text-custom-navbar-text placeholder:text-custom-navbar-muted outline-none transition-colors focus:bg-custom-navbar-bg" placeholder="Search..." />
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17.925 20.056a6 6 0 0 0-11.851.001" /><circle cx="12" cy="11" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                    </button>
                    <div className="relative">
                        <button onClick={() => setHamIsClicked(!hamIsClicked)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                        </button>
                        {hamIsClicked && (
                            <div className="absolute right-0 top-full z-40 mt-3 w-64 rounded-2xl border border-custom-border-hover bg-custom-secondary p-4 text-custom-text shadow-2xl">
                                <p className="mb-3 rounded-xl bg-custom-bg-50 px-4 py-3 text-sm font-semibold">Where do you want to go?</p>
                                <button onClick={() => { navigate({ to: "/home" }); setHamIsClicked(false); }} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm hover:bg-custom-secondary-hover">
                                    Choose a level <span>→</span>
                                </button>
                                <button onClick={() => { navigate({ to: "/info" }); setHamIsClicked(false); }} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm hover:bg-custom-secondary-hover">
                                    About Hikari <span>→</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}