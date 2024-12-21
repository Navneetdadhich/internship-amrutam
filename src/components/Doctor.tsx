import { FC } from 'react';
import DoctorStats from './DoctorStats';
import pic from '../images/picss.png';
import pic2 from '../images/12.jpg';
import LanguagesSpoken from './LanguagesSpoken';
import Specializations from './Specializations';
import Concerns from './Concerns';
import WorkExperience from './WorkExperience';
import Reviews from './Reviews';
import '../index.css';

const DoctorProfile: FC = () => {
  return (
    <>
    <div className=" max-w-7xl mx-auto p-4 " >
      <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-300 bg-cover bg-center" style={{ backgroundImage: `url(${pic})` }}>
        <div className="flex items-center gap-4">
          <img 
            src="../images/12.jpg" 
            // alt="Doctor profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 bg-cover bg-center"
            style={{ backgroundImage: `url(${pic2})` }}
          />
          <div className="flex flex-row justify-between w-full mt-10">
            <div>

            <h1 className="text-xl font-semibold flex items-center gap-2">
              Dr. Prerna Narang
              <span className="text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-600">Gynecologist</p>
            </div>
            <DoctorStats />
            <button className="text-white font-medium mt-2 bg-primary px-4 py-1 rounded-md">Book An Appointment</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DoctorProfile;