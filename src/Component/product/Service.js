import axios from "axios";
const apiAddress = "http://localhost:5000/product/";

//const apiAddress= "https://magnificent-knotty-hen.glitch.me/"
//https://zircon-pollen-humidity.glitch.me/product
// const apiAddress= "https://zircon-pollen-humidity.glitch.me/product/"
export const ProductService = {
  getProducts: (q = "") => {
    return axios.get(apiAddress + q) 
    //  return axios.get("https://someetest2021.somee.com/product/");
  },
  getMobleman: () => {
    return axios.get(apiAddress + "mobleman") 
    //  return axios.get("https://someetest2021.somee.com/product/");
  },
  getProuductById: (id) => {
    return axios.get(apiAddress + id);
  },
  getProductsWithOff: () => {
    return axios.get(apiAddress +"off");
  },
  getProductsWithNewColection: () => {
    return axios.get(apiAddress +"NewColection");
  },
  getProductsWithEdari: () => {
    return axios.get(apiAddress +"Edari");
  },
  getProductsWithserviskhab: () => {
    return axios.get(apiAddress +"serviskhab");
  },
  getProductsWithserviskhabById: (id) => {
    return axios.get(apiAddress +"serviskhab/"+id);
  },

  addComment: (productId, comment) =>
    axios.post(apiAddress + productId + "/comments", comment),
  getComments: (productId) => axios.get(apiAddress + productId + "/comments"),
};
