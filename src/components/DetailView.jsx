import React, { useState } from 'react';
import './DetailView.css';


const DetailView = ({ shipment, handleBack, handleUpdate }) => {

  const [editedShipment, setEditedShipment] = useState({ ...shipment });

  const handleChange = (event, field) => {
    const updatedShipment = { ...editedShipment, [field]: event.target.value };
    setEditedShipment(updatedShipment);
  };


  //TODO better css for this page, also add a proper logic for UPDATE action
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
                  onChange={(e) => handleChange(e, "date'")}
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

      <button>Save</button>
      <button onClick={handleBack}>Back to Table</button>
    </div>
  );
};

export default DetailView;