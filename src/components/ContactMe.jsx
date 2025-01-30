import React, { useState } from 'react';

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    contactMethod: 'Email',
    phone: '',
    source: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    fetch('https://script.google.com/macros/s/AKfycbz6l6m7VK8m8_fzna-TvZs5PYw-eXLFA3piXsH7XOlCprudS4e19uyD1DA973FYrFnC9w/exec', {
      method: 'POST',
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'Success') {
          alert('Successfully sent!');
          setFormData({
            name: '',
            email: '',
            subject: 'General Inquiry',
            message: '',
            contactMethod: 'Email',
            phone: '',
            source: '',
          });
        } else {
          alert('Something went wrong!');
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mx-auto md:mx-0 md:items-stretch md:w-full flex flex-col  p-4 mt-10 bg-card rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-foreground mb-4 flex-1">Contact Me</h2>
      <form onSubmit={handleSubmit}
      className='w-full flex flex-col'
      >
        <div className="md:grid md:grid-cols-2 md:gap-x-10">
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="block w-full p-2 text-sm text-foreground bg-input border border-border rounded-lg focus:ring focus:ring-ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="block w-full p-2 text-sm text-foreground bg-input border border-border rounded-lg focus:ring focus:ring-ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="subject">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="block w-full p-2 text-sm text-foreground bg-input border border-border rounded-lg focus:ring focus:ring-ring"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Collaboration Proposal">Collaboration Proposal</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="block w-full p-2 text-sm text-foreground bg-input border border-border rounded-lg focus:ring focus:ring-ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2">Preferred Contact Method *</label>
          <div className="flex gap-4">
            <div>
              <input
                type="radio"
                id="contact-email"
                name="contactMethod"
                value="Email"
                checked={formData.contactMethod === 'Email'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-sm text-foreground" htmlFor="contact-email">
                Email
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="contact-phone"
                name="contactMethod"
                value="Phone"
                checked={formData.contactMethod === 'Phone'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-sm text-foreground" htmlFor="contact-phone">
                Phone
              </label>
            </div>
          </div>
        </div>
        {formData.contactMethod === 'Phone' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="phone">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-sm text-foreground bg-input border border-border rounded-lg focus:ring focus:ring-ring"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="source">
            How did you hear about me?
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            className="block w-full p-2 text-sm text-foreground bg-input border border-border rounded-lg focus:ring focus:ring-ring"
          />
        </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="md:w-fit w-full self-center bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg focus:ring focus:ring-ring transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
