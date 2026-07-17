import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, BookingModal } from '../home';
import StickyContact from './StickyContact';

export default function SiteLayout() {
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
      <Navbar />
      <Outlet context={{ onBookVisit }} />
      <StickyContact />
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
