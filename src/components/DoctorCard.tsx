import { Doctor } from '../types';
import pic from '../images/12.jpg';
import { Link } from 'react-router-dom';
interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-secondary rounded-xl p-6 border-2 border-primary">
      <div className="relative text-center">
        <img
          src={pic}
          alt={doctor.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary"
        />
        <span className="absolute bottom-0 right-1/3 bg-white px-2 py-1 rounded text-sm">
          {doctor.rating} ★
        </span>
      </div>
      <div className="text-center mt-4">
        <h3 className="font-bold text-lg">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.speciality}</p>
        <p className="text-sm">{doctor.experience} years of Experience</p>
        <p className="text-sm">Speaks: {doctor.languages.join(', ')}</p>
        <div className="flex justify-around my-4">
          <div>
            <div>Video Consultation</div>
            <div>₹{doctor.videoConsultation.price}</div>
          </div>
          <div>
            <div>Chat Consultation</div>
            <div>{doctor.chatConsultation.price}</div>
          </div>
        </div>
        <div className="space-y-2">
        <Link 
           to={"/"} 
           className="block w-full py-2 border border-primary text-primary rounded text-center hover:bg-primary hover:text-white transition-colors"
         >
           View Profile
         </Link>
          
          
          <button className="w-full py-2 bg-primary text-white rounded">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
