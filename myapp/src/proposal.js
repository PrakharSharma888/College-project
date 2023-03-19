import React from 'react';
import './proposal.css'
import { useState, useEffect } from 'react';
import {ethers} from 'ethers';

function Proposal() {
    const [RepName, setRName] = useState("")
    const [govtOrgNameValue, setgovtOrgName] = useState("")
    const [transferAmountValue, settransferAmount] = useState("")
    const [partyBAddressValue, setpartyBAddress] = useState("")
    const [submitting, setSubmitting] = useState(false);

    const abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_proposalId",
                    "type": "uint256"
                }
            ],
            "name": "approveFunding",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "representativeName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "govtOrgName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "transferAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "partyBAddress",
                    "type": "address"
                }
            ],
            "name": "proposeFunding",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_proposalId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_transactionId",
                    "type": "string"
                }
            ],
            "name": "transferFunds",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "approvals",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "fundTransfers",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "partyAAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_govtOrgName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_representativeName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_transferAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_partyBAddress",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "isApproved",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isTranfered",
                    "type": "bool"
                },
                {
                    "internalType": "string",
                    "name": "transactionId",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "partyA",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "partyB",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "proposalId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    async function handleClick2(e){
        e.preventDefault();
        const {representativeName, govtOrgName, transferAmount, partyBAddress} = e.target
        setRName(representativeName.value)
        setgovtOrgName(govtOrgName.value)
        settransferAmount(transferAmount.value)
        setpartyBAddress(partyBAddress.value)
        setSubmitting(true); 

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
    
        // const wallet = new ethers.Wallet('2f2e01394617e46570c36ae592d159270affb94f7a3c5312293bb1a3e835e1a3', provider)
        const contract = new ethers.Contract('0x168b99799f6d1c245B1f71e5A0CAA915aFcE4917',abi,signer)

        const tx = await contract.proposeFunding(RepName,govtOrgNameValue,transferAmountValue, partyBAddressValue)
        await tx.wait()
        console.log("TX",tx);
        let id = await contract.proposalId();
        id = id.toString();
        if (id>0){
            
        alert("Submitted with proposal id : ",id)
        }
        else{
            
        }
    }

    useEffect(() => {
        if (submitting) {
          console.log(RepName); // You can send the form data to the server here
          setSubmitting(false); // Reset submitting state to false
        }
      }, [submitting, RepName]);
  return (
    <div>
    <h1>Create Proposal for Funding</h1>
    <form onSubmit={handleClick2}>
      <label htmlFor="representativeName">Representative Name:</label>
      <input type="text" id="representativeName" name="representativeName" required/><br/><br/>

      <label htmlFor="govtOrgName">Government Organization Name:</label>
      <input type="text" id="govtOrgName" name="govtOrgName" required/><br/><br/>

      <label htmlFor="transferAmount">Transfer Amount:</label>
      <input type="number" id="transferAmount" name="transferAmount" required/><br/><br/>

      <label htmlFor="partyBAddress">Party B Address:</label>
      <input type="text" id="partyBAddress" name="partyBAddress" required/><br/><br/>

      <input type="submit" value="Submit"/>
    </form>
    </div>
  );
}

export default Proposal;