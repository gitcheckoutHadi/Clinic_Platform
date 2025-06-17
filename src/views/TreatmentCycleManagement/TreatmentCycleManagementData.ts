export interface EggFreezingInterface {
  TreatmentDay: Date;
  LMPDate: Date;
  Progress: number;
}

export interface ProgressInfoInterface {
  title: string;
  progress: number;
  startDate: Date;
  endDate: Date;
}
export const EggFreezingData: EggFreezingInterface = {
  TreatmentDay: new Date(2025, 0, 3, 1, 30),
  LMPDate: new Date(2025, 1, 3, 14, 30),
  Progress: 2,
};

export const ProgressData: ProgressInfoInterface[] = [
  {
    title: "Baseline Phase",
    progress: 63,
    startDate: new Date(2025, 0, 3, 1, 30),
    endDate: new Date(2025, 1, 3, 14, 30),
  },
  {
    title: "Stimulation Phase",
    progress: 0,
    startDate: new Date(2025, 0, 3, 1, 30),
    endDate: new Date(2025, 1, 3, 14, 30),
  },
  {
    title: "Monitoring Phase",
    progress: 50,
    startDate: new Date(2025, 0, 3, 1, 30),
    endDate: new Date(2025, 1, 3, 14, 30),
  },
];
