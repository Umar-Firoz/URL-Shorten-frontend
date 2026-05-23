export function Button({ children, className, ...props }) {
    return (
        <button
            className={`h-[58px] cursor-pointer whitespace-nowrap rounded-[14px] bg-[var(--text-primary)] px-8 text-[20px] font-semibold text-[var(--background)] transition-all duration-300 hover:scale-[1.02] hover:opacity-90 sm:text-[20px] cursor-pointer ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
}
