import Axios from "axios";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_DEV_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default instance;
