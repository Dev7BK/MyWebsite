import axios from "axios";
import { API_KEY, API_URL } from "../config/api";

const translateText = async (text: string, targetLanguage: string) => {
  const response = await axios.post(
    `${API_URL}`,
    new URLSearchParams({
      auth_key: API_KEY,
      text: text,
      target_lang: targetLanguage,
    })
  );

  return response.data.translations[0].text;
};

export default translateText;
