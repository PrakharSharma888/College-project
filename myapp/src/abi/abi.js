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
		"outputs": [],
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

export default {abi}