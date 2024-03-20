import axios from "axios";


const attender = async () => {
    const response = await axios.get("https://deltaserverer.onrender.com/addMember");
    return response.data;
  };
  export default attender;