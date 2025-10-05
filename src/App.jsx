import React from "react";
import { Navbar } from "./components/sections/Navbar";
import { Home } from "./components/sections/Home";
import { Expertise } from "./components/sections/Expertise";
import { Case } from "./components/sections/Case";
import { Question } from "./components/sections/Question";
import { Feedback } from "./components/sections/Feedback";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Expertise />
      <Case />
      <Question />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
