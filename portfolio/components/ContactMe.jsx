"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNotification } from "../context/NotificationContext";
import ReCAPTCHA from "react-google-recaptcha";

const ContactMe = () => {
  const recaptchaRef = useRef(null);
  const { triggerNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
      contactMethod: "Email",
      phone: "",
      source: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const token = recaptchaRef.current?.getValue();
    // if (!token) {
    //   triggerNotification("error", "Please verify reCAPTCHA!");
    //   setLoading(false);
    //   return;
    // }

    const form = new FormData();
    Object.keys(data).forEach((key) => form.append(key, data[key]));

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyDwQEPLt6ieIMk1AAUJ8JbGDopTDKH3hHbb_-TPShj4NrWOipoYdiNodgjUHmVycdTuQ/exec",
        {
          method: "POST",
          body: form,
        }
      );
      const result = await response.json();

      if (result.status === "Success") {
        triggerNotification("success", "Message successfully sent!");
        reset();
        recaptchaRef.current?.reset();
      }else if (result.message === "CAPTCHA verification failed"){
        triggerNotification("error", "Please verify reCAPTCHA!");
      } else {
        throw new Error("There was an error sending the message!");
      }
    } catch (error) {
      triggerNotification("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto md:mx-0 md:items-stretch md:w-full flex flex-col p-4 mt-10 bg-card rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-foreground mb-4 flex-1">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        <div className="md:grid md:grid-cols-2 md:gap-x-10">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="block w-full p-2 text-sm bg-input border border-border rounded-lg focus:ring focus:ring-ring"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
              className="block w-full p-2 text-sm bg-input border border-border rounded-lg focus:ring focus:ring-ring"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Subject *
            </label>
            <select
              {...register("subject", { required: "Subject is required" })}
              className="block w-full p-2 text-sm bg-input border border-border rounded-lg focus:ring focus:ring-ring"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Collaboration Proposal">Collaboration Proposal</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="block w-full p-2 text-sm bg-input border border-border rounded-lg focus:ring focus:ring-ring"
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>

          {/* Preferred Contact Method */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Preferred Contact Method *
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  {...register("contactMethod")}
                  value="Email"
                  className="mr-2"
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  {...register("contactMethod")}
                  value="Phone"
                  className="mr-2"
                />
                Phone
              </label>
            </div>
          </div>

          {/* Phone (conditional) */}
          {watch("contactMethod") === "Phone" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="block w-full p-2 text-sm bg-input border border-border rounded-lg focus:ring focus:ring-ring"
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
          )}

          {/* How did you hear about me? */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              How did you hear about me?
            </label>
            <input
              type="text"
              {...register("source")}
              className="block w-full p-2 text-sm bg-input border border-border rounded-lg focus:ring focus:ring-ring"
            />
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="mb-4">
          <ReCAPTCHA ref={recaptchaRef} sitekey="6Ld1ItYqAAAAAEj3z-cMbbNQJqFmxVXCpFkn-_iC" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="md:w-fit w-full self-center bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg focus:ring focus:ring-ring transition duration-200 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
