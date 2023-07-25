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
import Hod from "./components/HOD/Hod";
import Approvals from "./components/HOD/Approvals";
import Appointments from "./components/HOD/Appointments";

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
  {
    path: "/choose/hod",
    element: <Hod />,
  },
  {
    path: "/choose/hod/approvals",
    element: <Approvals />,
  },
  {
    path: "/choose/hod/appointments",
    element: <Appointments />,
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
