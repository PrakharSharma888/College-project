import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Proposal({ sendFormDataToParent, handleSubmit }) {
  const [formDataEntries, setFormDataEntries] = useState([]);
  const [RepName, setRName] = useState("");
  const [govtOrgNameValue, setgovtOrgName] = useState("");
  const [transferAmountValue, settransferAmount] = useState("");
  const [partyBAddressValue, setpartyBAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);



  async function handleClick2(e) {
    e.preventDefault();

    let newFormDataEntry = [
      RepName,
      govtOrgNameValue,
      transferAmountValue,
      partyBAddressValue
    ];

    sendFormDataToParent(newFormDataEntry);
    sendFormDataToParent([])

    setRName("");
    setgovtOrgName("");
    settransferAmount("");
    setpartyBAddress("");
    setSubmitting(true)

    handleSubmit()
  }

  useEffect(() => {
    if (submitting) {
      // You can send the form data to the server here if needed
      console.log('Representative Name:', RepName);
      console.log('Government Organization Name:', govtOrgNameValue);
      console.log('Transfer Amount:', transferAmountValue);
      console.log('Party B Address:', partyBAddressValue);
      setSubmitting(false); // Reset submitting state to false
    }
  }, [submitting, RepName, govtOrgNameValue, transferAmountValue, partyBAddressValue]);

  return (
    <div className="container">
      <h1 className="mb-4">Create Proposal for Funding</h1>
      <form onSubmit={handleClick2}>
        <div className="form-group">
          <label htmlFor="representativeName">Representative Name:</label>
          <input type="text" onChange={(e) => setRName(e.target.value)} className="form-control" id="representativeName" name="representativeName" required />
        </div>

        <div className="form-group">
          <label htmlFor="govtOrgName">Government Organization Name:</label>
          <input type="text" onChange={(e) => setgovtOrgName(e.target.value)} className="form-control" id="govtOrgName" name="govtOrgName" required />
        </div>

        <div className="form-group">
          <label htmlFor="transferAmount">Transfer Amount:</label>
          <input type="number" onChange={(e) => settransferAmount(e.target.value)} className="form-control" id="transferAmount" name="transferAmount" required />
        </div>

        <div className="form-group">
          <label htmlFor="partyBAddress">Party B Address:</label>
          <input type="text" onChange={(e) => setpartyBAddress(e.target.value)} className="form-control" id="partyBAddress" name="partyBAddress" required />
        </div>

        <button type="submit" className="btn btn-success m-2">Submit</button>
      </form>
    </div>
  );
}

export default Proposal;
