import { FC } from 'react';

const AppointmentType: FC = () => {
    const types = [
      { id: 'clinic', label: 'In-Clinic', duration: '45 Mins' },
      { id: 'video', label: 'Video', duration: '40 Mins' },
      { id: 'chat', label: 'Chat', duration: '15 Mins' }
    ];
     return (
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Select your mode of session</h3>
        <div className="grid grid-cols-3 gap-3">
          {types.map((type) => (
            <button
              key={type.id}
              className="p-3 border rounded-lg text-center hover:border-green-700 focus:border-green-700 focus:ring-1 focus:ring-green-700"
            >
              <div className="font-medium">{type.label}</div>
              <div className="text-sm text-gray-500">{type.duration}</div>
            </button>
          ))}
        </div>
      </div>
    );
};
export default AppointmentType;