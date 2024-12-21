import { FC } from 'react';
import '../index.css';
const Concerns: FC = () => {
    const concerns = [
      "Skin Treatment",
      "Pregnancy",
      "Period Doubts",
      "Endometriosis",
      "Pelvic Pain",
      "Ovarian Cysts"
    ];
     return (
      <div className="rounded-xl border-2 border-gray-300 bg-gradient-to-r from-green-50">

        <h2 className="text-lg font-semibold mb-4 p-4">The Concerns I Treat</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm ">
        <div className="flex flex-wrap gap-2">
          {concerns.map((concern) => (
            <span 
            key={concern}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm"
            >
              {concern}
            </span>
          ))}
        </div>
      </div>
          </div>
    );
};
export default Concerns;