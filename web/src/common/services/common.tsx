import axios from "axios";
import {APP_CONFIG} from '../../configs/server'

export default axios.create({
  baseURL: APP_CONFIG.API_CONFIGS.API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
