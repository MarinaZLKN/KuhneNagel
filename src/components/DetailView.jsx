import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { updateShipment } from '../actions/actions';
import './DetailView.css';

const DetailView = ({ shipment, handleBack}) => {
    const dispatch = useDispatch();
    const [editedShipment, setEditedShipment] = useState({ ...shipment });

    const handleChange = (event, field) => {
      const updatedShipment = { ...editedShipment, [field]: event.target.value };
      setEditedShipment(updatedShipment);
    };
    console.log("Edited Shipment:", editedShipment);

    const handleSave = () => {
        dispatch(updateShipment(editedShipment));
    };

    return (
      <div className="detail-view">
          <h2>SHIPMENT DETAILS</h2>
          <div className="detail-row">
              <div className="label">Order No</div>
              <div className="data">
                <input
                  className="input"
                  type="text"
                  value={editedShipment.orderNo}
                  onChange={(e) => handleChange(e, "orderNo")}
                />
              </div>
          </div>
          <div className="detail-row">
              <div className="label">Date</div>
              <div className="data">
                <input
                  className="input"
                  type="text"
                  value={editedShipment.date}
                  onChange={(e) => handleChange(e, "date")}
                />
              </div>
          </div>
          <div className="detail-row">
              <div className="label">Customer</div>
              <div className="data">
                <input
                  className="input"
                  type="text"
                  value={editedShipment.customer}
                  onChange={(e) => handleChange(e, "customer")}
                />
              </div>
          </div>
          <div className="detail-row">
              <div className="label">Tracking No</div>
              <div className="data">
                <input
                  className="input"
                  type="text"
                  value={editedShipment.trackingNo}
                  onChange={(e) => handleChange(e, "trackingNo")}
                />
              </div>
          </div>
          <div className="detail-row">
              <div className="label">Status</div>
              <div className="data">
                <input
                  className="input"
                  type="text"
                  value={editedShipment.status}
                  onChange={(e) => handleChange(e, "status")}
                />
              </div>
          </div>
          <div className="detail-row">
              <div className="label">Consignee</div>
              <div className="data">
                <input
                  className="input"
                  type="text"
                  value={editedShipment.consignee}
                  onChange={(e) => handleChange(e, "consignee")}
                />
              </div>
          </div>

      <button className="btn-detail" onClick={() => handleSave()}>Save</button>
      <button id="back" className="btn-detail" onClick={handleBack}>Back to Table</button>
    </div>
  );
};

export default DetailView;