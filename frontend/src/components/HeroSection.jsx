import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";

const HeroSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center px-4 mt-40">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm sm:text-base">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Search, Apply & <br className="hidden sm:block" /> Get Your{" "}
          <span className="text-indigo-700">Dream Jobs</span>
        </h1>
        <p className="text-sm sm:text-base max-w-xl mx-auto px-2">
          Find and apply for the best job opportunities that match your skills and career goals—all in one place.
        </p>
        <div className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-2 sm:gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-sm sm:text-base px-2 py-2"
          />
          <Button
            onClick={searchHandler}
            className="rounded-r-full bg-indigo-700 px-3 sm:px-4 py-2 sm:py-3"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
