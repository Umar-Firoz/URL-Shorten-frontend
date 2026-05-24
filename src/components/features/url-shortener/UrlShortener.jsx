import { useState, useEffect } from "react";
import { UrlForm } from "./UrlForm.jsx";
import { UrlResult } from "./UrlResult.jsx";
import { shortenUrl,clickCounter } from "../../../services/urlService.jsx";

export function UrlShortener() {
    const [url, setUrl] = useState(() => localStorage.getItem("shortenerUrl") || '');
    const [result, setResult] = useState(() => localStorage.getItem("shortenerResult") || '');
    const [count, setCount] = useState(() => localStorage.getItem("countResult") || '');
    const [error, setError] = useState('');

    useEffect(() => {
        localStorage.setItem("shortenerUrl", url);
        localStorage.setItem("shortenerResult", result);
        localStorage.setItem("countResult", count);
    }, [url, result, count]);

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
    useEffect(() => {
        if (!result) return;
        const shortCode =
            result.split('/').pop();
        const interval = setInterval(
            async () => {
                const click =
                    await clickCounter(shortCode);
                setCount(click);
            },
            2000
        );
        return () => clearInterval(interval);
    }, [result]);

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
        setCount('');
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
            {result && <UrlResult result={result} count={count} handleReset={handleReset} />}
        </div>
    );
}
