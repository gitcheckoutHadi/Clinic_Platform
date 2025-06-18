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
    title: "Initial Assessment",
    progress: 75,
    startDate: new Date(2025, 0, 2, 9, 0), // Jan 2, 2025, 09:00
    endDate: new Date(2025, 0, 6, 17, 0), // Jan 6, 2025, 17:00
  },
  {
    title: "Hormone Preparation",
    progress: 40,
    startDate: new Date(2025, 0, 7, 10, 0), // Jan 7, 2025, 10:00
    endDate: new Date(2025, 0, 13, 16, 0), // Jan 13, 2025, 16:00
  },
  {
    title: "Follicular Monitoring",
    progress: 20,
    startDate: new Date(2025, 0, 14, 8, 30), // Jan 14, 2025, 08:30
    endDate: new Date(2025, 0, 19, 15, 30), // Jan 19, 2025, 15:30
  },
];
