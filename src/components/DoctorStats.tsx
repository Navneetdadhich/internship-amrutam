import { FC } from 'react';

const DoctorStats: FC = () => {
    return (
      <div className="w-140 flex justify-between gap-6 mt-2">
        <div>
          <p className="text-gray-600">Reviews</p>
          <p className="font-semibold">850</p>
        </div>
        <div>
          <p className="text-gray-600">Following</p>
          <p className="font-semibold">18K</p>
        </div>
        <div>
          <p className="text-gray-600">Fans</p>
          <p className="font-semibold">250</p>
        </div>
      </div>
    );
   };
   export default DoctorStats;