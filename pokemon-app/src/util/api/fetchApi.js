import Axios from "axios";

export const fetchApi = async (url) => {
  try {
    const response = await Axios.get(url);
    return {
      data: response.data,
      success: true,
      message: "Fetched SuccessFully",
    };
  } catch (e) {
    return {
      data: null,
      success: false,
      message: e,
    };
  }
};
