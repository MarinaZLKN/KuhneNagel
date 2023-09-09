import axios from "axios";

export const SHOW_SHIPMENTS = 'SHOW_SHIPMENTS';
export const DELETE_SHIPMENT = 'DELETE_SHIPMENT';
export const UPDATE_SHIPMENT = 'UPDATE_SHIPMENT';

export const showShipments = (shipments) => ({
  type: SHOW_SHIPMENTS,
  payload: shipments,
});


export const deleteShipment = (orderNo) => ({
  type: DELETE_SHIPMENT,
  payload: orderNo,
});


export const updateShipment = (updatedShipment) => ({
  type: UPDATE_SHIPMENT,
  payload: updatedShipment,
});



export const fetchShipments = () => async (dispatch) => {
  try {
    const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
    const data = response.data;
    dispatch(showShipments(data));
  } catch (error) {
    console.error("Error in actions/endpoint:", error);
  }
};

// export const fetchShipments = () => async (dispatch) => {
//   try {
//     const response = await fetch('./shipments1.json');
//     const data = await response.json();
//     dispatch(showShipments(data));
//   } catch (error) {
//     console.error("Error in actions/json-file:", error);
//   }
// };

//TODO i need an API docs for put and delete requests

// export const deleteShipment = (orderNo) => async (dispatch) => {
//   try {
//     const url = `https://my.api.mockaroo.com/shipments.json/${orderNo}?key=5e0b62d0`;
//     const response = await axios.delete(url);
//     dispatch({
//       type: 'DELETE_SHIPMENT',
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error deleting shipment:", error);
//     console.error("Error details:", error.response);
//   }
// };
//
//
//
// export const updateShipment = (updatedShipment) => async (dispatch) => {
//   try {
//     const response = await axios.put(`https://my.api.mockaroo.com/shipments.json/${updatedShipment.orderNo}?key=5e0b62d0`, updatedShipment);
//     dispatch({
//       type: UPDATE_SHIPMENT,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error updating shipment:", error);
//   }
// };