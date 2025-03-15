import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Footer from "./shared/Footer";

const Jobs = () => {
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter((job) =>
        [job.title, job.description, job.location].some((field) =>
          field.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchQuery]); // Added dependencies

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar - Filter */}
          <div className="w-full md:w-1/4">
            <FilterCard />
          </div>

          {/* Job Listings */}
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            {filterJobs.length === 0 ? (
              <span className="text-gray-500">No jobs found</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -0.3 }}
                    transition={{ duration: 0.3 }}
                    key={job._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Jobs;
