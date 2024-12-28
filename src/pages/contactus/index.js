import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import style from './index.module.css';

const Contactindex = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'webmaster@hopechc.org', // You can change the recipient email here
        subject: 'Contact Us Form Submission',
        text: `First Name: ${formData.first_name}\nLast Name: ${formData.last_name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
      }),
    });

    const data = await response.json();
    if (data.message === 'Email sent successfully!') {
      setFormStatus('Message sent successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setFormStatus('Error sending message, please try again later.');
    }
  };

  return (
    <div>
      <div className="entry-banner entry-banner-after bg-common bg-Image contactBg">
        <div className="inner-page-banner breadcrumbs-off">
          <div className="container">
            <div className="entry-banner-content breadcrumbs-area">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-wrap-layout progcard ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4 text-center">Leave Us Message</h3>
                <form className="contact-form-box" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="First Name *"
                        className="form-control"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Last Name *"
                        className="form-control"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="E-mail *"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Phone *"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message *"
                        className="textarea form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="7"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 form-group margin-b-none">
                      <button type="submit" className="theme-btn btn-red">Submit Message</button>
                    </div>
                  </div>
                </form>
                {formStatus && <div className="form-response">{formStatus}</div>}
              </div>
            </div>
            {/* <div className="col-lg-4">
                        <div className="contact-box-layout1" data-aos="slide-left">
                            <h3 className="title title-bar-primary4">When you visit, please bring with you</h3>
                            <div className="contact-info">
                                <ul className="offerlist">
                                    <li><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/> Two forms of ID (Passport, Green Card, etc)</li>
									<li><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/> Proof of income (four consecutive pay stubs or support letter with a copy of supporter’s ID)</li>
									<li><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/> Insurance card if applicable</li>
									<li><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/> Any medications you take including vitamins</li>
									<li><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/> Immunization record if applicable</li>
									<li><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/> Child’s birth certificate if applicable</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </section>

      <section className="call-to-action-wrap-layout4">
        <div className="item-Image"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="call-to-action-box-layout4" data-aos="zoom-in">
                <h2 className="item-title">
                  Explore Our Natural Gut Cleanse Programs and Improve Your
                  Digestive Health! Begin your journey to optimal digestive
                  wellness
                </h2>

                <div className="call-to-action-btn">
                  <Link href="/our-program" className="btn-red theme-btn">
                    <span>OUR PROGRAMS</span>
                  </Link>
                  <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>{" "}
                  <a
                    href="https://wa.me/9779994422"
                    target="_blank"
                    className="item-btn-phone btn-blue theme-btn"
                  >
                    <span>Call: 9779994422 </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactindex;