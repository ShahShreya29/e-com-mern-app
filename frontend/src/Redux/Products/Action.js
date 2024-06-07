import api from '../../Config/apiConfig'

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_SUCCESS = " GET_PRODUCT_SUCCESS ";

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL  ";


const API_URL = 'http://localhost:8080/api/';

export const getProducts = (data) => async (dispatch) => {
  dispatch({ GET_PRODUCTS_REQUEST });
  const {
    color, 
    sizes,
    minPrice,
    maxPrice, 
    minDiscount,
    stock,
    sort,
    category,
    pageNumber,
    pageSize,
  } = data;
  try {
    const { data } =await api.get(
      `/products/color=${color}&size=${sizes}&minPrice=${minPrice}$maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
console.log("product data",data);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProduct = (data) => (dispatch) => {
    dispatch({ GET_PRODUCT_REQUEST });
    const {
productId     
    } = data;
    try {
      const { data } = api.get(
        `/products/id/${productId}`
      );
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_FAIL, payload: error.message });
    }
  };               