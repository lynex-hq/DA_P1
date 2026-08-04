'use server';

import { redirect } from 'next/navigation';

/**
 * Replaces the old `app.post('/contact_us')` Express handler, which accepted the
 * submission and redirected straight back without persisting anything.
 * Behaviour is unchanged — wire up email/DB delivery here when it is ready.
 */
export async function submitEnquiry(formData) {
  const enquiry = {
    name: formData.get('name'),
    email: formData.get('email'),
    category: formData.get('category'),
    message: formData.get('message'),
  };

  // eslint-disable-next-line no-console
  console.log('[contact] enquiry received', enquiry);

  redirect('/contact_us?sent=1');
}
