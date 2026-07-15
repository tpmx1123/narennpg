import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESIDENCES } from '../../data/homeData';

export default function BookingModal({
  open,
  bookingSubmitted,
  formData,
  onInputChange,
  onSubmit,
  onReset,
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onReset}
            className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-brand-cream border border-brand-cream-dark shadow-2xl rounded-3xl p-6 md:p-8 max-w-lg w-full relative z-10 overflow-hidden"
          >
            <button
              onClick={onReset}
              className="absolute top-4 right-4 p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">
                    SCHEDULE TOUR
                  </span>
                  <h3 className="text-2xl font-display font-bold text-brand-charcoal">
                    Book a Live Visit
                  </h3>
                  <p className="text-brand-charcoal-light text-xs mt-1">
                    Tour our co-living residences or Narenn&apos;s Crown — a safe space for girls in
                    Madhapur.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={onInputChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={onInputChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={onInputChange}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">
                        SELECT PROPERTY
                      </label>
                      <select
                        name="property"
                        value={formData.property}
                        onChange={onInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors appearance-none"
                      >
                        {RESIDENCES.map((res) => (
                          <option key={res.name} value={res.name}>
                            {res.name} ({res.livingType})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">
                        OCCUPANCY PREFERENCE
                      </label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={onInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors appearance-none"
                      >
                        <option value="Private Room">Private Room (Single)</option>
                        <option value="2 Sharing">2 Sharing (Double)</option>
                        <option value="3 Sharing">3 Sharing (Triple)</option>
                        <option value="4 Sharing">4 Sharing (Quad)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">
                      DATE OF VISIT
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      required
                      value={formData.visitDate}
                      onChange={onInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-burgundy text-white font-display font-bold text-sm tracking-wider shadow-md hover:bg-brand-burgundy-dark transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    Submit Visit Request
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-brand-gold/10 border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-gold mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-charcoal">
                  Booking Request Sent!
                </h3>
                <p className="text-brand-charcoal-light text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you,{' '}
                  <span className="font-semibold text-brand-charcoal">{formData.name}</span>. Our
                  tour manager will contact you shortly at{' '}
                  <span className="font-semibold text-brand-charcoal">{formData.phone}</span> to
                  confirm your slot for{' '}
                  <span className="font-semibold text-brand-charcoal">{formData.visitDate}</span>.
                </p>
                <button
                  onClick={onReset}
                  className="px-6 py-2.5 rounded-full bg-brand-charcoal hover:bg-brand-burgundy text-white font-display font-bold text-xs tracking-wider transition-colors mt-4"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
