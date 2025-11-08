import React from "react";
import menCollectionImage from "../../assets/mens-collection.webp";
import womenCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col sm:flex-row  items-center justify-center gap-4 ">
        {/* women collection */}
        <div className="relative flex-1">
          <img
            src={womenCollectionImage}
            alt=" women's collection"
            className=" w-[500px] xl:w-full h-[350px] md:h-[400px] object-cover "
          />
          <div className="absolute bottom-8 left-8 bg-white p-4">
            <h2 className="text-xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              {" "}
              Shop Now{" "}
            </Link>
          </div>
        </div>
        {/* men collection */}
        <div className="relative flex-1">
          <img
            src={menCollectionImage}
            alt=" men's collection"
            className=" w-[500px] xl:w-full h-[350px] md:h-[400px] object-cover "
          />
          <div className="absolute bottom-8 left-8 bg-white p-4">
            <h2 className="text-xl font-bold text-gray-900 ">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
