export interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  dateTime: string;
  status: AppointmentStatus;
  type: 'online' | 'in-person';
}

export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled' | 'pending';
