import axios from "axios";

import { API_URL } from "../../config";

export const apiContactUs = async (form) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/v1/users`, form);
    return data;
  } catch (err) {
    if (err.code === "ERR_NETWORK") {
      throw new Error(err.message);
    }

    throw new Error("Something went wrong! Please try again later");
  }
};
