import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "6f589807e27f723065a1e69b86c5989f",
    language: "ko-KR"
  }
})

export default instance;