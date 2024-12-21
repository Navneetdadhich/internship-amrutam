import { Doctor } from '../types/Doctor';

export const doctorService = {
  getDoctorProfile: async (doctorId: string): Promise<Doctor> => {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/doctors/${doctorId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch doctor profile');
    }
    return response.json();
  },

  getDoctorAvailability: async (doctorId: string, date: string) => {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/doctors/${doctorId}/availability?date=${date}`);
    if (!response.ok) {
      throw new Error('Failed to fetch doctor availability');
    }
    return response.json();
  },

  searchDoctors: async (query: string) => {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/doctors/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Failed to search doctors');
    }
    return response.json();
  }
}; 