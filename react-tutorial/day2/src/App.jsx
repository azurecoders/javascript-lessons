import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CounterComponent from "./components/CounterComponent";
import NamesDisplayComponent from "./components/NamesDisplayComponent";
import LearningUseEffectHook from "./components/LearningUseEffectHook";
import MessageWindow from "./components/MessageWindow";
import MessageInput from "./components/MessageInput";

const App = () => {
  console.log("I am running React JS");

  const config = {
    app_name: "Cozy",
    app_slogan: "Better furniture for you",
    loggedin_user_name: "Muzammil",
  };

  // [
  //   {
  //     sender: "Muzammil",
  //     message:"Hi Ahmed how are you?"
  //   }
  // ]

  // Prop Drilling is for reading only

  const [messages, setMessages] = useState([
    {
      sender: "Muzammil",
      message: "Hi Ahmed how are you?",
    },

    {
      sender: "Ahmed",
      message: "Muzammil I am fine. What about you?",
    },
  ]);

  return (
    <Fragment>
      <div>
        {/* Ternanry Operator */}
        {/* {age > 18 ? <h2>You are eligible</h2> : <h2>You are not eligible</h2>}

        <h1>Hello How are you?</h1> */}

        {/* <Navbar config={config} />
        <Hero config={config} /> */}
        {/* <h1>This is my page</h1> */}

        {/* <CounterComponent /> */}

        {/* <NamesDisplayComponent /> */}

        <LearningUseEffectHook />
        {/* <LearningUseEffectHook /> */}

        {/* <MessageWindow messages={messages} />
        <MessageInput setMessages={setMessages} /> */}
      </div>
    </Fragment>
  );
};

export default App;
