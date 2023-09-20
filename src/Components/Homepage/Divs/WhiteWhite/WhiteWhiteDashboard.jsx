import React from "react";
import WhiteOneDiv from "./WhiteOneDiv";
import WhiteTwoDiv from "./WhiteTwoDiv";

const WhiteRedDashboard = () => {
  return (
    <div>
      <div class="mx-auto max-w-custom px-4 mb-40 grid lg:grid-cols-2 gap-4">
        <WhiteOneDiv/>
        <WhiteTwoDiv/>
        
      </div>
    </div>
  );
};

export default WhiteRedDashboard;
