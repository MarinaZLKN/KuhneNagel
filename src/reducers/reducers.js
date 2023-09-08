import {DELETE_SHIPMENT, SHOW_SHIPMENTS, UPDATE_SHIPMENT} from "../actions/actions";

const initialState = {
  shipments: [],
  editedShipment: null,
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
    case UPDATE_SHIPMENT:
      const updatedShipments = state.shipments.map((shipment) =>
        shipment.orderNo === action.payload.orderNo ? action.payload : shipment
      );
      return {
        ...state,
        shipments: updatedShipments,
        editedShipment: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
