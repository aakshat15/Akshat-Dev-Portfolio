import { HeroGeometric } from "./Component/HeroGeometric";
import "./App.css";
import { DisplayCardsDemo } from "./Component/ExpertiseCard/DisplayCardsDemo";
import Projects from "./Component/Projects/Projects";
import DemoVariant1 from "./Component/Contact/LotiContactDemo";
function App() {
  return <>
    <div>
      <HeroGeometric badge="Developer" title1="Akshat.__" title2="___. Ydv" />
      <DisplayCardsDemo />
      < Projects />
      <DemoVariant1 />

    </div>
  </>
}

export default App;
