import {DELETE_SHIPMENT, SHOW_SHIPMENTS } from "../actions/actions";

const initialState = {
  shipments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SHIPMENTS:
      return { ...state, shipments: action.payload };
    case DELETE_SHIPMENT:
      return {
        ...state,
        shipments: state.shipments.filter(
          (shipment) => shipment.orderNo !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
