import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const KEY = "AIzaSyAaWMjCInsjAzLvgp3iarlh06IaMijAQ2w";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 20,
        type: "video",
        key: KEY,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};
export default useVideos;
