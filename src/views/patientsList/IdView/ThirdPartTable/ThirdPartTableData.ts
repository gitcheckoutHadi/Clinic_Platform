import { TableHeaderDataInterface } from "../../../../Interface/TableInterface/TableInterface";

export const PatientIdTreatmentHeaderData: TableHeaderDataInterface[] = [
  { id: "Type", label: "Type" },
  { id: "Details", label: "Details" },
  { id: "Outcome", label: "Outcome" },
];

export const PatientIdTreatmentBodyData = [
  {
    Type: "Ongoing",
    Details: "Adjusted protocol with higher stimulation",
    Outcome: "Positive pregnancy test",
  },
  {
    Type: "Completed",
    Details: "Cycle completed with 8 eggs retrieved",
    Outcome: "Embryos frozen",
  },
  {
    Type: "Cancelled",
    Details: "Cycle cancelled due to insufficient response",
    Outcome: "No oocytes retrieved",
  },
  {
    Type: "Ongoing",
    Details: "Undergoing frozen embryo transfer",
    Outcome: "Awaiting beta-HCG test",
  },
  {
    Type: "Completed",
    Details: "Natural cycle monitored successfully",
    Outcome: "Ovulation confirmed",
  },
  {
    Type: "Cancelled",
    Details: "Cycle cancelled due to high risk of OHSS",
    Outcome: "Rescheduled for next month",
  },
  {
    Type: "Completed",
    Details: "ICSI procedure performed on retrieved eggs",
    Outcome: "3 embryos transferred",
  },
  {
    Type: "Ongoing",
    Details: "Stimulation phase with antagonist protocol",
    Outcome: "Good follicular growth",
  },
  {
    Type: "Cancelled",
    Details: "Failed fertilization during IVF procedure",
    Outcome: "Exploring alternative treatments",
  },
  {
    Type: "Completed",
    Details: "Embryo transfer after PGT-A analysis",
    Outcome: "1 euploid embryo implanted",
  },
  {
    Type: "Ongoing",
    Details: "Egg freezing for fertility preservation",
    Outcome: "5 oocytes cryopreserved",
  },
  {
    Type: "Completed",
    Details: "Ovulation induction with timed intercourse",
    Outcome: "Chemical pregnancy",
  },
  {
    Type: "Ongoing",
    Details: "Monitoring cycle for endometrial preparation",
    Outcome: "Scheduled embryo transfer",
  },
  {
    Type: "Cancelled",
    Details: "Cancelled due to uterine lining insufficiency",
    Outcome: "Switching to different medication",
  },
  {
    Type: "Completed",
    Details: "Donor egg IVF cycle",
    Outcome: "Live birth reported",
  },
  {
    Type: "Ongoing",
    Details: "Low-dose stimulation protocol initiated",
    Outcome: "Awaiting follicle scan results",
  },
];
