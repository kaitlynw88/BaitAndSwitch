import React from 'react'

function ContactUsPage() {
  return (
      <>
          <section>
              <div className="wrapper">
                  <div className="formSection">
                      <h2>Have a thought about our show?</h2>
                      <p className="formText">We'd love to hear from you!</p>
                      <form
                          action="https://formspree.io/f/mdkwwwak"
                          method="POST"
                          className="form"
                      >
                          <p>
                              <label for="name">Name:</label>
                              <input type="text" id="name" name="user_name" />
                          </p>
                          <p>
                              <label for="mail">Email:</label>
                              <input type="email" id="mail" name="user_email" />
                          </p>
                          <p>
                              <label for="msg">Message:</label>
                              <textarea id="msg" name="user_message"></textarea>
                          </p>
                          <p class="button">
                              <button type="submit">Send your message</button>
                          </p>
                      </form>
                  </div>
              </div>
          </section>
      </>
  );
}

export default ContactUsPage