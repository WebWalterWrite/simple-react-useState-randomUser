import axios from "axios";

// get 100 users

export const getUsers = async () => {
  try {
    const {
      data: { results }
    } = await axios.get("https://randomuser.me/api/?nat=fr&results=100");

    return results;
  } catch (error) {
    console.error(error.message);
  }
};
