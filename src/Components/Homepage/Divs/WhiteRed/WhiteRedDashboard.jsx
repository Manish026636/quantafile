import React from "react";
import WhiteDiv from "./WhiteDiv";
import RedDiv from "./RedDiv";

const WhiteRedDashboard = () => {
  return (
    <div>
      <div class="mx-auto max-w-screen-lg px-4 mb-40 grid lg:grid-cols-2 gap-4">
        <WhiteDiv/>
        <RedDiv/>
        
      </div>
    </div>
  );
};

export default WhiteRedDashboard;
