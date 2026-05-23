import { Input } from "../../ui/Input.jsx";
import { Button } from "../../ui/Button.jsx";

export function UrlForm({ url, handleInput, handleEnter, handleShorten, error }) {
    return (
        <div className="flex w-full flex-col items-center gap-2">
            <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
                <Input
                    type="text"
                    value={url}
                    onChange={handleInput}
                    onKeyDown={handleEnter}
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    error={error}
                />
                <Button onClick={handleShorten}>
                    Shorten URL
                </Button>
            </div>
            {error && <span className="text-red-500 text-[14px] sm:text-[15px] font-medium">{error}</span>}
        </div>
    );
}
