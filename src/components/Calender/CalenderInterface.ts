export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  type: string; // Adding a "type" field for event categorization
  patientId?: string;
  patientName?: string;
  patientProfile?: string;
  patient_phoneNumber?: string;
  patient_email?: string;
  doctorId?: string;
  doctorName?: string;
  reason?: string;
  Note?: string;
  done?: boolean;
}
