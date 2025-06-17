import {
  SvgActiveOrg,
  SvgAdmin,
  SvgAppointments,
  SvgDownload,
  SvgOrganisation,
  SvgPatients,
  SvgPayment,
  SvgSettings,
  SvgTreatment,
} from "../../elements/Icons";

export interface SidebarDataInterface {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
  stroke?: boolean; // Optional stroke
  fill?: boolean;
  activeIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const SidebarData: SidebarDataInterface[] = [
  { icon: SvgAdmin, label: "Admin Panel", path: "dashboard" },

  { icon: SvgPatients, label: "Patients List", path: "PatientsList" },
  {
    icon: SvgOrganisation,
    label: "Organization",
    path: "Organization",
    activeIcon: SvgActiveOrg,
  },
  {
    icon: SvgTreatment,
    label: "Treatment Cycle Management",
    path: "TreatmentCycleManagement",
  },
  // { icon: SvgDownload, label: "Export", path: "Export" },

  { icon: SvgAppointments, label: "Appointments", path: "Appointments" },
  { icon: SvgPayment, label: "Payment & Renewals", path: "Payments&Renewals" },
  {
    icon: SvgSettings,
    label: "Settings & Administration",
    path: "Settings",
  },
];
