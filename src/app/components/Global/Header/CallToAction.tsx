import React from "react";
import Search from "@/app/components/Global/Header/Search";
import Drawer from "@/app/components/Global/Header/Drawer";

const CallToAction = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <div>
        <button className="py-1 -mr-5 lg:-mr-0" aria-label="Search">
          <Search />
        </button>
      </div>
      <div className="block lg:hidden">
        <Drawer />
      </div>
    </div>
  );
};

export default CallToAction;
