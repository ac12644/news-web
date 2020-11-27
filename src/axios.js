import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/news-e7493/us-central1/bigben)'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;