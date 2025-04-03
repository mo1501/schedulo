const NavBartemplate = document.createElement('template');
NavBartemplate.innerHTML = `
  <style>

:host {
  display: block;
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  
}

.navbar-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 5px solid #DCC37C;
    background-color: white;

  }
.logo-link{
    height: 3rem;
    width:20%;
    
}
.logo-image{
    height: 100%;
    width: 100%;

  }
.homepage-links{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;

}
.page-link{
    text-decoration: none; 
    color: black; 
    transition: border-color 0.1s ease-in-out;
    font-size: 1.0rem;
    font-weight: 500;
    color: black;
    margin-right: 3rem;
    cursor: pointer;
}
.page-link:hover {
  border-bottom: 2px solid #DCC37C; 
}

.login-button{
    all: unset;
    width: 10%;
    margin: 0.5rem;
    height: 2.5rem;
    background-color: #153243;
    color: #DCC37C;
    font-size: 1rem;
    text-align: center;
    border-radius: 2rem;
    font-family: inherit;
    cursor: pointer;
}


  </style>
  <div class="navbar-container">
    <a href="/client/index.html" class="logo-link"><img class="logo-image "src="/client/assets/schedulo-logo.svg" /></a>
      <div class="homepage-links">
        <a class="page-link">Features</a>
        <a class="page-link">Pricing</a>
        <a class="page-link">Support</a>
      </div>
      <button class="login-button" id="login">Login</button>


  </div>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();


    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(NavBartemplate.content.cloneNode(true));
    
  }

  

  connectedCallback() {

  }

  disconnectedCallback() {

  }
}

window.customElements.define('nav-bar', NavBar);