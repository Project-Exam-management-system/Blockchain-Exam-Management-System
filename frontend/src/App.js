import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Lecturer from "./components/Lecturer/Lecturer";
import Questions from "./components/Questions/Questions";
import Review from "./components/Review/Review";
import Photocopy from "./components/Photocopy/Photocopy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "choose",
    element: <Choose />,
  },
  {
    path: "/choose/lecturer",
    element: <Lecturer />,
  },
  {
    path: "/choose/lecturer/questions",
    element: <Questions />,
  },
  {
    path: "/choose/lecturer/review",
    element: <Review />,
  },
  {
    path: "/choose/photocopy",
    element: <Photocopy />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
