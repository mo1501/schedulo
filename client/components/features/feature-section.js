const FeatureSectionTemplate = document.createElement('template');
FeatureSectionTemplate.innerHTML = `
  <style>
  .features-container-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #153243;
    margin: 1rem 0;
    text-align: center; /* Center the title */
    text-decoration: underline; /* Underline the title */
    text-decoration-color: #DCC37C; /* Underline color */
    text-decoration-thickness: 2px; /* Thickness of the underline */
    text-underline-offset: 0.4rem; /* Space between the text and the underline */
    text-decoration-style: solid; /* Style of the underline */}
  .feature-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 2 columns of equal width */
      gap: 1.5rem; /* Space between rows and columns */
      padding: 1rem; /* Optional: Add padding around the grid */
    
}
  </style>
  <h4 class="features-container-title">Features</h4>
  <div class="feature-container">
    <feature-card>
  <h4 slot="feature-title">Integrated Calendar & To-Do View</h4>
  <p slot="feature-description">Seamlessly merge your calendar events and to-do list items into a single, unified view. See your schedule and tasks side-by-side, allowing for efficient time management and task prioritization.</p>
</feature-card>

<feature-card>
  <h4 slot="feature-title">Smart Task Categorization & Tagging</h4>
  <p slot="feature-description">Automatically categorize tasks based on keywords or user-defined tags. Use tags like "#work," "#personal," or "#shopping" to filter and organize your to-dos, making it easier to focus on specific areas of your life.</p>
</feature-card>

<feature-card>
  <h4 slot="feature-title">Recurring Task & Event Templates</h4>
  <p slot="feature-description">Create templates for recurring tasks or events, such as weekly meetings, daily routines, or monthly bills. This eliminates the need to manually enter repetitive information, saving time and reducing errors.</p>
</feature-card>

<feature-card>
  <h4 slot="feature-title">Time Blocking & Focus Mode</h4>
  <p slot="feature-description">Visually block out time slots in your calendar for specific tasks or activities. Activate "Focus Mode" to minimize distractions and concentrate on the task at hand, increasing productivity.</p>
</feature-card>

<feature-card>
  <h4 slot="feature-title">Collaborative Task & Event Sharing</h4>
  <p slot="feature-description">Share calendar events and to-do lists with colleagues, family, or friends. Allow for real-time collaboration, task assignment, and event coordination, making group projects and shared schedules easier to manage.</p>
</feature-card>

<feature-card>
  <h4 slot="feature-title">Location-Based Reminders & Integrations</h4>
  <p slot="feature-description">Set location-based reminders for tasks or events. Receive notifications when you arrive at or leave a specific location. Integrate with other apps like mapping services or productivity tools to enhance functionality and streamline workflows.</p>
</feature-card>
    
  </div>
  <div style="height: 0.5rem; border-radius: 50px; background-color: #153243; width: 95%; margin: 1rem auto;"></div>


`;

class FeatureSection extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(FeatureSectionTemplate.content.cloneNode(true));
    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }


  connectedCallback() {

  }

  disconnectedCallback() {

  }
}

window.customElements.define('feature-section', FeatureSection);