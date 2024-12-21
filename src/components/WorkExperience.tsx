import { FC } from "react";
import '../index.css';
const WorkExperience: FC = () => {
    const experiences = [
      {
        clinic: "Midtown Medical Clinic",
        role: "Senior doctor",
        period: "2015-PRESENT"
      },
      {
        clinic: "Midtown Medical Clinic",
        role: "Senior doctor",
        period: "2010-2015"
      }
    ];
     return (
      <div className="rounded-xl border-2 border-gray-300 bg-gradient-to-r from-green-50">

        <h2 className="text-lg font-semibold mb-4 p-4">My Work Experience</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-sm font-medium mb-4">I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</p>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                🏥
              </div>
              <div>
                <h3 className="font-medium">{exp.clinic}</h3>
                <p className="text-sm text-gray-600">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
};
export default WorkExperience;