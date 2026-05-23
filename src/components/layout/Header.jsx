import { ThemeToggle } from "../ui/ToggleButton.jsx";

export function Header() {
    return (
        <div className="fixed z-50 flex h-[72px] w-full items-center justify-between border-b border-[#27272a] bg-[var(--background)] px-8 text-[var(--text-primary)]">
            <div className=" text-xl font-bold">
                {'URL SHORTEN'}
            </div>
            <ThemeToggle />
        </div>
    )
}