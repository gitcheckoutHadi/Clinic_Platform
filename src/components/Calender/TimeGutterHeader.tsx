import { MediumTypography } from "../../elements/textElement/fonts/Fonts";

export const TimeGutterHeader = () => {
  const offsetInMinutes = new Date().getTimezoneOffset(); // e.g., -120 for GMT+2
  const offsetInHours = -offsetInMinutes / 60; // invert sign for GMT format
  const sign = offsetInHours >= 0 ? "+" : "-";
  const label = `GMT${sign}${Math.abs(offsetInHours)}`;

  return (
    <div
      style={{
        fontSize: "0.75rem",
        textAlign: "center",
        paddingTop: "1.35rem",
      }}
    >
      <MediumTypography
        text={label}
        fontWeight="700"
        lineHeight="120%"
        color="#a6a6a6"
      />
    </div>
  );
};
