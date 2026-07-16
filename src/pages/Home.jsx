import { useState } from 'react';
import {
  Navbar,
  Hero,
  Highlights,
  SeoIntro,
  About,
  Residences,
  Amenities,
  Pricing,
  Dining,
  Gallery,
  Safety,
  Testimonials,
  Neighborhood,
  SeoSections,
  Faq,
  FinalCta,
  Footer,
  BookingModal,
} from '../components/home';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: 'Narenn Elite',
    roomType: '1 Sharing',
    visitDate: '',
  });

  const onBookVisit = (overrides = {}) => {
    setFormData((prev) => ({ ...prev, ...overrides }));
    setBookingModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setBookingSubmitted(true);
    }, 800);
  };

  const resetBookingForm = () => {
    setBookingSubmitted(false);
    setBookingModalOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      property: 'Narenn Elite',
      roomType: '1 Sharing',
      visitDate: '',
    });
  };

  return (
    <div className="min-h-screen bg-white text-brand-charcoal font-sans flex flex-col selection:bg-brand-gold/25 selection:text-brand-burgundy">
      <Navbar onBookVisit={onBookVisit} />
      <Hero onBookVisit={onBookVisit} />
      <Highlights />
      <SeoIntro />
      <About onBookVisit={onBookVisit} />
      <Residences onBookVisit={onBookVisit} />
      <Amenities />
      <Pricing onBookVisit={onBookVisit} />
       <Dining />
      {/*<Gallery onBookVisit={onBookVisit} />*/}
      {/* <Safety /> */}
      <Testimonials />
      
      <Neighborhood />
      <Faq />
      <FinalCta onBookVisit={onBookVisit} />
      <Footer /> 
      {/*<SeoSections /> */}
      <BookingModal
        open={bookingModalOpen}
        bookingSubmitted={bookingSubmitted}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleBookingSubmit}
        onReset={resetBookingForm}
      />
    </div>
  );
}
