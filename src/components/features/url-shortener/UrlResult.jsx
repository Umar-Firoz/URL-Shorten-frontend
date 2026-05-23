import { ShortUrl } from "../../ui/ShortUrl.jsx";

export function UrlResult({ result, handleReset }) {
    return (
        <>
            <ShortUrl newUrl={result} />
            <button className="cursor-pointer" onClick={handleReset}> Another URL </button>
        </>
    );
}
