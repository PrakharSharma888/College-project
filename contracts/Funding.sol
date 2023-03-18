pragma solidity ^0.8.0;

contract FundingProcess {
    address public partyA;
    address public partyB;
    string public govtOrgName;
    string public representativeName;
    uint public transferAmount;
    string public partyBAddress;
    bool public isApproved;
    uint public approvalCount;
    mapping(address => bool) public approvals;

    constructor(string memory _govtOrgName, string memory _representativeName, uint _transferAmount, string memory _partyBAddress) {
        partyA = msg.sender;
        govtOrgName = _govtOrgName;
        representativeName = _representativeName;
        transferAmount = _transferAmount;
        partyBAddress = _partyBAddress;
    }

    function approveFunding() public {
        require(msg.sender != partyA, "Party A cannot approve the funding.");
        require(!approvals[msg.sender], "Cannot approve more than once.");
        approvals[msg.sender] = true;
        approvalCount++;
    }

    function transferFunds() public {
        require(msg.sender == partyA, "Only Party A can initiate the transfer.");
        require(approvalCount > 0, "At least one approval is required.");
        require(!isApproved, "Funding has already been approved and transferred.");
        if (approvalCount > 1) {
            isApproved = true;
        }
        partyB = payable(address(bytes20(bytes(partyBAddress))));
        partyB.transfer(transferAmount);
    }
}
