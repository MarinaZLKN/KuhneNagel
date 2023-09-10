import {
  DELETE_SHIPMENT,
  deleteShipment, fetchShipments,
  SHOW_SHIPMENTS, showShipments,
  UPDATE_SHIPMENT,
  updateShipment
} from "./src/actions/actions";
import mockAxios from "jest-mock-axios";

//Tests for the API requests

describe('fetchShipments action', () => {
  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  describe('when API call is successful', () => {
    it('should dispatch SHOW_SHIPMENTS', async () => {
      const mockData = [
        { orderNo: "kk-275651-64476049-3346442",
          date: "8/20/2019",
          customer: "Triumph Bancorp, Inc.",
          trackingNo: "TP-011637-13598236-2700556",
          status: "'Delivered'",
          consignee: "Celsius Holdings, Inc."
        },
        { orderNo: "kl-235651-64476039-3346442",
          date: "12/20/2014",
          customer: "Triumph Bancorp, Inc.",
          trackingNo: "TP-022637-13598236-2700556",
          status: "'Not delivered'",
          consignee: "Celsius Holdings, Inc."},
        ];

      mockAxios.get.mockResolvedValueOnce({data: mockData});

      const dispatch = jest.fn();

      await fetchShipments()(dispatch);

      expect(mockAxios.get).toHaveBeenCalledWith('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
      expect(dispatch).toHaveBeenCalledWith({ type: SHOW_SHIPMENTS, payload: mockData });
    });
  });

  describe('when API call fails', () => {
    it('should log an error', async () => {
      const errorMessage = "Network Error";

      const consoleErrorSpy = jest.spyOn(console, 'error');

      mockAxios.get.mockRejectedValueOnce(new Error(errorMessage));

      const dispatch = jest.fn();

      await fetchShipments()(dispatch);

      expect(mockAxios.get).toHaveBeenCalledWith('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});

jest.spyOn(console, 'error').mockImplementation(() => {});

describe('deleteShipment action', () => {
  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  describe('when API call is successful', () => {
    it('should dispatch DELETE_SHIPMENT', async () => {
      const orderNo = 'kk-275651-64476049-3346442';
      const mockData = { message: 'Shipment deleted successfully' };

      mockAxios.delete.mockResolvedValueOnce({ data: mockData });

      const dispatch = jest.fn();

      await deleteShipment(orderNo)(dispatch);

      expect(mockAxios.delete).toHaveBeenCalledWith(`https://my.api.mockaroo.com/shipments.json/${orderNo}?key=5e0b62d0`);
      expect(dispatch).toHaveBeenCalledWith({ type: DELETE_SHIPMENT, payload: mockData });
    });
  });

  describe('when API call fails', () => {
    it('should log an error', async () => {
      const orderNo = 'kk-275651-64476049-3346442';
      const errorMessage = "Network Error";

      const consoleErrorSpy = jest.spyOn(console, 'error');

      mockAxios.delete.mockRejectedValueOnce(new Error(errorMessage));

      const dispatch = jest.fn();

      await deleteShipment(orderNo)(dispatch);

      expect(mockAxios.delete).toHaveBeenCalledWith(`https://my.api.mockaroo.com/shipments.json/${orderNo}?key=5e0b62d0`);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});


describe("updateShipment action", () => {
  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  describe("when API call is successful", () => {
    it("should dispatch UPDATE_SHIPMENT", async () => {
      const updatedShipment = {
        orderNo: "kk-275651-64476049-3346442",
        date: "8/20/2019",
        customer: "Triumph Bancorp, Inc.",
        trackingNo: "TP-011637-13598236-2700556",
        status: "'Delivered'",
        consignee: "Celsius Holdings, Inc."

      };
      const mockData = {
        message: "Shipment updated successfully",
      };

      mockAxios.put.mockResolvedValueOnce({ data: mockData });

      const dispatch = jest.fn();

      await updateShipment(updatedShipment)(dispatch);

      expect(mockAxios.put).toHaveBeenCalledWith(
        `https://my.api.mockaroo.com/shipments.json/${updatedShipment.orderNo}?key=5e0b62d0`,
        updatedShipment
      );
      expect(dispatch).toHaveBeenCalledWith({ type: UPDATE_SHIPMENT, payload: mockData });
    });
  });

  describe("when API call fails", () => {
    it("should log an error", async () => {
      const updatedShipment = {
        orderNo: "kk-275651-64476049-3346442",
        date: "8/20/2019",
        customer: "Triumph Bancorp, Inc.",
        trackingNo: "TP-011637-13598236-2700556",
        status: "'Delivered'",
        consignee: "Celsius Holdings, Inc."
      };
      const errorMessage = "Network Error";

      const consoleErrorSpy = jest.spyOn(console, "error");

      mockAxios.put.mockRejectedValueOnce(new Error(errorMessage));

      const dispatch = jest.fn();

      await updateShipment(updatedShipment)(dispatch);

      expect(mockAxios.put).toHaveBeenCalledWith(
        `https://my.api.mockaroo.com/shipments.json/${updatedShipment.orderNo}?key=5e0b62d0`,
        updatedShipment
      );
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});

//Tests for the .json file actions

// describe('showShipments action creator', () => {
//   it('should return an action to show shipments', () => {
//     const mockShipments = [
//       {
//         orderNo: '123',
//         date: '2021-01-01',
//         customer: 'Customer1',
//         trackingNo: 'tracking123',
//         status: 'In Transit',
//         consignee: 'Consignee1'
//       },
//     ];
//
//     const expectedAction = {
//       type: SHOW_SHIPMENTS,
//       payload: mockShipments,
//     };
//
//     expect(showShipments(mockShipments)).toEqual(expectedAction);
//   });
// });
//
//
// describe('deleteShipment action creator', () => {
//   it('should return an action to delete a shipment', () => {
//     const mockOrderNo = 'kk-275651-64476049-3346442';
//
//     const expectedAction = {
//       type: DELETE_SHIPMENT,
//       payload: mockOrderNo,
//     };
//
//     expect(deleteShipment(mockOrderNo)).toEqual(expectedAction);
//   });
// });
//
// describe('updateShipment action creator', () => {
//   it('should return an action to update a shipment', () => {
//     const mockUpdatedShipment = {
//       orderNo: 'kk-275651-64476049-3346442',
//       name: 'Updated Shipment',
//     };
//
//     const expectedAction = {
//       type: UPDATE_SHIPMENT,
//       payload: mockUpdatedShipment,
//     };
//
//     expect(updateShipment(mockUpdatedShipment)).toEqual(expectedAction);
//   });
// });
