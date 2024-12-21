import { FC } from 'react';
import '../index.css';
const Specializations: FC = () => {
    const specialties = [
      { name: "Women's Health", icon: "👩" },
      { name: "Skin Care", icon: "🧴" },
      { name: "Immunity", icon: "🛡️" },
      { name: "Hair Care", icon: "💇‍♀️" },
    ];
     return (
      <div className="rounded-xl border-2 border-gray-300 bg-gradient-to-r from-green-50">
        <h2 className="text-lg font-semibold mb-4 p-4">I Specialize In</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm " >
        <div className="grid grid-cols-4 gap-4">
          {specialties.map((specialty) => (
            <div 
              key={specialty.name}
              className="flex flex-col items-center text-center"
            >
              <span className="text-2xl mb-2">{specialty.icon}</span>
              <span className="text-sm">{specialty.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
   };
   export default Specializations;