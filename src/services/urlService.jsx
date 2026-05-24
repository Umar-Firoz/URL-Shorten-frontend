import axios from "axios";

export async function shortenUrl(url){
    const response = await axios.post(
        'https://url04.up.railway.app/url/shorten',
        {
            originalUrl : url
        }
    );
    return response.data.shortUrl;
}

export async function clickCounter(url){
    const response=await axios.get(
        `https://url04.up.railway.app/url/analytics/${url}`
    )
    return response.data.clickCount;
}