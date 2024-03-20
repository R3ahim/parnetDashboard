import axios from "axios";


const attendData = async () => {
    const response = await axios.get("https://deltaserverer.onrender.com/attend1");
    return response.data;
  };
  export default attendData;