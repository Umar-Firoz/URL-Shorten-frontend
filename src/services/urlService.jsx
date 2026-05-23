import axios from "axios";

export async function shortenUrl(url){
    const response = await axios.post(
        'http://localhost:8080/url/shorten',
        {
            originalUrl : url
        }
    );
    return response.data.shortUrl;
}

export async function clickCounter(url){
    const response=await axios.get(
        `http://localhost:8080/url/analytics/${url}`
    )
    return response.data.clickCount;
}