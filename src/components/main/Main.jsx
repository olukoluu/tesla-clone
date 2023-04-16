import React from "react";
import Section from "./Section";

const Main = () => {
  return (
    <main>
      <Section
        model={"Model S"}
        summary={<span>View Inventory</span>}
        img={"Model-S"}
      />

      <Section
        model={"Model 3"}
        summary={"Leasing starting at $349/mon"}
        img={"Model-3"}
      />

      <Section
        model={"Model X"}
        summary={<span>View Inventory</span>}
        img={"Model-X"}
      />

      <Section
        model={"Model Y"}
        summary={<span>View Inventory</span>}
        img={"Model-Y"}
      />

      <Section
        model={"Solar Roof"}
        summary={"Produce Clean Energy From Your Roof"}
        img={"solarroof"}
      />

      <Section
        model={"Solar Panels"}
        summary={"Lowest Cost Solar Panels in America"}
        img={"solarPanels"}
      />

      <Section model={"Accessories"} img={"accesories"} />

      <footer>
        <code>Developed by Sekani</code>
      </footer>
    </main>
  );
};

export default Main;
