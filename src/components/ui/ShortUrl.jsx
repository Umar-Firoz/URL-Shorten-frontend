import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function ShortUrl({ newUrl }) {

    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(newUrl);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className="flex flex-col gap-4 md:flex-row w-full max-w-[650px] items-center justify-between rounded-[18px] border border-[#27272a] bg-[var(--background)] p-4 md:pl-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-290 hover:border-[#3f3f46] overflow-hidden">
            <a href={newUrl}
               target="_blank"
               rel="noopener noreferrer" className="cursor-pointer w-full overflow-hidden flex justify-center md:justify-start">
                <div className="truncate text-[20px] sm:text-[22px] text-center md:text-left font-medium text-[var(--text-purple)] hover:text-[var(--text-secondary)] tracking-wide md:mr-4 w-full">
                    {newUrl}
                </div>
            </a>
            
            <button
                className="flex w-full md:w-auto h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-[12px] bg-[var(--text-primary)] px-6 text-[16px] font-bold text-[var(--background)] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex-shrink-0"
                onClick={handleCopy}
            >
                {!copied ? <Copy size={18} strokeWidth={2.5} /> : <Check size={18} strokeWidth={2.5} />}
                {!copied ? 'Copy' : 'Copied'}
            </button>
        </div>
    )
}