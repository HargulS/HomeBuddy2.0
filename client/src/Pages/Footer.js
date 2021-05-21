import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HouseLogo from "../assets/images/houseLogo.png";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__siteHeadingWrapper">
          <img alt="house logo"className="footer__siteLogo" src={HouseLogo} />
          <h2 className="footer__heading">Home Buddy</h2>
        </div>
        <section className="footer__container">
          <div className="footer__listContainer">
            <ul className="footer__list">
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Contact</p>
                <p className="footer__listItemText footer__listItemText-Adrs">
                  220 King Street West Suite 1100 Lorem, ON M5H 3R3
                  1.800.679.9622
                </p>
                <p className="footer__listItemText">Ipsum</p>
              </li>
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Questions</p>
                <p className="footer__listItemText">Support Center</p>
              </li>
            </ul>
          </div>
          <div className="footer__listContainer">
            <ul className="footer__list">
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Company</p>
                <p className="footer__listItemText">About Us</p>
                <p className="footer__listItemText">Meet the Team</p>
                <p className="footer__listItemText">Careers</p>
                <p className="footer__listItemText">Contact Us</p>
              </li>
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Social</p>
                <div className="footer__listItemIcons">
                  <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                  <FontAwesomeIcon icon={["fab", "instagram-square"]} />
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </div>
              </li>
            </ul>
          </div>
          <div className="footer__listContainer">
            <ul className="footer__list">
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Community</p>
                <p className="footer__listItemText">Blog</p>
                <p className="footer__listItemText">Widgets</p>
                <p className="footer__listItemText">Podcast</p>
                <p className="footer__listItemText">Ipsum</p>
              </li>
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Languages</p>
                <p className="footer__listItemText">Français</p>
              </li>
            </ul>
          </div>
          <div className="footer__listContainer">
            <ul className="footer__list">
              <li className="footer__listItem">
                <p className="footer__listItemHeading">Legal</p>
                <p className="footer__listItemText">Disclaimer</p>
                <p className="footer__listItemText">Content usage</p>
                <p className="footer__listItemText">Terms of use</p>
                <p className="footer__listItemText">Privacy Policy</p>
              </li>

              <li className="footer__listItem">
                <p className="footer__listItemHeading">Comments</p>
                <p className="footer__listItemText">Comments</p>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}
