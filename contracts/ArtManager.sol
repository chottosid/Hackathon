// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./BAMTaka.sol";

contract ArtManager {
    struct Artwork {
        string description;
        string image;//will treat as id
        uint256 price;
        uint256 quantity;
        address owner;
        uint256 creatorID;
        uint256 artID;
    }
    struct Buyer {
        address addr;
        uint id;
        BAMTaka btk;
    }
    Buyer[] public buyers;
    mapping(uint256 => Artwork) public artworks;
    uint256 public artworkCount;

    event ArtworkRegistered(uint256 artworkId);
    event ArtworkUpdated(uint256 artworkId);
    event ArtworkOwnershipTransferred(uint256 artworkId, address newOwner);
    event ArtworkDelivered(uint256 artworkId);
    event BuyerGenerated(uint money);
    function registerArtwork(string memory _description, string memory _image, uint256 _price, uint256 _quantity,uint256 _aid,uint256 _cid) public {
        artworkCount++;
        artworks[_aid] = Artwork({
            description: _description,
            image: _image,
            price: _price,
            quantity: _quantity,
            owner: msg.sender,
            creatorID: _cid,
            artID:_aid
        });

        emit ArtworkRegistered(artworkCount);
    }
    function registerBuyer(uint _id) external {
        BAMTaka bt=new BAMTaka();
        Buyer memory temp=Buyer(msg.sender,_id,bt);
        buyers.push(temp);
    }
    function updateArtwork(uint256 _artworkId, string memory _description, string memory _image, uint256 _price, uint256 _quantity) public {
        require(artworks[_artworkId].quantity>0,"REG FIRST");
        Artwork storage artwork = artworks[_artworkId];
        require(msg.sender == artwork.owner, "Only the owner can update the artwork");
        artwork.description = _description;
        artwork.image = _image;
        artwork.price = _price;
        artwork.quantity = _quantity;
        emit ArtworkUpdated(_artworkId);
    }

    function transferArtworkOwnership(uint256 _artworkId, uint newowner)  payable public  {
        Artwork storage artwork = artworks[_artworkId];
        require(msg.sender == artwork.owner, "Only the owner can transfer ownership");
        uint i;
        bool isfound=false;
        for(i=0;i<buyers.length;i++){
            if(buyers[i].id==newowner){
                isfound=true;
                break;
            }
        }
        if(isfound==true){
            //buyers[i].btk.approve(buyers[i].addr,buyers[i].btk.totalSupply());
            buyers[i].btk.transfer(artwork.owner,artwork.price);
            emit ArtworkOwnershipTransferred(_artworkId,buyers[i].addr);
        }
    }

    function deliverArtwork(uint256 _artworkId) public {
        require(artworks[_artworkId].quantity>0,"REG FIRST");
        Artwork storage artwork = artworks[_artworkId];
        require(msg.sender == artwork.owner, "Only the owner can mark the artwork as delivered");
        emit ArtworkDelivered(_artworkId);
    }
    

}
