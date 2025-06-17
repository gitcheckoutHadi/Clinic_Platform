export interface TableHeaderDataInterface {
  id: string;
  label: string;
  ToolTipText?: string;
}

export type TableRowInterface<Header extends { id: string }> = Record<
  Header["id"],
  string | number | Date // Adjust based on your expected data types
>;

export interface ExpandedTableInterface {
  ExpandClick?: () => void;
  showExpand?: boolean;
  setShowExpand?: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}
