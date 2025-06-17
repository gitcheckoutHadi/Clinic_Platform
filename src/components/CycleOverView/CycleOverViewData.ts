import { Prf1 } from "../../constants/Pics/Pics";
import { ChartDataItem } from "../Charts/MultiSeriesRadialBarChart/MultiSeriesRadialBarChart";

export interface CycleOverviewInterface {
  PatientId: string;
  PatientName: string;
  PatientProfile?: string;
  EggFreezing: ChartDataItem[];
}

export const CycleOverviewData: CycleOverviewInterface[] = [
  {
    PatientId: "dfrgtyhgtfrdxsafdsa",
    PatientName: "Marwa Soso",
    PatientProfile: Prf1,
    EggFreezing: [
      { label: "OOC", value: 50 },
      { label: "Zygote", value: 60 },
      { label: "sperm", value: 70 },
      { label: "Embryo", value: 55 },
    ],
  },
  {
    PatientId: "dgfdeswehtrfd",
    PatientName: "Amar Said",
    PatientProfile: Prf1,
    EggFreezing: [
      { label: "OOC", value: 40 },
      { label: "Zygote", value: 50 },
      { label: "sperm", value: 85 },
      { label: "Embryo", value: 73 },
    ],
  },
  {
    PatientId: "yhtgr4e3wsa",
    PatientName: "Sara El-Ashour",
    PatientProfile: Prf1,
    EggFreezing: [
      { label: "OOC", value: 20 },
      { label: "Zygote", value: 80 },
      { label: "sperm", value: 90 },
      { label: "Embryo", value: 89 },
    ],
  },
  {
    PatientId: "ghyt6trfdewy65t",
    PatientName: "Ferial El-Hassan",
    PatientProfile: Prf1,
    EggFreezing: [
      { label: "OOC", value: 70 },
      { label: "Zygote", value: 90 },
      { label: "sperm", value: 100 },
      { label: "Embryo", value: 55 },
    ],
  },
];
