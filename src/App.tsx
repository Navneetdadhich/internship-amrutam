import DoctorProfile from './components/DoctorProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecondPage from './components/SecondPage';
import AppointmentSection from './components/AppointmentSection';
import Navbar from './components/Navbar';
import Doctor from './components/Doctor';
const App = () => {
 return (
    <Router>
       <Navbar />
       <Routes>
       <Route path="/" element = {
           <div className="max-w-7xl mx-auto p-4">
       <Doctor />
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <DoctorProfile />
       <AppointmentSection />
     </div>
   </div>
       }/>
        <Route path="/find-doctors" element={<SecondPage />} />
       </Routes>
    </Router>
 );
};
export default App;