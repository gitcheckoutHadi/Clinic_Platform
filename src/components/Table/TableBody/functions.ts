export const TableBodyTextColor = (text: string, t: any) => {
  switch (text) {
    case t("table.Paid"):
      return "#3FBEBC";
    case t("table.Unpaid"):
      return "#EC5957";
    case t("table.Under treatment"):
      return "#FFA726";
    case t("table.Recovered"):
      return "#4CAF50";
    // case t("table.Under observation"):
    //   return "#29B6F6";
    // case t("table.Discharged"):
    //   return "#AB47BC";
    case t("table.Done"):
      return "#3FBEBC";
    case t("table.Upcoming"):
      return "#FFBA62";
    case t("table.Canceled"):
      return "#F258A8";
    case t("table.Rescheduled"):
      return "#F258A8";

    case t("Ongoing (Ovarian Stimulation)"):
      return "#A15FE4";

    case t("Completed"):
      return "#29ACAE";

    default:
      return ""; // Default color for unknown status
  }
};

export const TableBodyTextFontWeight = (text: string) => {
  switch (text) {
    case "Paid":
    case "Unpaid":
    case "Under treatment":
    case "Recovered":
    case "Completed":
    case "Done":
    case "Upcoming":
    case "Canceled":
    case "Rescheduled":
    case "Ongoing (Ovarian Stimulation)":
      return "700";
    default:
      return "400"; // Default font weight for other statuses
  }
};

export const TableBodyTextLineHeight = (text: string) => {
  switch (text) {
    case "Paid":
    case "Unpaid":
      return "1.25rem";
    default:
      return "normal"; // Default font weight for other statuses
  }
};

export const TableBodyTextLetterSpacing = (text: string) => {
  switch (text) {
    case "Paid":
    case "Unpaid":
      return " 0.00625rem";
    default:
      return ""; // Default font weight for other statuses
  }
};
