import axios from "axios";

export const SHOW_SHIPMENTS = 'SHOW_SHIPMENTS';
export const DELETE_SHIPMENT = 'DELETE_SHIPMENT';
export const UPDATE_SHIPMENT = 'UPDATE_SHIPMENT';

//This part is responsible for API requests, but since I have only one endpoint for displaying the data on a visual part update and delete logic won't work
//below is the logic for working with .json file
export const updateShipment = (updatedShipment) => async (dispatch) => {
  try {
    const response = await axios.put(`https://my.api.mockaroo.com/shipments.json/${updatedShipment.orderNo}?key=5e0b62d0`, updatedShipment);
    dispatch({
      type: UPDATE_SHIPMENT,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error updating shipment:", error);
  }
};

export const deleteShipment = (orderNo) => async (dispatch) => {
  try {
    const url = `https://my.api.mockaroo.com/shipments.json/${orderNo}?key=5e0b62d0`;
    const response = await axios.delete(url);
    dispatch({
      type: DELETE_SHIPMENT,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error deleting shipment:", error);
  }
};

export const fetchShipments = () => async (dispatch) => {
  try {
    const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
    const data = response.data;
    dispatch({
      type: SHOW_SHIPMENTS,
      payload: data
    });
  } catch (error) {
    console.error("Error in actions/endpoint:", error);
  }
};

//This logic is responsible for working with .json file - you will see the result on visual part


//
// export const showShipments = (shipments) => ({
//   type: SHOW_SHIPMENTS,
//   payload: shipments,
// });
//
//
// export const updateShipment = (updatedShipment) => ({
//   type: UPDATE_SHIPMENT,
//   payload: updatedShipment,
// });
//
// export const deleteShipment = (orderNo) => ({
//   type: DELETE_SHIPMENT,
//   payload: orderNo,
// });
//
// export const fetchShipments = () => async (dispatch) => {
//   try {
//     const response = await fetch('./shipments1.json');
//     const data = await response.json();
//     dispatch(showShipments(data));
//   } catch (error) {
//     console.error("Error in actions/json-file:", error);
//   }
// };
//
