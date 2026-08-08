import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, BookingModal } from '../home';
import StickyContact from './StickyContact';
import { submitForm } from '../../utils/formSubmit';

export default function SiteLayout() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: 'Narenn Elite',
    roomType: '1 Sharing',
    visitDate: '',
  });

  const onBookVisit = (overrides = {}) => {
    setBookingError('');
    setFormData((prev) => ({ ...prev, ...overrides }));
    setBookingModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (bookingSubmitting) return;

    setBookingError('');
    setBookingSubmitting(true);
    try {
      await submitForm(
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          property: formData.property,
          roomType: formData.roomType,
          visitDate: formData.visitDate,
        },
        { subject: `Visit request — ${formData.name} (${formData.property})` }
      );
      setBookingSubmitted(true);
    } catch (err) {
      setBookingError(
        err?.message || 'Something went wrong. Please try again or call us.'
      );
    } finally {
      setBookingSubmitting(false);
    }
  };

  const resetBookingForm = () => {
    setBookingSubmitted(false);
    setBookingSubmitting(false);
    setBookingError('');
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
        bookingSubmitting={bookingSubmitting}
        bookingError={bookingError}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleBookingSubmit}
        onReset={resetBookingForm}
      />
    </div>
  );
}
