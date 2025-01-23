import axios from "axios";

const config = {
  baseUrl: "https://instagran.vtower.p.rapidapi.com",
  endpoint: "instagnas-viewer/profile",
  apiKey: "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957",
};

const fetchStories = async (userId) => {
  try {
    const url = `${config.baseUrl}/${config.endpoint}-${userId}`;
    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": config.apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    return [];
  }
};

export default { fetchStories };