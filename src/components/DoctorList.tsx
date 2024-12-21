import { Doctor } from '../types';
import DoctorCard from './DoctorCard';

interface DoctorListProps {
  doctors: Doctor[];
  isLoading: boolean;
}

const DoctorList = ({ doctors, isLoading }: DoctorListProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center py-12">
        No doctors found matching your criteria
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.i} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
