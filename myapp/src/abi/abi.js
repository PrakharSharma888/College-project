const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "partyBAddress",
				"type": "address"
			}
		],
		"name": "ProposalApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "repName",
				"type": "string"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "partyBAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "declineReason",
				"type": "string"
			}
		],
		"name": "ProposalDeclined",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "approveProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_repName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_governmentOrg",
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
			}
		],
		"name": "createProposal",
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
				"name": "_declineReason",
				"type": "string"
			}
		],
		"name": "declineProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllProposals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "repName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "governmentOrg",
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
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "declined",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "declineReason",
						"type": "string"
					}
				],
				"internalType": "struct ProposalContract.Proposal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposalCount",
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
		"name": "proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "repName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "governmentOrg",
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
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "declined",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "declineReason",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default abi