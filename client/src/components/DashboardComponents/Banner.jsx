import React from "react";
// import avatar from "assets/img/avatars/avatar11.png";
import banner from "./banner.png"; 
import Card from "./components/card";
import General from "./General";

const Banner = () => {
  return (
    <div className="div-carduser" style={{padding: '20%',paddingRight: '20%',paddingTop:'3%',paddingBottom:'10%' ,backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed' ,background: 'linear-gradient(110.84deg, #fef3e8 1.01%, #bfebf4 102.07%)'}}>
      <Card extra={"items-center w-full h-full p-[16px] bg-cover"} style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          {/* <img className="h-full w-full rounded-full" src={avatar} alt="" /> */}
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Adela Parkson
        </h4>
        <p className="text-base font-normal text-gray-600">Product Manager</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </Card>
    <div className="generalinfo" style={{paddingTop:'10%'}}>
    <General/>
    </div>
    
    </div>
    
  );
};

export default Banner;
