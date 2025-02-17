/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mwpegkvq');

  const formRef = useRef(null);

  // Reset form fields after successful submission
  if (state.succeeded && formRef.current) {
    formRef.current.reset();
  }

  return (
    <div className="main">
      <div className="container hero-section">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="hero-title text-center">Contact</div>
            <p className="text-center d-lg-block d-md-block d-none">
              If you are interested in working with me, contact me below
            </p>
            <p className="text-center d-lg-none d-md-none d-block">
              If you have an application you are interested in developing, a feature
              that you need built or a project that needs coding. I&apos;d love to help with it
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="nameInput" name="name" placeholder="Muhammad Ali" />
                <label htmlFor="nameInput">Name</label>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="emailInput" name="email" placeholder="example@email.com" />
                <label htmlFor="emailInput">Email</label>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-floating mb-3">
                <textarea className="form-control" id="messageInput" name="message" placeholder="Type here..." />
                <label htmlFor="messageInput">Message</label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="form-btn" disabled={state.submitting}>
                  {state.submitting ? 'Submitting...' : 'Get in Touch'}
                </button>
              </div>
            </form>

            {/* Success Message */}
            {state.succeeded && (
              <div className="mt-3 text-center text-success">
                <p>Thanks for reaching me out! I will get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {state.errors && (
              <div className="mt-3 text-center text-danger">
                <p>There was an issue with your submission. Please try again.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
