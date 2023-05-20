import React, { useState } from 'react';
import Modal from 'react-modal';

function AllProposals({ formData }) {
  const [proposals, setProposals] = useState(formData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState('');
  const [declineIndex, setDeclineIndex] = useState(null);

  const handleAccept = (index) => {
    const updatedProposals = [...proposals];
    updatedProposals.splice(index, 1);
    setProposals(updatedProposals);

    alert('Funding Initiated');
  };

  const handleDecline = (index) => {
    setIsModalOpen(true);
    setDeclineIndex(index);
  };

  const handleSubmitDecline = () => {
    if (declineReason && declineIndex !== null) {

      const updatedProposals = [...proposals];
      updatedProposals.splice(declineIndex, 1);
      setProposals(updatedProposals);

      alert('Funding declined');

      console.log('Reason for declining:', declineReason);

      setDeclineReason('');
      setIsModalOpen(false);
      setDeclineIndex(null);
    }
  };

  return (
    <div>
      {proposals.length > 0 ? (
        proposals.map((entry, index) => (
          <div key={index} className="card d-inline-flex m-3">
            <div className="card-header">{entry[0]}</div>
            <div className="card-body justify-content-center">
              <p className="card-text">Government Organization: {entry[1]}</p>
              <p className="card-text">Transfer Amount: {entry[2]}</p>
              <p className="card-text">Party B Address: {entry[3]}</p>
              <a href="#" onClick={() => handleAccept(index)} className="btn btn-primary m-2">Accept</a>
              <a href="#" onClick={() => handleDecline(index)} className="btn btn-primary m-2">Decline</a>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-center">No Pending Proposals</h1>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-dialog modal-dialog-centered"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px'
          }
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Decline Reason</h5>
            <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
          </div>
          <div className="modal-body">
            <textarea
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              className="form-control p-3 m-2"
              rows="4"
              placeholder="Enter reason for decline..."
            ></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary m-2" onClick={() => setIsModalOpen(false)}>Close</button>
            <button type="button" className="btn btn-danger m-2" onClick={handleSubmitDecline}>Submit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AllProposals;
