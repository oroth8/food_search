import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Jp-g82r0tCwKzyGFPFL2YkZMQW9My50eYPMg4hlhvqYC6HRYFY6k0urxCxTa9BLSYWBtJKUe7pMNRrKNa5vxi9RxZitDRkl-ektu85O3h7Bjjc6h7OFkFgvOtv70X3Yx",
  },
});
