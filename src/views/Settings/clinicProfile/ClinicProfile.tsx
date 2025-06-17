import React from "react";
import {
  ClinicProfileView,
  DayRowClinicProfile,
  MainColumnClinicProfile,
  NormalColumnClinicProfile,
  SepLine,
  TimeColumnClinicProfile,
} from "./ClinicProfile.style";
import { CorrectClinicInfo } from "./ClinicProfileData";
import { RowInfoPatientProfileContainer } from "../../patientsList/IdView/PatientProfile/PatientProfile.style";
import TitleTextInfo from "../../../components/TitleTextInfo/TitleTextInfo";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

const ClinicProfile = () => {
  return (
    <MainColumnClinicProfile>
      <ClinicProfileView>
        <img src={CorrectClinicInfo.Prf} alt="Clinic Profile" />
      </ClinicProfileView>
      <RowInfoPatientProfileContainer>
        <TitleTextInfo title="Name" text={CorrectClinicInfo.Name} />
        <TitleTextInfo title="Email" text={CorrectClinicInfo.Email} />
        <TitleTextInfo
          title="Phone Number"
          text={CorrectClinicInfo.PhoneNumber}
        />
        <TitleTextInfo title="Website URL" text={CorrectClinicInfo.WebURL} />
        <TitleTextInfo
          title="Clinic Address"
          text={CorrectClinicInfo.Address}
        />
      </RowInfoPatientProfileContainer>
      <SepLine />
      <RowInfoPatientProfileContainer>
        {CorrectClinicInfo.Availabilities.map((item) => (
          <>
            {item.TimeSlots && item.TimeSlots.length > 0 && (
              <DayRowClinicProfile key={item.day}>
                <MediumTypography
                  color="#000"
                  fontWeight="400"
                  text={item.day}
                />
                <TimeColumnClinicProfile>
                  {item.TimeSlots.map((time) => (
                    <DayRowClinicProfile>
                      <MediumTypography
                        color="#a6a6a6"
                        text={time.start}
                        fontWeight="400"
                      />
                      <MediumTypography
                        color="#a6a6a6"
                        text={time.end}
                        fontWeight="400"
                      />
                    </DayRowClinicProfile>
                  ))}
                </TimeColumnClinicProfile>
              </DayRowClinicProfile>
            )}
          </>
        ))}
      </RowInfoPatientProfileContainer>
    </MainColumnClinicProfile>
  );
};

export default ClinicProfile;
