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
import ComingSoon from './pages/ComingSoon';

const REDIRECTS = [
  ['about-us', '/about-us/'],
  ['rooms', '/rooms/'],
  ['rooms/single-sharing', '/rooms/single-sharing/'],
  ['rooms/double-sharing', '/rooms/double-sharing/'],
  ['rooms/triple-sharing', '/rooms/triple-sharing/'],
  ['rooms/quad-sharing', '/rooms/quad-sharing/'],
  ['amenities', '/amenities/'],
  ['food', '/food/'],
  ['events', '/events/'],
  ['contact-us', '/contact-us/'],
  ['faq', '/faq/'],
  ['properties', '/properties/'],
  ['properties/narenn-elite', '/properties/narenn-elite/'],
  ['properties/narenn-crown', '/properties/narenn-crown/'],
  ['properties/narenn-pinnacle', '/properties/narenn-pinnacle/'],
  ['properties/narenn-supreme', '/properties/narenn-supreme/'],
  ['locations/madhapur', '/locations/madhapur/'],
  ['coliving-for-it-professionals', '/coliving-for-it-professionals/'],
  ['pg-for-students', '/pg-for-students/'],
];

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/rooms/single-sharing/" element={<SingleSharing />} />
          <Route path="/rooms/double-sharing/" element={<DoubleSharing />} />
          <Route path="/rooms/triple-sharing/" element={<TripleSharing />} />
          <Route path="/rooms/quad-sharing/" element={<QuadSharing />} />
          <Route path="/amenities/" element={<Amenities />} />
          <Route path="/food/" element={<Food />} />
          <Route path="/locations/madhapur/" element={<Madhapur />} />
          <Route path="/properties/" element={<ComingSoon pageKey="properties" />} />
          <Route path="/properties/narenn-elite/" element={<ComingSoon pageKey="properties-narenn-elite" />} />
          <Route path="/properties/narenn-crown/" element={<ComingSoon pageKey="properties-narenn-crown" />} />
          <Route path="/properties/narenn-pinnacle/" element={<ComingSoon pageKey="properties-narenn-pinnacle" />} />
          <Route path="/properties/narenn-supreme/" element={<ComingSoon pageKey="properties-narenn-supreme" />} />
          <Route path="/events/" element={<ComingSoon pageKey="events" />} />
          <Route path="/contact-us/" element={<ComingSoon pageKey="contact-us" />} />
          <Route path="/faq/" element={<ComingSoon pageKey="faq" />} />
          <Route
            path="/coliving-for-it-professionals/"
            element={<ComingSoon pageKey="coliving-for-it-professionals" />}
          />
          <Route path="/pg-for-students/" element={<ComingSoon pageKey="pg-for-students" />} />
          {REDIRECTS.map(([from, to]) => (
            <Route key={from} path={`/${from}`} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
