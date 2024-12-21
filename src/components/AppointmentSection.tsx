import { FC } from 'react';
import AppointmentType from './AppointmentType';
import TimeSlotPicker from './TimeSlotPicker';
import '../index.css';
const AppointmentSection: FC = () => {
 return (
   <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-300">
     <div className="mb-6">
       <h2 className="text-lg font-semibold">Appointment Fee</h2>
       <p className="text-2xl font-bold text-green-700">₹899.00</p>
     </div>
      <AppointmentType />
     <TimeSlotPicker />
     
     <button className="w-full bg-primary text-white py-3 rounded-lg mt-6 font-medium">
       Make An Appointment
     </button>
   </div>
 );
};
export default AppointmentSection;