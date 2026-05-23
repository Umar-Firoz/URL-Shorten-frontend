export function Input({ error, className, ...props }) {
    return (
        <input
            className={`h-[58px] w-full max-w-[550px] rounded-[14px] border ${error ? 'border-red-500' : 'border-[#27272a]'} bg-white px-5 text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] sm:text-[18px] ${className || ''}`}
            {...props}
        />
    );
}