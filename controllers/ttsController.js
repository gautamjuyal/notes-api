const axios = require("axios");

exports.postTtsText = async (req, res) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("src", req.body.text);
  encodedParams.set("hl", "en-us");
  encodedParams.set("r", "0");
  encodedParams.set("c", "mp3");
  encodedParams.set("f", "8khz_8bit_mono");
  encodedParams.set("b64", "true");

  const options = {
    method: "POST",
    url: "https://voicerss-text-to-speech.p.rapidapi.com/",
    params: { key: process.env.TTS_USER_KEY },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": process.env.TTS_KEY,
      "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    res.status(200).json({ audio: response.data });
  } catch (error) {
    console.error(error);
  }
};
