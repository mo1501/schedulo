const template = document.createElement('template');
template.innerHTML = `
  <style>
.navbar-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 20%;
    padding: 1.2rem;
    background-color: blue;
    

  }
.logo-image{
    height: 20%;
    width: 30%;
  }
.homepage-links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
}
.login-container{
    width: 10%;
}
.login-button{
    width: 100%;
    height: 2.5rem;
}
.page-link{
    font-size: 1.0rem;
    color: white;
}

  </style>
  <div class="navbar-container">
    <img class="logo-image "src="/client/assets/schedulo-logo.svg" />
      <div class="homepage-links">
        <a class="page-link">Features</a>
        <a class="page-link">Pricing</a>
        <a class="page-link">Support</a>
      </div>
      <div class='login-container'>
      <button class="login-button" id="login">Login</button>
      </div>

  </div>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();


    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
  }

  

  connectedCallback() {

  }

  disconnectedCallback() {

  }
}

window.customElements.define('nav-bar', NavBar);