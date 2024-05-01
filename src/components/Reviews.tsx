import { FC, useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { ReviewItem } from "../models/ReviewItem";

const reviews: ReviewItem[] = [
  {
    username: "Emily S",
    rating: 5,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My exprience with this product is very good",
  },
  {
    username: "James",
    rating: 4,
    review:
      "I am satisfied with the value for money of the product. Everything seems nice but the delivery time seems a bit delayed",
  },
  {
    username: "Sophia",
    rating: 3,
    review:
      "I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money",
  },
  {
    username: "Ethan",
    rating: 4,
    review:
      "Absolutely love the quality and design!",
  },
  {
    username: "Olivia",
    rating: 3,
    review:
      "The quality could have been better. I feel like wasting my money. I should have been more careful while buying it",
  },
  {
    username: "Jacob",
    rating: 5,
    review:
      "Exactly as described, exceeded my expectations!",
  },
  {
    username: "Nancy",
    rating: 4,
    review:
      "Prompt delivery and top-notch packaging",
  },
  {
    username: "William",
    rating: 3,
    review:
      "Superb product, couldn't be happier with my purchase",
  },
  {
    username: "Noah",
    rating: 4,
    review:
      "Easy to use and stylish, definitely worth it",
  },
  {
    username: "Orihime",
    rating: 3,
    review:
      "Impressed with the durability and functionality",
  },
];

const getShuffledArr = () => {
  const arr: ReviewItem[] = [];
  const start = Math.floor(Math.random() * 4);
  for (let index = start; index < start + 5; index++) {
    arr.push(reviews[index]);
  }
  return arr;
};

const Reviews: FC<{ id: number }> = ({ id }) => {
  const [items, setItems] = useState<ReviewItem[]>([]);

  useEffect(() => {
    const _arr = getShuffledArr();
    setItems(_arr);
  }, [id]);

  return (
    <div className="px-2">
      <h1 className="text-2xl font-semibold mb-2">Reviews</h1>
      <div className="space-y-2">
        {items?.map(({ username, rating, review }) => (
          <div key={username} className="leading-4" data-test="review-item">
            <h3 className="font-semibold text-md">{username}</h3>
            <RatingStar rating={rating} />
            <p className="text-sm leading-4">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
