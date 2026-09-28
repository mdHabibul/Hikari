import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useState } from "react"

export const Route = createRootRoute({
    component: Root,
});

function Hamburger() {
    return (
        <div className="right-3 bg-amber-200 h-40 w-20 absolute z-1">
            <button>All</button>
        </div>
    )
}

function Root() {
    const [hamIsClicked, setHamIsClicked] = useState(false);
    const navigate = useNavigate();

    const hamMenu = () => {
        if (hamIsClicked) {
            setHamIsClicked(false)
        } else {
            setHamIsClicked(true)
        }
    }
    return (
        <>
            <div className="font-english flex justify-between items-center px-6 bg-custom-navbar-bg text-custom-navbar-text">
                <h1 className="text-custom-navbar-title pl-3 py-1 uppercase text-5xl">Hikari</h1>
                <div className="flex justify-around gap-30">
                    <button onClick={() => navigate({ to: "/home" })} className="px-4 py-2 hover:bg-custom-navbar-hover hover:rounded-2xl hover:cursor-pointer active:bg-custom-navbar-active">Home</button>
                    <button>1</button>
                    <button>2</button>
                </div>
                <div className="flex justify-around items-center gap-5">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        <input type="text" className="w-36 rounded-lg border border-transparent bg-custom-navbar-hover px-3 py-1.5 text-left text-custom-navbar-text placeholder:text-custom-navbar-muted outline-none transition-colors focus:bg-custom-navbar-bg" placeholder="Search..." />
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17.925 20.056a6 6 0 0 0-11.851.001"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                    </button>
                    <button onClick={hamMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg></button>
                </div>
            </div>
            {hamIsClicked && <Hamburger />}

            <Outlet />
        </>
    )
}