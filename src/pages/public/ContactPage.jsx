import { useState } from "react";
import { ContactForm } from "../../components/contact";
import { Container } from "../../components/layout/Container";
import {
  contactFormContent,
  contactFormFields,
  contactPageContent
} from "../../data/contact";
import { Section } from "../../layouts/Section";

const initialValues = contactFormFields.reduce((accumulator, field) => {
  accumulator[field.name] = "";
  return accumulator;
}, {});

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "This field is required.";
  }

  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return "Enter a valid email address.";
  }

  if (name === "phone" && !/^[0-9+\-\s()]{10,}$/.test(trimmedValue)) {
    return "Enter a valid phone number.";
  }

  return "";
}

export function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(name, value) {
    setValues((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value)
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = contactFormFields.reduce((accumulator, field) => {
      accumulator[field.name] = validateField(field.name, values[field.name]);
      return accumulator;
    }, {});

    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some(Boolean);

    if (hasError) {
      return;
    }

    // Kept ready for future backend/API integration.
    setValues(initialValues);
    setErrors({});
  }

  return (
    <Section className="contact-page" aria-labelledby="contact-page-title">
      <Container>
        <div className="contact-page__header">
          <p className="contact-page__eyebrow">{contactPageContent.eyebrow}</p>
          <h1 id="contact-page-title" className="contact-page__title">
            {contactPageContent.title}
          </h1>
          <p className="contact-page__intro">{contactPageContent.introduction}</p>
        </div>

        <ContactForm
          fields={contactFormFields}
          values={values}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitLabel={contactFormContent.submitLabel}
        />
      </Container>
    </Section>
  );
}
