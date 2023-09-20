import React from "react";
import WhiteDiv from "./WhiteDiv";
import OrangeDiv from "./OrangeDiv";

const WhiteRedDashboard = () => {
  return (
    <div>
      <div class="mx-auto max-w-custom px-4 mb-40 grid lg:grid-cols-2 gap-4">
      <OrangeDiv/>
        <WhiteDiv/>
       
        
      </div>
    </div>
  );
};

export default WhiteRedDashboard;
