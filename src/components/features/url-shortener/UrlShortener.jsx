import { useState, useEffect } from "react";
import { UrlForm } from "./UrlForm.jsx";
import { UrlResult } from "./UrlResult.jsx";
import { shortenUrl } from "../../../services/urlService.jsx";

export function UrlShortener() {
    const [url, setUrl] = useState(() => localStorage.getItem("shortenerUrl") || '');
    const [result, setResult] = useState(() => localStorage.getItem("shortenerResult") || '');
    const [error, setError] = useState('');

    useEffect(() => {
        localStorage.setItem("shortenerUrl", url);
        localStorage.setItem("shortenerResult", result);
    }, [url, result]);

    async function handleShorten() {
        if (!url.trim()) {
            setError('Please enter URL');
            return;
        }
        if (!url.includes('.')) {
            setError('Please enter valid URL');
            return;
        }
        setError('');
        const data = await shortenUrl(url);
        setResult(data);
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleShorten();
        }
    }

    function handleInput(e) {
        setUrl(e.target.value);
        if (error) setError('');
    }

    function handleReset() {
        setUrl('');
        setResult('');
    }

    return (
        <div className="flex flex-col gap-8 w-full items-center">
            <UrlForm 
                url={url} 
                handleInput={handleInput} 
                handleEnter={handleEnter} 
                handleShorten={handleShorten} 
                error={error} 
            />
            {result && <UrlResult result={result} handleReset={handleReset} />}
        </div>
    );
}
