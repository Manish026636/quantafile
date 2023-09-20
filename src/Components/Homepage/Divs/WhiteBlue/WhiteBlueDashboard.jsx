import React from "react";
import WhiteDiv from "./WhiteDiv";
import BlueDiv from "./BlueDiv";

const WhiteBlueDashboard = () => {
  return (
    <div>
      <div class="mx-auto max-w-custom px-4 mb-40 grid lg:grid-cols-2 gap-4">
        <WhiteDiv/>
        <BlueDiv/>
        
      </div>
    </div>
  );
};

export default WhiteBlueDashboard;
