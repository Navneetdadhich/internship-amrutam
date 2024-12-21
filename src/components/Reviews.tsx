import { FC } from 'react';
import '../index.css';
const Reviews: FC = () => {
    const reviews = [
      {
        name: "Patient Name",
        type: "Consulted for Skin care",
        date: "20 January 2023",
        rating: 5,
        comment: "Might be bit early to confirm but yes I can see noticeable difference in my hair fall, will write again after using it for longer periods"
      },
      {
        name: "Patient Name",
        type: "Consulted for Skin care",
        date: "20 January 2023",
        rating: 5,
        comment: "Might be bit early to confirm but yes I can see noticeable difference in my hair fall, will write again after using it for longer periods"
      }
    ];
     return (

      <div className="rounded-xl border-2 border-gray-300 bg-gradient-to-r from-green-50">
        <h2 className="text-lg font-semibold mb-4 p-4">Featured Reviews (102)</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm ">
        
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.type}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-2">{review.date}</p>
            </div>
          ))}
        </div>
        
              </div>
      </div>
    );
};
export default Reviews;