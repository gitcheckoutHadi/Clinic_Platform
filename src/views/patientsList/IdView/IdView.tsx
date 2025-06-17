import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PageFlex } from "../../../globalStyles";
import HeaderNavigator from "../../../elements/headerNavigator/HeaderNavigator";
import IdViewFirstPart from "./FirstPart/FirstPart";

import AppointmentHistory from "./AppointmentHistory/AppointmentHistory";
import TreatmentHistory from "./TreatmentHistory/TreatmentHistory";
import PaymentsDetails from "./PaymentsDetails/PaymentsDetails";
import PatientProfile from "./PatientProfile/PatientProfile";

const IdPatientView = () => {
  const { id } = useParams();
  const [JustAppointmentHistory, setJustAppointmentHistory] = useState(false);
  const [JustTreatmentHistory, setJustTreatmentHistory] = useState(false);
  const [JustPaymentsDetailsHistory, setJustPaymentsDetailsHistory] =
    useState(false);

  let content;

  switch (true) {
    case JustAppointmentHistory:
      content = (
        <AppointmentHistory
          showExpand={JustAppointmentHistory}
          setShowExpand={setJustAppointmentHistory}
          ExpandClick={() => setJustAppointmentHistory(!JustAppointmentHistory)}
        />
      );
      break;
    case JustTreatmentHistory:
      content = (
        <TreatmentHistory
          showExpand={JustTreatmentHistory}
          setShowExpand={setJustTreatmentHistory}
          ExpandClick={() => setJustTreatmentHistory(!JustTreatmentHistory)}
        />
      );
      break;
    case JustPaymentsDetailsHistory:
      content = (
        <PaymentsDetails
          id={id}
          showExpand={JustPaymentsDetailsHistory}
          setShowExpand={setJustPaymentsDetailsHistory}
          ExpandClick={() =>
            setJustPaymentsDetailsHistory(!JustPaymentsDetailsHistory)
          }
        />
      );
      break;
    default:
      content = (
        <PageFlex>
          <HeaderNavigator text="Patient Profile" />
          {/* <IdViewFirstPart id={id} /> */}
          <PatientProfile />
          <AppointmentHistory
            id={id}
            showExpand={JustAppointmentHistory}
            setShowExpand={setJustAppointmentHistory}
            ExpandClick={() =>
              setJustAppointmentHistory(!JustAppointmentHistory)
            }
          />
          <TreatmentHistory
            id={id}
            showExpand={JustTreatmentHistory}
            setShowExpand={setJustTreatmentHistory}
            ExpandClick={() => setJustTreatmentHistory(!JustTreatmentHistory)}
          />
          <PaymentsDetails
            id={id}
            showExpand={JustPaymentsDetailsHistory}
            setShowExpand={setJustPaymentsDetailsHistory}
            ExpandClick={() =>
              setJustPaymentsDetailsHistory(!JustPaymentsDetailsHistory)
            }
          />
          {/* <IdViewSecondPart id={id} />
          <PatientIdTreatmentTable id={id} /> */}
        </PageFlex>
      );
  }

  return content;
};

export default IdPatientView;
