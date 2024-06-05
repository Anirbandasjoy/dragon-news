import axios from "axios";
import { useEffect, useState } from "react";

import {
  AiFillEye,
  AiFillStar,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/news");
    setNewsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(newsData);
  return (
    <div className="space-y-5">
      {newsData.map((aNews) => {
        return (
          <div key={aNews.id} className=" border bg-base-100 ">
            <div className="mb-4 bg-gray-200 p-3 ">
              <div className="flex justify-between items-center">
                <div>
                  <img
                    className="w-10 rounded-full h-10"
                    src={aNews?.author_img}
                    alt=""
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <BsBookmark size={20} />
                  <AiOutlineShareAlt size={20} />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-left font-semibold my-4">{aNews?.title}</h1>
            </div>
            <figure>
              <img className="rounded-none" src={aNews?.image_url} alt="news" />
            </figure>
            <div className="p-2 mt-2">
              <p className="text-left text-gray-400">
                {aNews?.details?.length < 200
                  ? aNews?.length
                  : aNews?.details.slice(0, 200)}
                <Link
                  to={`/news-details/${aNews?.id}`}
                  className={` ${
                    aNews?.details.length < 200 && "hidden"
                  } ml-2 text-blue-600 font-semibold`}
                  state={aNews}
                >
                  Read_More
                </Link>
              </p>
            </div>
            <div className="text-left mt-5 border-t p-4 flex justify-between items-center">
              <div className="flex items-center text-gray-400   gap-2">
                <Rating
                  initialRating={aNews?.rating?.number}
                  emptySymbol={<AiOutlineStar size={22} />}
                  fullSymbol={<AiFillStar size={22} />}
                />

                <div>
                  <h2>{aNews?.rating?.number}</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <AiFillEye size={22} />
                <p>{aNews?.total_view}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
