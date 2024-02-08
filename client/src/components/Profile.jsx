import React, { useEffect, useState } from "react";
// import avatar from "assets/img/avatars/avatar11.png";
import banner from "./DashboardComponents/banner.png";
import Card from "./DashboardComponents/components/card";
import General from "./DashboardComponents/General";
import { useAuth } from "./context/auth/AuthState";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../base";

const Profile = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState();

  async function getUserData() {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
      // console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getUserData();
  }, [currentUser]);

  return (
    <div
      className="div-carduser"
      style={{
        padding: "20%",
        paddingRight: "20%",
        paddingTop: "3%",
        paddingBottom: "10%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        background:
          "linear-gradient(110.84deg, #fef3e8 1.01%, #bfebf4 102.07%)",
      }}
    >
      <Card
        extra={"items-center w-full h-full p-[16px] bg-cover"}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
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
            {currentUser.displayName}
          </h4>
          {/* <p className="text-base font-normal text-gray-600">Product Manager</p> */}
        </div>

        {/* Post followers */}
        <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              {userData && userData.apiCalled}
            </p>
            <p className="text-sm font-normal text-gray-600">API Calls</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              {userData && userData.apiCalledSuccess}
            </p>
            <p className="text-sm font-normal text-gray-600">API Success</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              {userData && userData.apiCalledFails}
            </p>
            <p className="text-sm font-normal text-gray-600">API Fails</p>
          </div>
        </div>
      </Card>
      <div className="generalinfo" style={{ paddingTop: "40px" }}>
        {userData && <General apiKey={userData.apiKey}/>}
      </div>
    </div>
  );
};

export default Profile;
