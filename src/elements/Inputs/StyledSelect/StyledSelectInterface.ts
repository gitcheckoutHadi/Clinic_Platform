export interface FileInputProps {
  onChange: (files: FileList | null) => void;
  title: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  acceptedFileTypes: string;
  disabled?: boolean;
  StopHoverAction?: boolean;
  ShowBorder?: boolean;
}
