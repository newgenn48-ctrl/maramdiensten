"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: sanitizeInput(formData.get("name") as string || ""),
    email: sanitizeInput(formData.get("email") as string || ""),
    phone: sanitizeInput(formData.get("phone") as string || ""),
    subject: sanitizeInput(formData.get("subject") as string || ""),
    message: sanitizeInput(formData.get("message") as string || ""),
  };

  // Validation
  if (!data.name || data.name.length < 2) {
    return {
      success: false,
      message: "Vul een geldige naam in (minimaal 2 karakters).",
    };
  }

  if (!data.email || !validateEmail(data.email)) {
    return {
      success: false,
      message: "Vul een geldig e-mailadres in.",
    };
  }

  if (!data.subject) {
    return {
      success: false,
      message: "Selecteer een onderwerp.",
    };
  }

  if (!data.message || data.message.length < 10) {
    return {
      success: false,
      message: "Uw bericht moet minimaal 10 karakters bevatten.",
    };
  }

  // In a real application, you would:
  // - Send an email using a service like SendGrid, Resend, or Nodemailer
  // - Store the message in a database
  // - Send a notification to the business owner

  // For now, we simulate a successful submission
  console.log("Contact form submission:", data);

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message:
      "Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.",
  };
}
