import React, {useEffect, useState} from 'react';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteShipment, fetchShipments } from '../actions/actions';
import DetailView from "./DetailView.jsx";

const Table = () => {
    const dispatch = useDispatch();
    const shipments = useSelector(state => state.shipments);
    const [selectedShipment, setSelectedShipment] = useState(null);

    useEffect(() => {
      dispatch(fetchShipments());
    }, [dispatch]);

    const handleDelete = (orderNo) => {
      dispatch(deleteShipment(orderNo));
    };

    const handleDetailView = (shipment) => {
      setSelectedShipment(shipment);
    };

    const handleBack = () => {
      setSelectedShipment(null);
    };

    console.log("Shipments data:", shipments);

    if (selectedShipment) {
      return (
        <DetailView shipment={selectedShipment} handleBack={handleBack} />
      );
    }

    return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ORDER NO</th>
            <th>DATE</th>
            <th>CUSTOMER</th>
            <th>TRACKING NO</th>
            <th>STATUS</th>
            <th>CONSIGNEE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment, index) => (
            <tr key={index}>
              <td>{shipment.orderNo}</td>
              <td>{shipment.date}</td>
              <td>{shipment.customer}</td>
              <td>{shipment.trackingNo}</td>
              <td>{shipment.status}</td>
              <td>{shipment.consignee}</td>
              <td>
                  <button className="btn-1" onClick={() => handleDetailView(shipment)}>Details</button>
                  <button className="btn" onClick={() => handleDelete(shipment.orderNo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;