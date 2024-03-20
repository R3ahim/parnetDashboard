
import axios from "axios";


const retrievePosts = async () => {
    const response = await axios.get("https://delta-j1eh.onrender.com/addMember");
    return response.data;
  };
  export default retrievePosts;