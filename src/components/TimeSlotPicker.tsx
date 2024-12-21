import { useState } from 'react';
import { FC } from 'react';
const TimeSlotPicker: FC = () => {
 const [selectedDate, setSelectedDate] = useState<string>('');
 
 const dates = [
   { day: 'Mon', date: '10 Oct' },
   { day: 'Tue', date: '11 Oct' },
   { day: 'Wed', date: '12 Oct' }
 ];
  const timeSlots = {
   morning: ['08:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'],
   evening: ['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM']
 };
  return (
   <div>
     <h3 className="text-sm font-medium mb-3">Pick a time slot</h3>
     
     <div className="flex gap-3 mb-6 border-2 border-gray-300 rounded-lg p-2">
       {dates.map((date) => (
         <button
           key={date.date}
           className="flex-1 p-3 border rounded-lg text-center hover:border-green-700 focus:border-green-700 focus:ring-1 focus:ring-green-700"
         >
           <div className="text-sm">{date.day}</div>
           <div className="font-medium">{date.date}</div>
         </button>
       ))}
     </div>
      <div className="space-y-4">
       <div>
         <h4 className="text-sm font-medium mb-2">Morning</h4>
         <div className="grid grid-cols-3 gap-2">
           {timeSlots.morning.map((time) => (
             <button
               key={time}
               className="p-2 border rounded text-sm hover:border-green-700 focus:border-green-700 focus:ring-1 focus:ring-green-700"
             >
               {time}
             </button>
           ))}
         </div>
       </div>
        <div>
         <h4 className="text-sm font-medium mb-2">Evening</h4>
         <div className="grid grid-cols-3 gap-2">
           {timeSlots.evening.map((time) => (
             <button
               key={time}
               className="p-2 border rounded text-sm hover:border-green-700 focus:border-green-700 focus:ring-1 focus:ring-green-700"
             >
               {time}
             </button>
           ))}
         </div>
       </div>
     </div>
   </div>
 );
};
export default TimeSlotPicker;