// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract FundingProcess {
    address public partyA;
    address public partyB;
    uint public fee = 1 ether;
    uint public proposalId;
    mapping(address => bool) public approvals;
    struct transferDetails{
        address partyAAddress;
        string _govtOrgName;
        string _representativeName;
        uint _transferAmount;
        address _partyBAddress;
        bool isApproved;
        bool isTranfered;
        string transactionId;
    }

    mapping (uint => transferDetails) public fundTransfers;

    function approveFunding(uint _proposalId) public {
        require(msg.sender == fundTransfers[_proposalId]._partyBAddress, "You are not allowed to vote");
        require(!approvals[msg.sender], "Cannot approve more than once.");
        require(!fundTransfers[_proposalId].isApproved, "Already approved");
        approvals[msg.sender] = true;
        fundTransfers[_proposalId].isApproved = true;
    }

    function transferFunds(uint _proposalId, string memory _transactionId) public payable{
        require(msg.value > fee, "fees not much given");
        require(msg.sender == fundTransfers[_proposalId].partyAAddress, "Only Party A can initiate the transfer.");
        require(fundTransfers[_proposalId].isApproved, "Not approved yet");
        require(!fundTransfers[_proposalId].isTranfered, "Funding has already been approved and transferred.");
        fundTransfers[_proposalId].isTranfered = true;
        fundTransfers[_proposalId].transactionId = _transactionId;
    }

    function proposeFunding(string memory representativeName, string memory govtOrgName, uint transferAmount, address partyBAddress) public {
        transferDetails storage transfers = fundTransfers[proposalId];
        transfers.partyAAddress = msg.sender;
        transfers._representativeName = representativeName;
        transfers._govtOrgName = govtOrgName;
        transfers._transferAmount = transferAmount;
        transfers._partyBAddress = partyBAddress;
    }
}
