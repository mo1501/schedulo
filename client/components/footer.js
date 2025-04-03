const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      
      background-color: #153243;
      color: #DCC37C;
      padding: 2rem 0;
    }

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .footer-logo{
    margin: 1rem;
    }
    .footer-links {
      display: flex;
      gap: 2rem;
    }

    .footer-links a {
      text-decoration: none;
      color: #DCC37C;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.2s ease-in-out;
    }

    .footer-links a:hover {
      color: #F4E1B9;
    }

    .social-icons {
    display: flex;
    gap: 1rem;
}

    .social-icons a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #DCC37C;
}

.social-icons svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
}


    .footer-logo img {
      height: 3rem;
    }

    .copyright {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  </style>

  <footer>
    <div class="footer-container">
      <div class="footer-logo">
        <a href="/client/index.html">
          <img src="/client/assets/schedulo-logo.svg" alt="Schedulo Logo" />
        </a>
      </div>
      <nav class="footer-links">
        <a href="#">About</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </nav>
      <div class="social-icons">
        <a href="https://twitter.com" target="_blank">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.86-2.35 8.4 8.4 0 01-2.66 1A4.23 4.23 0 0016 4c-2.35 0-4.25 1.9-4.25 4.24 0 .34.04.67.1 1A12.08 12.08 0 013 5.15a4.24 4.24 0 00-.57 2.14c0 1.48.75 2.78 1.89 3.54a4.2 4.2 0 01-1.92-.53v.05c0 2.07 1.47 3.8 3.42 4.2-.36.1-.74.15-1.13.15a3.9 3.9 0 01-.8-.07c.54 1.7 2.12 2.94 3.98 2.98a8.48 8.48 0 01-5.24 1.8c-.34 0-.67-.02-1-.06A12 12 0 008.29 21c7.75 0 12-6.43 12-12v-.55a8.5 8.5 0 002.17-2.17z"/>
        </svg>
        </a>
        <a href="https://facebook.com" target="_blank">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1-3.2 3.2-3.2.9 0 1.8.1 1.8.1v2h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.5 3h-2.3v7A10 10 0 0022 12z"/>
        </svg>
        </a>
        <a href="mailto:your-email@gmail.com">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 13.2L2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7L12 13.2ZM22 5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5L12 11L22 5Z"/>
        </svg>
    </a>
       </div>

    </div>
    <p class="copyright">© 2025 Schedulo. All rights reserved.</p>
  </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define('app-footer', FooterComponent);
