import axios from "axios";
import API_CONFIGS from '../../configs/server'

export default axios.create({
  baseURL: API_CONFIGS.API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
