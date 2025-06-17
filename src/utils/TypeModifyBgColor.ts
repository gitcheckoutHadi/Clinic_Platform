export const ModifyColorOnType = (type: string) => {
  switch (type.toLocaleLowerCase()) {
    case "quiz":
      return "#A15FE433";
    case "survey":
      return "#29ACAE33";
    case "exam":
      return "#F258A833";
    default:
      return "rgba(41, 172, 174, 0.20)";
  }
};
