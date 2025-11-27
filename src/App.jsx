import React, { lazy, Suspense } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Home } from "./components/sections/Home";

// Lazy load below-the-fold components for better initial load performance
const Expertise = lazy(() => import("./components/sections/Expertise").then(module => ({ default: module.Expertise })));
const Case = lazy(() => import("./components/sections/Case").then(module => ({ default: module.Case })));
const Question = lazy(() => import("./components/sections/Question").then(module => ({ default: module.Question })));
const Feedback = lazy(() => import("./components/sections/Feedback").then(module => ({ default: module.Feedback })));
const Contact = lazy(() => import("./components/sections/Contact").then(module => ({ default: module.Contact })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Suspense fallback={<LoadingFallback />}>
        <Expertise />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Case />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Question />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Feedback />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
