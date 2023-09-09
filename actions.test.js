import {
  DELETE_SHIPMENT,
  deleteShipment,
  SHOW_SHIPMENTS,
  showShipments,
  UPDATE_SHIPMENT,
  updateShipment
} from "./src/actions/actions";


describe('showShipments action creator', () => {
  it('should return an action to show shipments', () => {
    const mockShipments = [
      {
        orderNo: '123',
        date: '2021-01-01',
        customer: 'Customer1',
        trackingNo: 'tracking123',
        status: 'In Transit',
        consignee: 'Consignee1'
      },
    ];

    const expectedAction = {
      type: SHOW_SHIPMENTS,
      payload: mockShipments,
    };

    expect(showShipments(mockShipments)).toEqual(expectedAction);
  });
});


describe('deleteShipment action creator', () => {
  it('should return an action to delete a shipment', () => {
    const mockOrderNo = '123';

    const expectedAction = {
      type: DELETE_SHIPMENT,
      payload: mockOrderNo,
    };

    expect(deleteShipment(mockOrderNo)).toEqual(expectedAction);
  });
});

describe('updateShipment action creator', () => {
  it('should return an action to update a shipment', () => {
    const mockUpdatedShipment = {
      orderNo: '123',
      name: 'Updated Shipment',
    };

    const expectedAction = {
      type: UPDATE_SHIPMENT,
      payload: mockUpdatedShipment,
    };

    expect(updateShipment(mockUpdatedShipment)).toEqual(expectedAction);
  });
});