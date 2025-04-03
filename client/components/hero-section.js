const HeroSectionTemplate = document.createElement('template');
HeroSectionTemplate.innerHTML = `
<style>
:host {
  display: block;
  width: 100%;



}

.hero-section-container{
    display: flex;
    flex-direction: row;




}
.text-area{
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1rem;
    width: 45%;

}
.text-area h1 {
    margin: 0; /* Remove all margins from the h1 */
}
.text-area p {
    text-align: justify; /* Justify the text */
}
.hero-image{
    height: 100%;
    width: 40%;

}
.hero-image img {
    height: 100%; /* Make the image take up all the height of the container */
    width: auto; /* Maintain the aspect ratio of the image */
    object-fit: cover; /* Optional: Adjust how the image fits within the container */
}
.get-started-button{
    all: unset;
    height: 2.5rem;
    background-color: #153243;
    color: #DCC37C;
    font-size: 1.0rem;
    font-weight: 500;
    border-radius: 5px;
    width: auto;
    text-align: center;
    cursor: pointer;
}
</style>
  <div class="hero-section-container">
    <div class="text-area">
      <h1>Organize life, one event at a time.</h1>
      <p>Say goodbye to chaotic schedules and missed appointments. With Schedulo, effortlessly plan, organize, and manage all your events in one place. From meetings to celebrations, Schedulo keeps you on track and in control. Sync with your favorite calendars, set reminders, and share events seamlessly. It's time to simplify your life—start scheduling smarter with Schedulo today!</p>
      <button class="get-started-button">Get Started</button>
    </div>
    <div class="hero-image">
      <img src="/client/assets/img-2.svg"></img>
    </div>
  </div>
  <div style="height: 0.5rem; border-radius: 50px; background-color: #153243; width: 95%; margin: 1rem auto;"></div>
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