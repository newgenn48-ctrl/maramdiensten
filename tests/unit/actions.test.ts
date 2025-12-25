import { submitContactForm } from "@/app/contact/actions";

describe("submitContactForm", () => {
  const initialState = { success: false, message: "" };

  const createFormData = (data: Record<string, string>): FormData => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return formData;
  };

  it("returns error for empty name", async () => {
    const formData = createFormData({
      name: "",
      email: "test@example.com",
      phone: "",
      subject: "offerte",
      message: "Dit is een testbericht voor de koerier.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("naam");
  });

  it("returns error for short name", async () => {
    const formData = createFormData({
      name: "A",
      email: "test@example.com",
      phone: "",
      subject: "offerte",
      message: "Dit is een testbericht voor de koerier.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("naam");
  });

  it("returns error for invalid email", async () => {
    const formData = createFormData({
      name: "Jan Jansen",
      email: "invalid-email",
      phone: "",
      subject: "offerte",
      message: "Dit is een testbericht voor de koerier.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("e-mailadres");
  });

  it("returns error for empty email", async () => {
    const formData = createFormData({
      name: "Jan Jansen",
      email: "",
      phone: "",
      subject: "offerte",
      message: "Dit is een testbericht voor de koerier.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("e-mailadres");
  });

  it("returns error for missing subject", async () => {
    const formData = createFormData({
      name: "Jan Jansen",
      email: "test@example.com",
      phone: "",
      subject: "",
      message: "Dit is een testbericht voor de koerier.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("onderwerp");
  });

  it("returns error for short message", async () => {
    const formData = createFormData({
      name: "Jan Jansen",
      email: "test@example.com",
      phone: "",
      subject: "offerte",
      message: "Kort",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("10 karakters");
  });

  it("returns success for valid form submission", async () => {
    const formData = createFormData({
      name: "Jan Jansen",
      email: "test@example.com",
      phone: "0612345678",
      subject: "offerte",
      message: "Dit is een testbericht voor de koeriersdienst.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(true);
    expect(result.message).toContain("Bedankt");
  });

  it("allows submission without phone number", async () => {
    const formData = createFormData({
      name: "Jan Jansen",
      email: "test@example.com",
      phone: "",
      subject: "vraag",
      message: "Dit is een algemene vraag over uw diensten.",
    });

    const result = await submitContactForm(initialState, formData);

    expect(result.success).toBe(true);
  });
});
