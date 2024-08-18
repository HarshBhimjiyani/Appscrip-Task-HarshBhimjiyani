// import React from "react";
// import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-top-left">
        <h4>Be the first to know</h4>
        <p>Signup for updates from metta muse.</p>
        <form>
          <input type="text" placeholder="Enter your e-mail...." />
          <button type="submit" className="btn-subs">
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer-top-right">
        <div className="footer-bottom-left">
          <h4>Contact us</h4>
          <p>+1234567890</p>
          <p>customercare@mettamuse.com</p>
        </div>

        <div className="footer-bottom-right">
          <h4>Currency</h4>
          <p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdWBNMACrfq9OGg_ktAcU3qMOTLqIkqfpdg&s"
              alt="Currency"
            />
            . USD
          </p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <div className="footer-bottom-left">
        <div className="footer-bottom-left-left">
          <div className="footer-bottom-left">
            <h4>metta muse</h4>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div className="footer-bottom-right">
            <h4>QUICK LINKS</h4>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom-right">
        <div className="footer-bottom-right-right">
          <div className="footer-bottom-left">
            <h4>Follow Us</h4>
            <div className="icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="footer-bottom-right">
            <h4>
              <span>metta muse</span> Accepts
            </h4>
            <div className="payments">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Google_Pay_Acceptance_Mark.svg/330px-Google_Pay_Acceptance_Mark.svg.png"
                alt="Google Pay"
              />
              <img
                src="https://www.mastercard.co.in/content/dam/public/mastercardcom/in/en/logos/mc-logo-52.svg"
                alt="MasterCard"
              />
              <img
                src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                alt="PayPal"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOc_GT2SMpXACFhwNi_vRTE4bgLLEJsIYRYw&s"
                alt="American Express"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0R1kpYGaBbP5PKyWJ8kHaaHhBLskhkp3x2nRv9_ZVdNvz-JLYgwR8MfF7ahUQJNHmLg&usqp=CAU"
                alt="Discover"
              />
              <img
                src="https://play-lh.googleusercontent.com/SLBq9uZdhdVYKZeHMRRWJ3QfLWFH8hpKPF192av5F7bMvBhv-AsYAvTK-Ogv84GH1vFf"
                alt="Google Wallet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
