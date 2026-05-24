import { UrlShortener } from "../components/features/url-shortener/UrlShortener.jsx";

export function Home(){
    return(
        <div className="flex flex-col items-center px-8 sm:px-12 pt-[36px] sm:pt-[100px] gap-8 sm:gap-12 w-full max-w-5xl mx-auto">
            <div className="text-[32px] sm:text-[48px] md:text-[60px] font-light leading-[1.1] tracking-[-2px] text-[var(--text-secondary)] text-center">
                Transform Long URLs
                <br/>
                <span className="text-[var(--text-primary)]">
                 Into Beautiful Short Links.
                </span>
            </div>
            <UrlShortener />
        </div>
    )
}