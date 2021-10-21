pragma solidity ^0.8.9;

// SPDX-License-Identifier: UNLICENSED
contract Bounties {

    enum BountyStatus { CREATED, ACCEPTED, CANCELLED }

    struct Bounty {
            address issuer;
            uint deadline;
            string data;
            BountyStatus status;
            uint amount;
        }

    Bounty[] public bounties;

    constructor(){}

    function issueBounty(
        string memory _data,
        uint64 _deadline
    )

    public payable hasValue() validateDeadline(_deadline) returns (uint)
    {
        bounties.push(Bounty(msg.sender, _deadline, _data,
        BountyStatus.CREATED, msg.value));
        emit BountyIssued(bounties.length - 1,msg.sender, msg.value, _data);
        return (bounties.length - 1);
    }

    modifier validateDeadline(uint _newDeadline) {
        require(_newDeadline > block.timestamp);
        _;
    }

    modifier hasValue() {
        require(msg.value > 0);
        _;
    }

    event BountyIssued(uint bounty_id, address issuer, uint amount, string data);
}