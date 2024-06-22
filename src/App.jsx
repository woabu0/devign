import React from "react";
import { Navbar } from "./comp/Navbar/Navbar";
import { Home } from "./comp/Home/Home";
import { Showcase } from "./comp/Showcase/Showcase";
import { Expertise } from "./comp/Expertise/Expertise";
import { Case } from "./comp/Case/Case";
import { Question } from "./comp/Question/Question";
import { Feedback } from "./comp/Feedback/Feedback";
import { Contact } from "./comp/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Showcase />
      <Expertise />
      <Case />
      <Question />
      <Feedback />
      <Contact />
      
    </div>
  );
}

export default App;
