import { FC } from 'react';
import DoctorStats from './DoctorStats';
import LanguagesSpoken from './LanguagesSpoken';
import Specializations from './Specializations';
import Concerns from './Concerns';
import WorkExperience from './WorkExperience';
import Reviews from './Reviews';
import '../index.css';

const DoctorProfile: FC = () => {
  return (
    <>
    <div className="space-y-6 ">
      {/* <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-300">
        <div className="flex items-center gap-4">
          <img 
            src="images/12.jpg" 
            alt="Doctor profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <div>
            <h1 className="text-xl font-semibold flex items-center gap-2">
              Dr. Bruce Willis
              <span className="text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-600">Gynecologist</p>
            <DoctorStats />
          </div>
        </div>
      </div> */}
      
      <div className="rounded-xl border-2 border-gray-300">

        <div className=" flex justify-between items-center p-4 rounded-lg p-2 bg-gradient-to-r from-green-50">
        <h2 className="text-lg font-semibold mb-4">A Little About Me</h2>
        <button className="text-primary font-medium mt-2 border-2 border-green-700 px-4 py-1 rounded-md">follow</button>
        </div>
      <div className="bg-white rounded-xl p-6 shadow-sm ">
        <p className="text-gray-600">
          Hello! I am Dr. Bruce Willis, a Gynecologist at Sunflyer Hospital. 
          I work closely with all my hospital staff and dedicated doctors. 
          I completed my graduation in Gynecological Medicine from the...
        </p>
        <button className="text-green-700 font-medium mt-2">Read More</button>
        <LanguagesSpoken />
      </div>
      </div>
      <Specializations />
      <Concerns />
      <WorkExperience />
      <Reviews />
    </div>
    </>
  );
};

export default DoctorProfile;