import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Rooms from './pages/Rooms';
import SingleSharing from './pages/rooms/SingleSharing';
import DoubleSharing from './pages/rooms/DoubleSharing';
import TripleSharing from './pages/rooms/TripleSharing';
import QuadSharing from './pages/rooms/QuadSharing';
import Amenities from './pages/Amenities';
import Food from './pages/Food';
import Madhapur from './pages/locations/Madhapur';
import HitechCity from './pages/locations/HitechCity';
import Gachibowli from './pages/locations/Gachibowli';
import Kondapur from './pages/locations/Kondapur';
import Properties from './pages/Properties';
import NarennElite from './pages/properties/NarennElite';
import NarennCrown from './pages/properties/NarennCrown';
import NarennPinnacle from './pages/properties/NarennPinnacle';
import NarennSupreme from './pages/properties/NarennSupreme';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import ColivingItProfessionals from './pages/ColivingItProfessionals';
import PgForStudents from './pages/PgForStudents';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost';
import Founder from './pages/Founder';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const REDIRECTS = [
  ['about-us', '/about-us/'],
  ['founder', '/narenn-founder/'],
  ['narenn-founder', '/narenn-founder/'],
  ['rooms', '/rooms/'],
  ['rooms/single-sharing', '/rooms/single-sharing/'],
  ['rooms/double-sharing', '/rooms/double-sharing/'],
  ['rooms/triple-sharing', '/rooms/triple-sharing/'],
  ['rooms/quad-sharing', '/rooms/quad-sharing/'],
  ['amenities', '/amenities/'],
  ['food', '/food/'],
  ['events', '/events/'],
  ['blog', '/blog/'],
  ['contact-us', '/contact-us/'],
  ['faq', '/faq/'],
  ['properties', '/properties/'],
  ['properties/narenn-elite', '/properties/narenn-elite/'],
  ['properties/narenn-crown', '/properties/narenn-crown/'],
  ['properties/narenn-pinnacle', '/properties/narenn-pinnacle/'],
  ['properties/narenn-supreme', '/properties/narenn-supreme/'],
  ['locations/madhapur', '/locations/madhapur/'],
  ['locations/hitech-city', '/locations/hitech-city/'],
  ['locations/gachibowli', '/locations/gachibowli/'],
  ['locations/kondapur', '/locations/kondapur/'],
  ['coliving-for-it-professionals', '/coliving-for-it-professionals/'],
  ['pg-for-students', '/pg-for-students/'],
  ['privacy-policy', '/privacy-policy/'],
  ['terms-of-use', '/terms-of-use/'],
  ['terms-and-conditions', '/terms-of-use/'],
];

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/narenn-founder/" element={<Founder />} />
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/rooms/single-sharing/" element={<SingleSharing />} />
          <Route path="/rooms/double-sharing/" element={<DoubleSharing />} />
          <Route path="/rooms/triple-sharing/" element={<TripleSharing />} />
          <Route path="/rooms/quad-sharing/" element={<QuadSharing />} />
          <Route path="/amenities/" element={<Amenities />} />
          <Route path="/food/" element={<Food />} />
          <Route path="/locations/madhapur/" element={<Madhapur />} />
          <Route path="/locations/hitech-city/" element={<HitechCity />} />
          <Route path="/locations/gachibowli/" element={<Gachibowli />} />
          <Route path="/locations/kondapur/" element={<Kondapur />} />
          <Route path="/properties/" element={<Properties />} />
          <Route path="/properties/narenn-elite/" element={<NarennElite />} />
          <Route path="/properties/narenn-crown/" element={<NarennCrown />} />
          <Route path="/properties/narenn-pinnacle/" element={<NarennPinnacle />} />
          <Route path="/properties/narenn-supreme/" element={<NarennSupreme />} />
          <Route path="/events/" element={<Events />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:slug/" element={<BlogPost />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/faq/" element={<Faq />} />
          <Route path="/coliving-for-it-professionals/" element={<ColivingItProfessionals />} />
          <Route path="/pg-for-students/" element={<PgForStudents />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use/" element={<TermsOfUse />} />
          {REDIRECTS.map(([from, to]) => (
            <Route key={from} path={`/${from}`} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
