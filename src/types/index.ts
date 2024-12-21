export interface Doctor {
    i: number;
    name: string;
    image: string;
    rating: number;
    speciality: string;
    experience: number;
    languages: string[];
    videoConsultation: {
      price: number;
    };
    chatConsultation: {
      price: number | 'Free';
    };
  }
  
  export interface Filters {
    expertise: string;
    gender: string;
    fees: string;
    language: string;
  }
  
  export interface ActiveFilter {
    key: keyof Filters;
    value: string;
  }
  