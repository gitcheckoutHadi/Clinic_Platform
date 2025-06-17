import { useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationProvider } from "./contexts/RegistrationContext";

import { Outlet } from "react-router-dom";
import {
  ContentContainer,
  ContentSignUpContainer,
  MainContainer,
  MainSignUpContainer,
  MainViewContentContainer,
  SidebarContainer,
  SignUpSidebarContainer,
} from "./App.style";
import PatientsList from "./views/patientsList/PatientsList";
import PageHeader from "./components/pageHeader/PageHeader";
import Appointments from "./views/Appiontntments/Appiontntments";
import TreatmentCycleManagement from "./views/TreatmentCycleManagement/TreatmentCycleManagement";
import Payments from "./views/payments/Payments";
import PaymentDetail from "./views/paymentDetail/PaymentDetail";
import IdPatientView from "./views/patientsList/IdView/IdView";
import SignUpSidebar from "./components/signupSidebar/SignUpSidebar";
import Settings from "./views/Settings/Settings";
import SettingEditUser from "./views/SettingEditUser/SettingEditUser";
import { useRecoilState } from "recoil";
import { languageState } from "./recoil/RecoilStates";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import SideBar from "./components/SideBarV2/SideBar";
import TestComps from "./views/TestComps/TestComps";
import Dashboard from "./views/dashboard/main/Dashboard";
import Login from "./views/Login/Login";
import EditPatientProfile from "./views/patientsList/editV2/edit";
import AddUser from "./views/Settings/AddUser/AddUser";
import ClinicProfile from "./views/Settings/clinicProfile/ClinicProfile";
import ClinicEditProfile from "./views/Settings/ClinicEditProfile/main/ClinicEditProfile";
import AddPatient from "./views/patientsList/add/AddPatient";
import Organization from "./views/Organization/main/Organization";

const OriginalLayout = () => {
  return (
    <MainViewContentContainer>
      <PageHeader />
      <MainContainer>
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </MainContainer>
    </MainViewContentContainer>
  );
};
const SignUpLayout = () => {
  return (
    <MainSignUpContainer>
      <SignUpSidebarContainer>
        <SignUpSidebar />
      </SignUpSidebarContainer>
      <ContentSignUpContainer>
        <Outlet />
      </ContentSignUpContainer>
    </MainSignUpContainer>
  );
};
function App() {
  const [language] = useRecoilState(languageState);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  return (
    <RegistrationProvider>
      <BrowserRouter>
        <GlobalStyle />
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route element={<OriginalLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/PatientsList" element={<PatientsList />} />
              <Route path="/PatientsList/AddPatient" element={<AddPatient />} />
              <Route
                path="/PatientsList/edit/:id"
                element={<EditPatientProfile />}
              />{" "}
              <Route
                path="/PatientsList/view/:id"
                element={<IdPatientView />}
              />
              <Route path="/Organization" element={<Organization />} />
              <Route path="/Appointments" element={<Appointments />} />
              <Route
                path="/TreatmentCycleManagement"
                element={<TreatmentCycleManagement />}
              />
              <Route path="/Payments&Renewals" element={<Payments />} />
              <Route
                path="/Payments&Renewals/view/:id"
                element={<PaymentDetail />}
              />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Settings/AddUser" element={<AddUser />} />
              <Route path="/Settings/edit/:id" element={<SettingEditUser />} />
              <Route
                path="Settings/ClinicEditProfile"
                element={<ClinicEditProfile />}
              />
              <Route path="/TestComps" element={<TestComps />} />
            </Route>
            <Route element={<SignUpLayout />}></Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Login />} />
            {/* <Route path="signUpProgress" element={<SignUpProgress/>}/> */}
          </Routes>
        </I18nextProvider>
      </BrowserRouter>
    </RegistrationProvider>
  );
}

export default App;
