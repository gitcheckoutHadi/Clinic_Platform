export interface tagButtonInterface {
  text: string;
  onClickFunction?: () => void;
  labelContext?: string;
  labelContextClickFunction?: () => void;
  RemoveClickFunction?: () => void;
  width?: string;
  height?: string;
  backgroundcolor?: string;
  color?: string;
  border?: boolean;
  filteredText?: string;
  deleteClick?: () => void;
}
export interface tagButtonStyleInterface {
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
  border?: string;
  filteredText?: string;
}
