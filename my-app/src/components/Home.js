import React from "react";
function Home() {
  return (
    <div className="main-container">
      <div>
        <article>
          <a href="http://shop-wizard.herokuapp.com/">
            <section id="Portfolio" class="card1">
              <h2 class="cardheader">A fun Mock Ecommerce project I collaborated on</h2>
            </section>
          </a>
          <a href="https://thawing-mesa-35152.herokuapp.com">
            <section id="Portfolio" class="card2">
              <h2 class="cardheader"> An educational website about Bitcoin.</h2>
            </section>
          </a>
          <a href="https://thawing-mesa-35152.herokuapp.com">
            <section id="Portfolio" class="card3">
              <h2 class="cardheader"> FairWeather Drink my First collab.</h2>
            </section>
          </a>
        </article>
      </div>
    </div>
  );
}

export default Home;
