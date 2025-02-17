import React from "react";
import styles, { layout } from "../style";
import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <div id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] "
        />
        <div className="w-[50%] h-[50%] rounded-full absolute z-[3] -left-1/2 top-0 white__gradient" />
        <div className="w-[50%] h-[50%] rounded-full absolute z-[0] -left-1/2 top-0 pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h4>
        <p className={`${styles.paragraph} max-w-[470px] md:mt-6 mt-6`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-wrap flex-row mt-6">
          <img
            src={apple}
            alt="apple__store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google__store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
