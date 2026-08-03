import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
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
import DurgamCheruvu from './pages/locations/durgam-cheruvu';
import JubileeHills from './pages/locations/jubilee-hills';
import Mindspace from './pages/locations/mindspace';
import CyberTowers from './pages/locations/cyber-towers';
import FinancialDistrict from './pages/locations/financial-district';
import Raidurg from './pages/locations/raidurg';
import Nanakramguda from './pages/locations/nanakramguda';
import Kothaguda from './pages/locations/kothaguda';
import Manikonda from './pages/locations/manikonda';
import Nallagandla from './pages/locations/nallagandla';
import Miyapur from './pages/locations/miyapur';
import Kukatpally from './pages/locations/kukatpally';
import Ameerpet from './pages/locations/ameerpet';
import Begumpet from './pages/locations/begumpet';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const LOCATION_REDIRECTS = [
  'madhapur',
  'hitech-city',
  'gachibowli',
  'kondapur',
  'durgam-cheruvu',
  'jubilee-hills',
  'mindspace',
  'cyber-towers',
  'financial-district',
  'raidurg',
  'nanakramguda',
  'kothaguda',
  'manikonda',
  'nallagandla',
  'miyapur',
  'kukatpally',
  'ameerpet',
  'begumpet',
];

function BlogTrailingSlashRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/blog/${slug}/`} replace />;
}

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
  ...LOCATION_REDIRECTS.map((slug) => [`locations/${slug}`, `/locations/${slug}/`]),
  ['locations/hitec-city', '/locations/hitech-city/'],
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
          <Route path="/locations/durgam-cheruvu/" element={<DurgamCheruvu />} />
          <Route path="/locations/jubilee-hills/" element={<JubileeHills />} />
          <Route path="/locations/mindspace/" element={<Mindspace />} />
          <Route path="/locations/cyber-towers/" element={<CyberTowers />} />
          <Route path="/locations/financial-district/" element={<FinancialDistrict />} />
          <Route path="/locations/raidurg/" element={<Raidurg />} />
          <Route path="/locations/nanakramguda/" element={<Nanakramguda />} />
          <Route path="/locations/kothaguda/" element={<Kothaguda />} />
          <Route path="/locations/manikonda/" element={<Manikonda />} />
          <Route path="/locations/nallagandla/" element={<Nallagandla />} />
          <Route path="/locations/miyapur/" element={<Miyapur />} />
          <Route path="/locations/kukatpally/" element={<Kukatpally />} />
          <Route path="/locations/ameerpet/" element={<Ameerpet />} />
          <Route path="/locations/begumpet/" element={<Begumpet />} />
          <Route path="/locations/hitec-city/" element={<Navigate to="/locations/hitech-city/" replace />} />
          <Route path="/properties/" element={<Properties />} />
          <Route path="/properties/narenn-elite/" element={<NarennElite />} />
          <Route path="/properties/narenn-crown/" element={<NarennCrown />} />
          <Route path="/properties/narenn-pinnacle/" element={<NarennPinnacle />} />
          <Route path="/properties/narenn-supreme/" element={<NarennSupreme />} />
          <Route path="/events/" element={<Events />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:slug/" element={<BlogPost />} />
          <Route path="/blog/:slug" element={<BlogTrailingSlashRedirect />} />
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
