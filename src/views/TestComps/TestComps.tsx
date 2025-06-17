import DonutchartWithoutLegend from "../../components/DonutchartWithoutLegend/DonutchartWithoutLegend";
import { PageFlex } from "../../globalStyles";

import { useNavigate } from "react-router-dom";

const TestComps = () => {
  const navigate = useNavigate();
  const HandleSignIn = () => {
    navigate("/dashboard");
    // alert("hello");
  };

  return (
    <div style={{ display: "flex" }}>
      <DonutchartWithoutLegend
        charts={[
          { chartLabels: "Clinic 1", chartSeries: 44, chartColor: "#FF6384" },
          { chartLabels: "Clinic 2", chartSeries: 55, chartColor: "#36A2EB" },
          { chartLabels: "Clinic 3", chartSeries: 13, chartColor: "#FFCE56" },
        ]}
        title="Clinics Overview"
        titlebgcolor="rgba(246, 160, 172, 0.20)"
      />
    </div>
  );
};

export default TestComps;
