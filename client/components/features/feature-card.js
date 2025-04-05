const FeatureCardTemplate = document.createElement('template');
FeatureCardTemplate.innerHTML = `
  <style>
    .feature-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 10rem;
      width: 30rem;
      padding: 2rem;
      background-color: white;
      border: 2px solid #DCC37C;
      border-radius: 10px;
      margin: 1rem 0;
    }
    .feature-card h4 {
      margin: 0;
      padding: 0;
      color: #153243;
    }
    .feature-card p {
      margin: 0;
      padding: 0;
      text-align: center; /* Center the text */
      color: #153243;
    }
  </style>
  <div class="feature-card">
    <h4><slot name="feature-title"></slot></h4>
    <p><slot name="feature-description"></slot></p>
  </div>
`;

class FeatureCard extends HTMLElement {
  constructor() {
    super();


    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(FeatureCardTemplate.content.cloneNode(true));
    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }


  connectedCallback() {

  }

  disconnectedCallback() {

  }
}

window.customElements.define('feature-card', FeatureCard);