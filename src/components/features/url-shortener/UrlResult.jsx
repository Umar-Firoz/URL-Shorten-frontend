import { ShortUrl } from "../../ui/ShortUrl.jsx";

export function UrlResult({ result, handleReset,count }) {
    return (
        <>
            <ShortUrl newUrl={result} />
            <div className="text-[22px] font-semibold ">
              Click Count : <span className="">{count}</span>
            </div>
            <button className="cursor-pointer underline" onClick={handleReset}> Another URL </button>
        </>
    );
}
