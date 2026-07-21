import { useState } from 'react';
import { Link } from 'react-router-dom';
import CurvedInput from '../ui/CurvedInput';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';

const CTA_IMAGE =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784195917/image-13-2_xarwah.webp';

const PhoneIcon = (
  <g>
    <rect x="-17" y="-13.5" width="34" height="27" rx="7" fill="#FBBD45" />
    <path
      d="M -5 -4.5 C -5 -6.5 -3.5 -8 -1.5 -8 L 1.5 -8 C 3.5 -8 5 -6.5 5 -4.5 L 5 4.5 C 5 6.5 3.5 8 1.5 8 L -1.5 8 C -3.5 8 -5 6.5 -5 4.5 Z"
      fill="none"
      stroke="#0F3D2E"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M -2.5 10 L 2.5 10"
      stroke="#0F3D2E"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </g>
);

const DEFAULT_TITLE = (
  <>
    Book your free visit and see why residents choose{' '}
    <span className="text-brand-gold italic font-medium">Narenn Living</span>
  </>
);

const DEFAULT_DESCRIPTION =
  'Walk through the rooms, meet the team and taste the food. Schedule a visit today - rooms in popular sharing types fill quickly at the start of every month.';

export default function FinalCta({
  onBookVisit,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageAlt = 'Narenn Living co-living terrace in Madhapur, Hyderabad',
}) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (value) => {
    onBookVisit({ phone: value.trim() });
  };

  return (
    <section id="contact" className="relative z-20 px-6 pb-0">
      <div className="max-w-6xl mx-auto -mb-20 sm:-mb-24 lg:-mb-28">
        <div className="rounded-3xl sm:rounded-[2rem] overflow-hidden bg-brand-green shadow-[0_24px_60px_rgba(15,61,46,0.28)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="relative lg:col-span-5 min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]">
              <img
                src={CTA_IMAGE}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 via-brand-green/40 to-brand-green/90 lg:to-brand-green" />
            </div>

            <div className="lg:col-span-7 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 flex flex-col justify-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-tight leading-snug mb-3">
                {title}
              </h2>
              <div className="text-sm sm:text-base text-white/85 leading-relaxed mb-6 max-w-lg">
                {typeof description === 'string' ? <p>{description}</p> : description}
              </div>

              <div className="max-w-lg">
                <CurvedInput
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                  onSubmit={handleSubmit}
                  placeholder="Enter your phone number"
                  buttonText="Book Visit"
                  ariaLabel="Phone number for booking a visit"
                  theme="dark"
                  width="100%"
                  bend={0}
                  height={60}
                  fontSize={15}
                  backgroundColor="rgba(255,255,255,0.12)"
                  textColor="#ffffff"
                  placeholderColor="rgba(255,255,255,0.55)"
                  borderColor="rgba(251,189,69,0.45)"
                  buttonColor="#ffffff"
                  buttonTextColor="#0F3D2E"
                  iconColor="#FBBD45"
                  shadowSize="sm"
                  shadowColor="#000000"
                  icon={PhoneIcon}
                />
                <p className="mt-4 text-[11px] text-white/60 leading-relaxed">
                  Or call us directly on{' '}
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  . Read our{' '}
                  <Link to="/contact-us/" className="underline underline-offset-2 hover:text-white">
                    contact page
                  </Link>{' '}
                  for directions to VIP Hills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
