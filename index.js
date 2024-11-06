require("dotenv").config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getImage(query) {
  const response = await fetch(endpoint);
  const data = await response.json();
  const image = data.data[Math.floor(Math.random() * 24)].images.original.url;
  console.log(image);
  return image;
}

getImage("dog");
