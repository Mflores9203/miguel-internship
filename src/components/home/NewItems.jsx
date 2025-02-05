import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Skeleton from "../UI/Skeleton";
import ExpiryDateNft from "../UI/ExpiryDateNft";

const NewItems = () => {
  const [newItem, setNewItem] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const url = `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`;
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function getNewItems() {
      const { data } = await axios.get(url);
      setNewItem(data);

      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }

    getNewItems();
  }, []);

  return (
    <section  data-aos="fade"
    data-aos-duration="1000" id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {loaded
              ? newItem.map((nft, index) => (
                  <div key={index}>
                    <ExpiryDateNft nft={nft}/>
                  </div>
                ))
              : new Array(4).fill(0).map((_, index) => (
                  <div className="" key={index}>
                    <div className="nft__item">
                      <div className="author_list_pp">
                      
                          <Skeleton
                            width={"50px"}
                            height={"50px"}
                            border-radius={"50%"}
                          />
                          <i className="fa fa-check"></i>
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

                          <Skeleton width={"100%"} height={"350px"} />
                        
                      </div>
                      <div className="nft__item_info">
                          <Skeleton width={"180px"} height={"30px"} />
                        <Skeleton width={"100px"} height={"20px"} />
                      </div>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;

function LeftArrow(props) {
  const { onClick } = props;
  return <ChevronLeftIcon className="arrow arrow__left" onClick={onClick} />;
}

function RightArrow(props) {
  const { onClick } = props;
  return <ChevronRightIcon className="arrow arrow__right" onClick={onClick} />;
}
