const HeroSectionTemplate = document.createElement('template');
HeroSectionTemplate.innerHTML = `
<style>
:host {
  display: block;
  width: 100%;
  background-color: blue;

}

.hero-section-container{
    display: flex;
    flex-direction: row;
}
.text-area{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
</style>
  <div class="hero-section-container">
  <div class="text-area">
  <h3>Organize life, one event at a time.</h3>
  <p>Say goodbye to chaotic schedules and missed appointments. With Schedulo, effortlessly plan, organize, and manage all your events in one place. From meetings to celebrations, Schedulo keeps you on track and in control. Sync with your favorite calendars, set reminders, and share events seamlessly. It's time to simplify your life—start scheduling smarter with Schedulo today!</p>
  <button class="get-started-button">Get Started</button>
  </div>
  <div class="hero-image">
    <img src="/client/assets/img-2.svg"></img>
  </div>
  </div>
`;

class HeroSection extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(HeroSectionTemplate.content.cloneNode(true));
    
  }

  

  connectedCallback() {

  }

  disconnectedCallback() {

  }
}

window.customElements.define('hero-section', HeroSection);