import React from "react";
import {
  ProfileNotificationMainContainer,
  ProfileNotificationSVGContainer,
} from "./ProfileNotification.style";
import CircularImage from "../../../elements/circularImage/CircularImage";
import { MainPrf } from "../../../constants/Pics/Pics";

const ProfileNotification = () => {
  return (
    <ProfileNotificationMainContainer>
      <ProfileNotificationSVGContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="18"
          viewBox="0 0 15 18"
        >
          <path
            d="M14.7557 13.5255C14.355 12.9901 13.9849 12.2243 13.9848 11.3221L14.005 9.79511L14.0051 9.78447C14.0051 7.04545 12.2218 4.72557 9.73449 3.83719C9.968 3.45747 10.1112 3.01803 10.1112 2.54062C10.1112 1.12729 8.93171 0 7.49999 0C6.06827 0 4.8888 1.12729 4.8888 2.54062C4.8888 3.01983 5.03289 3.46083 5.2679 3.84153C2.82872 4.72435 1.08215 7.0038 1.07774 9.69423L1.05699 11.3117L1.05682 11.3218C1.05682 12.2064 0.678222 12.9628 0.259455 13.4993C-0.0723076 13.9246 -0.0422231 14.4412 0.107699 14.7949C0.258622 15.1507 0.64072 15.5777 1.25599 15.5777H4.12402C4.52279 17.0008 5.91918 18 7.49991 18C9.08064 18 10.4771 17.0008 10.8759 15.5777H13.7447C14.3498 15.5777 14.7323 15.1637 14.8869 14.8099C15.0405 14.4587 15.0735 13.9502 14.7557 13.5255ZM6.55554 2.54062C6.55554 2.05135 6.96797 1.63636 7.49999 1.63636C8.03201 1.63636 8.44444 2.05143 8.44444 2.54062C8.44444 3.02981 8.03209 3.44495 7.49999 3.44495C6.96789 3.44495 6.55554 3.02989 6.55554 2.54062ZM7.49999 16.3636C6.80205 16.3636 6.24202 16.0339 5.93185 15.5777H9.06822C8.75804 16.0339 8.19793 16.3636 7.49999 16.3636Z"
            fill="inherit"
          />
        </svg>
      </ProfileNotificationSVGContainer>
      <CircularImage size="2.5rem" src={MainPrf} />
    </ProfileNotificationMainContainer>
  );
};

export default ProfileNotification;
