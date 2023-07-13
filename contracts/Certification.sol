// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Certification {
    struct Certificate {
        uint artid;
        uint creatorid;
    }
    mapping(uint => Certificate) public certificates;

    event certificateGenerated(uint id);

    
    function generateCertificate(uint  _artid,uint  _creatorid) public {
        certificates[_artid]=Certificate(_artid,_creatorid);
        emit certificateGenerated(_artid);
    }

    function getData(uint _id) public view returns(bool ){
        Certificate memory temp = certificates[_id];
        if(temp.artid>0)
            return true;
        else return false;
    }
}