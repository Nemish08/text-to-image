

import axios from 'axios';



export default async function fetch_response(prompt) {
    const url = `https://api.kastg.xyz/api/ai/flux?prompt=${encodeURI(prompt)}&ratio=square&key=${import.meta.env.VITE_APP_API_KEY}`
    console.log(url)

    const options = {
        method: 'POST',
        url: 'https://http-cors-proxy.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': '137c4c4794msh068d55bc7d3a0b9p19af27jsnb239dfca3248',
          'x-rapidapi-host': 'http-cors-proxy.p.rapidapi.com',
          'Content-Type': 'application/json',
          Origin: 'www.example.com',
          'X-Requested-With': 'www.example.com'
        },
        data: {
          url: url
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data.result[0].url
      } catch (error) {
          console.error(error);
      }
      
}

