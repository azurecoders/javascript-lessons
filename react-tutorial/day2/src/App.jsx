import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CounterComponent from "./components/CounterComponent";
import NamesDisplayComponent from "./components/NamesDisplayComponent";
import LearningUseEffectHook from "./components/LearningUseEffectHook";

const App = () => {
  console.log("I am running React JS");

  const config = {
    app_name: "Cozy",
    app_slogan: "Better furniture for you",
    loggedin_user_name: "Muzammil",
  };

  return (
    <Fragment>
      <div>
        {/* Ternanry Operator */}
        {/* {age > 18 ? <h2>You are eligible</h2> : <h2>You are not eligible</h2>}

        <h1>Hello How are you?</h1> */}

        {/* <Navbar conI am running React JS
￼App.jsx:9 I am running React JSfig={config} />
        <Hero config={config} /> */}
        {/* <h1>This is my page</h1> */}

        {/* <CounterComponent /> */}

        {/* <NamesDisplayComponent /> */}

        <LearningUseEffectHook />
      </div>
    </Fragment>
  );
};

export default App;
