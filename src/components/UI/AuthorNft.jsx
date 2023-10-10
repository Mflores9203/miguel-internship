import React from "react";
import { Link } from "react-router-dom";

const AuthorNft = ({authorData, authorImg, authorId}) => {
  return (
    <div key={authorData?.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="nft__item">
        <div className="author_list_pp">
          <Link to={`/author/${authorData?.authorId || authorId}`}>
            <img className="lazy" src={authorImg} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button> 
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <Link to="/item-details">
            <img src={authorData?.nftImage} className="lazy nft__item_preview" alt="" />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{authorData?.title}</h4>
          </Link>
          <div className="nft__item_price">{authorData?.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{authorData?.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorNft;
