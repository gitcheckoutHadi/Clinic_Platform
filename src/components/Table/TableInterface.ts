export interface Permission {
  icon: React.ReactNode;
  onClick: () => void;
}
export interface Action {
  text: string; // The text displayed for the action
  value: string;
  icon: React.ElementType; // Type for React components
  onClick: (sourceId?: string) => void; // Function that handles the action
  tooltip?: string; // Optional tooltip text
  isFreeAction?: boolean; // Optional flag for special actions
  stroke?: boolean;
  fill?: boolean;
  hoverStroke?: boolean;
  hoverFill?: boolean;
}
