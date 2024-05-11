import {Link} from "react-router-dom";

export default function Footer() {
    return (
      <div
        className="footer-copy center bottom-0 relative items-center justify-center w-full backdrop-blur-md bg-black
        {/*bg-opacity-50*/}
        "
      >
        <div className="container w-container ">
          <div className="footer-widgets">
            <div className="w-layout-grid footer-grid">
              <div className="widget-content-one">
                {/*<img*/}
                {/*    src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/63409a403b96bc3d945cde5c_Honest%20pwoer.png"*/}
                {/*    loading="eager" width="708"*/}
                {/*    sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 708px" alt="Footer Logo"*/}
                {/*    srcSet="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/63409a403b96bc3d945cde5c_Honest%20pwoer-p-500.png 500w, https://uploads-ssl.webflow.com/632787c41c814d0af1720348/63409a403b96bc3d945cde5c_Honest%20pwoer-p-800.png 800w, https://uploads-ssl.webflow.com/632787c41c814d0af1720348/63409a403b96bc3d945cde5c_Honest%20pwoer-p-1080.png 1080w, https://uploads-ssl.webflow.com/632787c41c814d0af1720348/63409a403b96bc3d945cde5c_Honest%20pwoer.png 1410w"*/}
                {/*    className="image-2"*/}
                {/*/>*/}
                <div className="footer-social-section">
                  <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814deab9720377_social-icon-svg-1.svg"
                      loading="lazy"
                      alt="Footer Social Facebook"
                      width="10"
                      className="footer-social"
                      style={{
                        top: "23%",
                        height: "27px",
                        width: "21px",
                      }}
                    />
                  </Link>
                  <a
                    href="https://twitter.com/HonestPowerSol"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814dbe39720378_social-icon-svg-2.svg"
                      loading="lazy"
                      alt="Footer Social Twitter"
                      className="footer-social"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/honest-power-solar/mycompany/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814da6c7720379_social-icon-svg-3.svg"
                      loading="lazy"
                      alt="Footer Social Linkedin"
                      className="footer-social"
                      style={{
                        top: "28%",
                        right: "-32%",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/honest.power.solar/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814dda7872037a_social-icon-svg-4.svg"
                      loading="lazy"
                      alt="Footer Social Instagram"
                      className="footer-social"
                      style={{
                        height: "28px",
                        top: "24%",
                        right: "-22%",
                      }}
                    />
                  </a>
                </div>
                <div className="footer-copyright-text">
                  <div className="copyright-text">
                    <strong>©</strong> Helios Energy Global LLC
                    <br />
                  </div>
                </div>
              </div>
              <div className="widget-content-two">
                <div className="widget-title-section">
                  <h2 className="widget-title">Explore</h2>
                </div>
                <div className="footer-widget-links">
                  <a
                    href="/"
                    aria-current="page"
                    className="footer-link w--current"
                  >
                    Home
                  </a>
                  <a href="/src/pages/About" className="footer-link">
                    About
                  </a>
                  <a href="/src/pages/Services" className="footer-link">
                    Services
                  </a>
                  <a
                    href="/individual-services/commerical"
                    className="footer-link"
                  >
                    Commercial
                  </a>
                  <a href="/contact-us" className="footer-link">
                    Contact
                  </a>
                </div>
              </div>
              <div className="widget-content-three">
                <div className="widget-title-section">
                  <h2 className="widget-title">Contact</h2>
                </div>
                <div className="footer-contact-area">
                  <div className="address-section address-section-one">
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/6330eb214184db542239b9b1_location.png"
                      loading="lazy"
                      width="19"
                      sizes="(max-width: 767px) 19px, (max-width: 991px) 2vw, (max-width: 1439px) 19px, 1vw"
                      alt=""
                      srcSet="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/6330eb214184db542239b9b1_location-p-500.png 500w, https://uploads-ssl.webflow.com/632787c41c814d0af1720348/6330eb214184db542239b9b1_location.png 512w"
                      className="intro-image"
                    />
                    <div className="address-text">
                      21600 W Oxnard St Woodland Hills, CA 91367.
                    </div>
                  </div>
                  <div className="address-section mail-content">
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814daa5f72045a_doctor-mail.svg"
                      loading="lazy"
                      width="22"
                      alt=""
                      className="intro-image"
                    />
                    <a
                      href="mailto:support@doctorate.com"
                      className="address-text footer-link"
                    >
                      info@myhonestpower.com
                    </a>
                  </div>
                  <div className="address-section mail-content">
                    <img
                      src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814dc7e072046f_phone-call-white.svg"
                      loading="lazy"
                      width="22"
                      alt=""
                      className="intro-image"
                    />
                    <a
                      href="tel:+221234567900"
                      className="address-text footer-link"
                    >
                      (+1) 323-330-4665
                    </a>
                  </div>
                </div>
              </div>
              <div className="widget-content-four">
                <div className="widget-title-section appointment-title">
                  <h2 className="widget-title">Get a quote</h2>
                  <img
                    src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/6330eac724771a822581804a_sun2.png"
                    loading="lazy"
                    width="32"
                    sizes="(max-width: 1439px) 32px, (max-width: 1919px) 2vw, 32px"
                    alt="Widget Title Separator"
                    srcSet="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/6330eac724771a822581804a_sun2-p-500.png 500w, https://uploads-ssl.webflow.com/632787c41c814d0af1720348/6330eac724771a822581804a_sun2.png 650w"
                    className="specific-image"
                  />
                </div>
                <div
                  id="Footer-Widget-Booking"
                  className="footer-widget-booking"
                >
                  <div className="footer-booking-text">
                    Reach out to one of our solar specialists today
                  </div>
                  <div className="booking-button">
                    <a
                      href="/contact-us"
                      className="header-button-link-2 w-inline-block"
                    >
                      <div className="header-button-2">
                        <img
                          src="https://uploads-ssl.webflow.com/632787c41c814d0af1720348/632787c41c814d3faf720427_header-calendar.svg"
                          loading="lazy"
                          alt="Header Calendar Icons"
                          className="header-calendar-icon"
                        />
                        <h6 className="header-button-text-2">GET A QUOTE</h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
