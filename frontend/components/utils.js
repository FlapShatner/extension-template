export async function generate(prompt) {
    const apiKey = import.meta.env.VITE_DEEPAI_API_KEY
    const resp = await fetch('https://api.deepai.org/api/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey
        },
        body: JSON.stringify({
            text: prompt,
        })
    });
    
    const data = await resp.json();
    console.log(data);
    return data.output_url;
}