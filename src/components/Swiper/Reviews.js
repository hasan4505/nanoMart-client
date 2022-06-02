import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import useReviews from "../../hooks/useReviews";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews, isLoading] = useReviews();

  const reversedReviews = [...reviews].reverse();

  let stars;

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Swiper
            onSwiper={setSwiperRef}
            autoHeight={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            centeredSlides={true}
            spaceBetween={0}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <div>
              {reversedReviews.map(
                ({ user, name, rating, review_, picture }) => (
                  <SwiperSlide className="pb-5 pt-2" key={review_?._id}>
                    <div class="card lg:card-top bg-teal-200 rounded-full max-h-50 items-center text-center">
                      <figure class="px-10 pt-10">
                        <img
                          className="w-24 mask mask-hexagon items-center text-center"
                          src={picture}
                          alt={user}
                        />
                      </figure>
                      <div class="card-body items-center text-center">
                        <div
                          className="flex justify
                        
                        
                        -center my-3"
                        >
                          <div className="d-none">
                            {rating
                              ? (stars = new Array(rating).fill(0))
                              : null}
                          </div>
                          <div>
                            {rating &&
                              stars.map((star) => (
                                <FontAwesomeIcon
                                  className="text-danger mx-2"
                                  icon={faStar}
                                />
                              ))}
                          </div>
                        </div>
                        <i className="review text-muted">{review_}</i>
                        <h5 className="ms-3 mb-0 user"> {user}</h5>

                        <div class="card-actions">
                          <button class="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </div>
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Reviews;
