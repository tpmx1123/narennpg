import pgVsFlatCostComparison from './pgVsFlatCostComparison';
import bestAreasToLiveHyderabadItProfessionals from './bestAreasToLiveHyderabadItProfessionals';
import movingToHyderabadFresherChecklist from './movingToHyderabadFresherChecklist';
import coLivingVsPgDifference from './coLivingVsPgDifference';
import womensPgSafetyChecklist from './womensPgSafetyChecklist';
import costOfLivingHyderabadGuide from './costOfLivingHyderabadGuide';
import questionsToAskBeforeBookingPg from './questionsToAskBeforeBookingPg';
import wfhFriendlyAccommodationHyderabad from './wfhFriendlyAccommodationHyderabad';
import studentGuideToHyderabad from './studentGuideToHyderabad';
import nightShiftAccommodationHyderabad from './nightShiftAccommodationHyderabad';
import thingsToDoMadhapurWeekend from './thingsToDoMadhapurWeekend';
import first30DaysNewCityPlaybook from './first30DaysNewCityPlaybook';

/** @type {Record<string, import('../types').BlogArticleContent>} */
export const BLOG_POST_CONTENT = {
  'pg-vs-flat-cost-comparison-hyderabad': pgVsFlatCostComparison,
  'best-areas-to-live-hyderabad-it-professionals': bestAreasToLiveHyderabadItProfessionals,
  'moving-to-hyderabad-fresher-checklist': movingToHyderabadFresherChecklist,
  'co-living-vs-pg-difference': coLivingVsPgDifference,
  'womens-pg-safety-checklist-hyderabad': womensPgSafetyChecklist,
  'cost-of-living-hyderabad-guide': costOfLivingHyderabadGuide,
  'questions-to-ask-before-booking-pg': questionsToAskBeforeBookingPg,
  'wfh-friendly-accommodation-hyderabad': wfhFriendlyAccommodationHyderabad,
  'student-guide-to-hyderabad': studentGuideToHyderabad,
  'night-shift-accommodation-hyderabad': nightShiftAccommodationHyderabad,
  'things-to-do-madhapur-weekend': thingsToDoMadhapurWeekend,
  'first-30-days-new-city-playbook': first30DaysNewCityPlaybook,
};

export function getBlogPostContent(slug) {
  return BLOG_POST_CONTENT[slug] ?? null;
}
