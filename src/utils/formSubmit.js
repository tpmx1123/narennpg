/** FormSubmit endpoint — first submit triggers a confirmation email to this inbox. */
export const FORMSUBMIT_EMAIL = 'narennliving@gmail.com';
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

/**
 * Submit form data to FormSubmit without leaving the page.
 * @param {Record<string, string>} data field name → value (include name attributes)
 * @param {{ subject?: string }} [options]
 */
export async function submitForm(data, { subject } = {}) {
  const payload = {
    ...data,
    _subject: subject || 'New enquiry from Narenn Living website',
    _template: 'table',
    _captcha: 'false',
  };

  if (data.email) {
    payload._replyto = data.email;
  }

  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let json = {};
  try {
    json = await res.json();
  } catch {
    // non-JSON response
  }

  if (!res.ok || json.success === 'false' || json.success === false) {
    throw new Error(json.message || 'Form submission failed. Please try again.');
  }

  return json;
}
