// Google Apps Script Web App URL (you'll need to deploy this)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6Ucph5k_VsQQTYSF91_hVSDIY6IRyBZFHduC6s0_TgdsBwd83ygAhuuqBtckpnG2Tew/exec';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'Name': data.name,
        'Phone Number': data.phone,
        'Email': data.email,
        'City': data.city,
        'Message': data.message,
        'Timestamp': new Date().toISOString(),
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      // If there's an error response, try to get text
      const errorText = await response.text();
      return { success: false, message: errorText || 'Failed to submit form' };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
};