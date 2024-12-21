export interface Doctor {
  id: string;
  name: string;
  specialization: string[];
  experience: number;
  qualifications: string[];
  availability: {
    days: string[];
    timeSlots: TimeSlot[];
  };
  rating: number;
  reviews: number;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}
