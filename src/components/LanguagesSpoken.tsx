import { FC } from 'react';

const LanguagesSpoken: FC = () => {
    const languages = ['English', 'Hindi', 'Telugu'];
     return (
      <div className="mt-4">
        <h3 className="text-sm font-medium mb-2">Language Spoken</h3>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <span 
              key={lang}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    );
   };
   export default LanguagesSpoken;