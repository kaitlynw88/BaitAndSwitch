import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faThreads} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
      <footer>
          <p>Bait and Switch 2025</p>
          <h4>Connect with us on social media</h4>
          <div className="socialLinksContainer">
              <a
                  href="https://www.instagram.com/bait.and.switch.co/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon
                      icon={faInstagram}
                      className="socials firstOf"
                  />
              </a>
              <a
                  href="https://www.threads.com/@bait.and.switch.co?xmt=AQF0vAgSn-EwdsA2b4cKImgbEFmyp3i7O66LzxFJRkh7Y-U"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <span className="sr-only">Threads</span>
                  <FontAwesomeIcon icon={faThreads} className="socials" />
              </a>
          </div>
      </footer>
  );
}

export default Footer