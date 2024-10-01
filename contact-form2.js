import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form2.css'

const ContactForm2 = (props) => {
  return (
    <div
      className={`contact-form2-contact5 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row contact-form2-max-width">
        <div className="thq-flex-column contact-form2-content">
          <div className="contact-form2-section-title">
            <span>
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form2-text16 thq-body-small">
                    Connecting you with the world, one teleport at a time
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact-form2-text20 thq-heading-2">
                    Contact us
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="contact-form2-contact-info thq-flex-column">
            <div className="contact-form2-row1 thq-flex-row"></div>
            <div className="contact-form2-row2 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span>
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form2-text18 thq-body-small">
                      +1 (555) 000-0000
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form2-row3 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span>
                {props.adress ?? (
                  <Fragment>
                    <span className="contact-form2-text19 thq-body-small">
                      789 Test St, Bucharest
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form2-form">
          <div className="contact-form2-input1">
            <label htmlFor="contact-form-2-name" className="thq-body-small">
              Name
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              placeholder="Name"
              className="contact-form2-text-input1 thq-input"
            />
          </div>
          <div className="contact-form2-input2">
            <label htmlFor="contact-form-2-email" className="thq-body-small">
              Email
            </label>
            <input
              type="email"
              id="contact-form-2-email"
              required="true"
              placeholder="Email"
              className="contact-form2-text-input2 thq-input"
            />
          </div>
          <div className="contact-form2-input3">
            <label htmlFor="contact-form-2-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-2-message"
              rows="3"
              placeholder="Enter your message"
              className="contact-form2-textarea thq-input"
            ></textarea>
          </div>
          <div className="contact-form2-checkbox1">
            <input
              type="checkbox"
              id="contact-form-2-check"
              checked="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-2-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form2-button thq-button-filled"
          >
            <span>
              {props.action ?? (
                <Fragment>
                  <span className="contact-form2-text17 thq-body-small">
                    Submit
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm2.defaultProps = {
  content2: undefined,
  action: undefined,
  phone: undefined,
  adress: undefined,
  heading1: undefined,
  rootClassName: '',
}

ContactForm2.propTypes = {
  content2: PropTypes.element,
  action: PropTypes.element,
  phone: PropTypes.element,
  adress: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ContactForm2
