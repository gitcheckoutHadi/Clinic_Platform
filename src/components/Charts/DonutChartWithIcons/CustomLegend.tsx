import React from "react";

interface LegendItem {
  label: string;
  color: string;
  value: number;
  isVisible: boolean;
  onClick: () => void;
}

interface CustomLegendProps {
  data: LegendItem[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ data }) => {
  return (
    <div className="custom-legend">
      {data.map((item, index) => (
        <div
          key={index}
          className="legend-item"
          onClick={item.onClick}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            cursor: "pointer",
            opacity: item.isVisible ? 1 : 0.5,
          }}
        >
          <div
            className="legend-color"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: item.color,
              marginRight: "8px",
            }}
          ></div>
          <span className="legend-label">
            - {item.label} | {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
