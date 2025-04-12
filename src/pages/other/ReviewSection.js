import React, { useEffect, useRef } from "react";
import { useState } from "react";

function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Review data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "assets/img/banner/reviewOne.png",
      rating: 5,
      text: "I absolutely love my Organic Cotton Tote Bag from Greenly! It's not only stylish but also eco-friendly. Knowing that I'm making a positive impact on the environment with each purchase makes me feel good about it. Highly recommend this sustainable accessory!",
    },
    // {
    //   id: 2,
    //   name: "Mark Anderson",
    //   avatar: "assets/img/banner/reviewTwo.png",
    //   rating: 5,
    //   text: "The Bamboo Toothbrushes from Greenly are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo. My oral care routine has never felt so sustainable. A big thank you to Greenly for offering such fantastic eco-friendly products!",
    // },
    // {
    //   id: 3,
    //   name: "Emily Lee",
    //   avatar: "assets/img/banner/reviewTwo.png",
    //   rating: 5,
    //   text: "I recently bought the Hemp Backpack from Greenly, and I must say it's a fantastic investment. The durability of the hemp material is impressive, and I feel good knowing I'm supporting sustainable manufacturing. This backpack is perfect for my outdoor adventures and daily commutes. Thanks a lot for eco-conscious design!",
    // },
    {
      id: 4,
      name: "Emily Lee",
      avatar: "assets/img/banner/reviewTwo.png",
      rating: 5,
      text: "I recently bought the Hemp Backpack from Greenly, and I must say it's a fantastic investment. The durability of the hemp material is impressive, and I feel good knowing I'm supporting sustainable manufacturing. This backpack is perfect for my outdoor adventures and daily commutes. Thanks a lot for eco-conscious design!",
    },
    {
      id: 5,
      name: "Emily Lee",
      avatar: "assets/img/banner/reviewTwo.png",
      rating: 5,
      text: "I recently bought the Hemp Backpack from Greenly, and I must say it's a fantastic investment. The durability of the hemp material is impressive, and I feel good knowing I'm supporting sustainable manufacturing. This backpack is perfect for my outdoor adventures and daily commutes. Thanks a lot for eco-conscious design!",
    },
  ];

  const containerRef = useRef(null);
  const CARD_WIDTH = 320;
  const VISIBLE_CARDS = 3;
  const autoPlayInterval = 4000; // 3 seconds
  const [index, setIndex] = useState(0);

  // Clone extra items for infinite loop illusion
  const extendedReviews = [
    ...reviews.slice(-VISIBLE_CARDS),
    ...reviews,
    ...reviews.slice(0, VISIBLE_CARDS),
  ];

  // Total offset
  const totalItems = extendedReviews.length;

  // Move container when index changes
  useEffect(() => {
    containerRef.current.style.transition = "transform 0.4s ease-in-out";
    containerRef.current.style.transform = `translateX(-${
      (index + VISIBLE_CARDS) * CARD_WIDTH
    }px)`;
  }, [index]);

  // Reset position instantly after the transition ends
  useEffect(() => {
    const container = containerRef.current;
    const handleTransitionEnd = () => {
      if (index >= reviews.length) {
        container.style.transition = "none";
        setIndex(0);
        container.style.transform = `translateX(-${
          VISIBLE_CARDS * CARD_WIDTH
        }px)`;
      } else if (index < 0) {
        container.style.transition = "none";
        setIndex(reviews.length - 1);
        container.style.transform = `translateX(-${
          (reviews.length - 1 + VISIBLE_CARDS) * CARD_WIDTH
        }px)`;
      }
    };

    container.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      container.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, reviews.length]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  return (
    <div className="review-section container">
      <button className="prev-btn" onClick={handlePrev}>
        &#10094;
      </button>

      {/* <h2 className="text-center service-header mb-4">Customer Reviews</h2> */}
      <div className="review-cards-wrapper">
        <div className="review-cards-container" ref={containerRef}>
          {extendedReviews.map((review, idx) => (
            <div className="review-card" key={idx}>
              <div className="card card-review">
                <div className="reviewer-info mt-3">
                  <img src={review.avatar} alt="avatar" className="avatar img-fluid" />
                  <div className="card-title">{review.name}</div>
                </div>
                <div className="review-text text-center mx-3">{review.text}</div>
                <div className="stars">{"★".repeat(review.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default ReviewSection;
