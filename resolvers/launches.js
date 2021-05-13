const axios = require("axios");

const fetchLaunches = async (parent, args) => {
  try {
    const res = await axios.get("https://api.spacexdata.com/v4/launches/");
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

const fetchLaunchById = async (parent, args) => {
  try {
    const res = await axios.get(
      `https://api.spacexdata.com/v4/launches/${args.id}`
    );
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  fetchLaunches,
  fetchLaunchById
};
