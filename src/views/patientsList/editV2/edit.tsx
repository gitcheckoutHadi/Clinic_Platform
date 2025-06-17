import React, { isValidElement, useEffect, useState } from "react";
import { PageFlex } from "../../../globalStyles";
import HeaderNavigator from "../../../elements/headerNavigator/HeaderNavigator";
import ShadowBox from "../../../components/ShadowBox/ShadowBox";
import TextInput from "../../../elements/Inputs/TextInput/TextInput";
import CountrySelector from "../../../elements/CountrySelector/CountrySelector";
import FormActions from "../../../components/FormActions/FormActions";
import { useParams } from "react-router-dom";
import NewTextBox from "../../../elements/Inputs/NewTextBox/NewTextBox";
import DOBPicker from "../../../elements/Inputs/DOB/DOB";
import PhoneNumber from "../../../elements/Inputs/PhoneNumber/PhoneNumber";
import { isValidInternationalPhoneNumber } from "../../../utils/ValidPhoneNumber";
import PatientForm from "../../../components/Forms/Patient/PatientForm";
import axios from "axios";

const EditPatientProfile = () => {
  const { id } = useParams();
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [DigitalCardNum, setDigitalCardNum] = useState<string>("");
  const [QrLink, setQrLink] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [SelectedCountry, setSelectedCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatientData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://rpslsxq6sc.execute-api.eu-west-1.amazonaws.com/dev/major/${id}`
      );

      const patientData = response.data.data;
      setFirstName(patientData.FirstName || "");
      setLastName(patientData.LastName || "");
      setEmail(patientData.Email || "");
      setPhoneNumber(patientData.PhoneNumber || "");
      setDigitalCardNum(patientData.DigitalCardNum || "");
      setQrLink(patientData.QrLink || "");
      setDOB(patientData.DOB || "");
      setSelectedCountry(patientData.SelectedCountry || null);
    } catch (err) {
      console.error("Error fetching patient data:", err);
      setError("Failed to fetch patient data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPatientData();
    }
  }, [id]);

  const handleSubmit = () => {
    // Implement form submission logic
  };

  return (
    <PageFlex>
      <HeaderNavigator text="Edit Profile" />
      <PatientForm
        handleSubmit={handleSubmit}
        data={{
          FirstName,
          setFirstName,
          LastName,
          setLastName,
          Email,
          setEmail,
          PhoneNumber,
          setPhoneNumber,
          DigitalCardNum,
          setDigitalCardNum,
          QrLink,
          setQrLink,
          DOB,
          setDOB,
          SelectedCountry,
          setSelectedCountry,
        }}
      />
    </PageFlex>
  );
};

export default EditPatientProfile;
