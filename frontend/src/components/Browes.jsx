import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import Footer from "./shared/Footer";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto sm:my-20 px-4">
        <h1 className="font-bold text-lg sm:text-xl my-6">
          Search Results ({allJobs.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allJobs.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Browse;
