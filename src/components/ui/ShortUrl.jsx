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
        <div className=" flex w-full max-w-[600px] items-center justify-between rounded-[18px] border border-[#27272a] bg-[var(--background)] p-4 pl-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:border-[#3f3f46]">
            <div className="truncate text-[22px] font-medium text-[var(--text-primary)] tracking-wide mr-4">
                {newUrl}
            </div>
            
            <button
                className="flex h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-[12px] bg-[var(--text-primary)] px-6 text-[16px] font-bold text-[var(--background)] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex-shrink-0 cursor-pointer"
                onClick={handleCopy}
            >
                {!copied ? <Copy size={18} strokeWidth={2.5} /> : <Check size={18} strokeWidth={2.5} />}
                <span className="hidden sm:inline">{!copied ? 'Copy' : 'Copied'}</span>
            </button>
        </div>
    )
}