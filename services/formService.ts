// Google Apps Script Web App URL (you'll need to deploy this)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6Ucph5k_VsQQTYSF91_hVSDIY6IRyBZFHduC6s0_TgdsBwd83ygAhuuqBtckpnG2Tew/exec';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  interestedIn: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        interestedIn: data.interestedIn,
        message: data.message,
        timestamp: new Date().toISOString(),
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, message: result.error || 'Failed to submit form' };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
};