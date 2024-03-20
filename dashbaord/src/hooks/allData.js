import axios from "axios";


const allData = async () => {
    const response = await axios.get("https://deltaserverer.onrender.com/totalSell");
    return response.data;
  };
  export default allData;