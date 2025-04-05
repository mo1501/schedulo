class PricingSection extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          #pricing {
            text-align: center;
            padding: 1rem 1rem;
          }
  
          .pricing-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            max-width: 1200px;
            margin: 20px auto;
          }
  
          .pricing-card {
            border: 1px solid #ddd;
            padding: 20px;
            width: 300px;
            text-align: center;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
  
          .popular {
              border: 2px solid #007bff;
          }
  
          .pricing-card h3 {
            margin-bottom: 10px;
          }
  
          .price {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 10px;
            color: #007bff;
          }
  
          .description {
            margin-bottom: 20px;
          }
  
          ul {
            list-style-type: none;
            padding: 0;
            margin-bottom: 20px;
          }
  
          li {
            margin-bottom: 8px;
          }
  
          .select-plan {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }
  
          .select-plan:hover {
            background-color: #0056b3;
          }
        </style>
        <section id="pricing">
          <h2>Choose Your Schedulo Plan</h2>
          <div class="pricing-container">
  
            <div class="pricing-card">
              <h3>Basic</h3>
              <p class="price">Free</p>
              <p class="description">Perfect for individuals managing personal tasks and schedules.</p>
              <ul>
                <li>Unlimited To-Do Lists</li>
                <li>Basic Calendar View</li>
                <li>Task Categorization</li>
                <li>Limited Integrations</li>
              </ul>
              <button class="select-plan">Get Started Free</button>
            </div>
  
            <div class="pricing-card popular">
              <h3>Premium</h3>
              <p class="price">$5.99/month</p>
              <p class="description">Ideal for professionals and teams needing advanced features.</p>
              <ul>
                <li>All Basic Features</li>
                <li>Advanced Calendar Views</li>
                <li>Recurring Task Templates</li>
                <li>Time Blocking & Focus Mode</li>
                <li>Collaborative Sharing</li>
                <li>Priority Support</li>
              </ul>
              <button class="select-plan">Start Premium</button>
            </div>
  
            <div class="pricing-card">
              <h3>Team</h3>
              <p class="price">$9.99/user/month</p>
              <p class="description">Designed for larger teams requiring robust collaboration tools.</p>
              <ul>
                <li>All Premium Features</li>
                <li>Team Calendars & Task Boards</li>
                <li>Advanced Collaboration Tools</li>
                <li>Dedicated Account Manager</li>
                <li>Custom Integrations</li>
              </ul>
              <button class="select-plan">Contact Sales</button>
            </div>
  
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('pricing-section', PricingSection);