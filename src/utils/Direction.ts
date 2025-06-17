export const TransformDirection = () => {
  const languages = ["ar", "arc", "az", "dv", "he", "ckb", "fa", "ur"];
  const language = localStorage.getItem("language");

  if (language && languages.includes(language.toLowerCase())) {
    return "rtl";
  } else {
    return "ltr";
  }
};
