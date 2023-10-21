import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bdee75c0f9e400e943e7f1ca1e6c315",
  },
});
