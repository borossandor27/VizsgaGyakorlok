import fs from "fs";
import "dotenv/config";

async function generateImage() {
  const response = await fetch("https://openrouter.ai/api/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000", // Kötelező/ajánlott az OpenRouternél
      "X-Title": "My Image App"
    },
    body: JSON.stringify({
      "model": "flux-1.1-pro-ultra",
      "prompt": "modern compact city car, realistic 4k, rental car catalog photo",
      "response_format": "b64_json",
      "size": "1024x1024"
    })
  });

  const result = await response.json();

  if (result.error) {
    console.error("❌ Hiba az OpenRoutertől:", result.error);
    return;
  }

  // Mappa létrehozása, ha nem létezik
  if (!fs.existsSync("./images")) {
    fs.mkdirSync("./images");
  }

  const imageBase64 = result.data[0].b64_json;
  fs.writeFileSync("./images/kompakt.png", Buffer.from(imageBase64, "base64"));

  console.log("✅ Kép sikeresen mentve: images/kompakt.png");
}

generateImage();