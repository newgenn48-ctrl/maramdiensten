import { render, screen } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

// Mock useActionState
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useActionState: () => [
    { success: false, message: "" },
    jest.fn(),
    false,
  ],
}));

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/naam/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mailadres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefoonnummer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/onderwerp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bericht/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", {
      name: /verstuur bericht/i,
    });
    expect(submitButton).toBeInTheDocument();
  });

  it("has required fields marked", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/naam/i);
    const emailInput = screen.getByLabelText(/e-mailadres/i);
    const subjectSelect = screen.getByLabelText(/onderwerp/i);
    const messageTextarea = screen.getByLabelText(/bericht/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(subjectSelect).toBeRequired();
    expect(messageTextarea).toBeRequired();
  });

  it("has correct input types", () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/e-mailadres/i);
    const phoneInput = screen.getByLabelText(/telefoonnummer/i);

    expect(emailInput).toHaveAttribute("type", "email");
    expect(phoneInput).toHaveAttribute("type", "tel");
  });

  it("renders all subject options", () => {
    render(<ContactForm />);

    const subjectSelect = screen.getByLabelText(/onderwerp/i);
    expect(subjectSelect).toBeInTheDocument();

    expect(screen.getByText(/selecteer een onderwerp/i)).toBeInTheDocument();
    expect(screen.getByText(/offerte aanvragen/i)).toBeInTheDocument();
    expect(screen.getByText(/spoedkoerier nodig/i)).toBeInTheDocument();
    expect(screen.getByText(/zakelijke samenwerking/i)).toBeInTheDocument();
    expect(screen.getByText(/algemene vraag/i)).toBeInTheDocument();
    expect(screen.getByText(/anders/i)).toBeInTheDocument();
  });

  it("phone field is optional", () => {
    render(<ContactForm />);

    const phoneInput = screen.getByLabelText(/telefoonnummer/i);
    expect(phoneInput).not.toBeRequired();
  });
});
