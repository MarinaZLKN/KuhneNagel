import axios from "axios";

export const SHOW_SHIPMENTS = 'SHOW_SHIPMENTS';
export const DELETE_SHIPMENT = 'DELETE_SHIPMENT';



export const showShipments = (shipments) => ({
  type: SHOW_SHIPMENTS,
  payload: shipments,
});

export const deleteShipment = (orderNo) => ({
  type: DELETE_SHIPMENT,
  payload: orderNo,
});

export const fetchShipments = () => async (dispatch) => {
  try {
    const response = await fetch('./shipments1.json');
    const data = await response.json();
    dispatch(showShipments(data));
  } catch (error) {
    console.error("Error in actions:", error);
  }
};


// export const fetchShipments = () => async (dispatch) => {
//   try {
//     const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
//     const data = response.data;
//     console.log('action response: ', data);
//     dispatch(showShipments(data));
//   } catch (error) {
//     console.error("Error in actions:", error);
//   }
// };