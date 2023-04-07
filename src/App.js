import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

// react aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // aos
  AOS.init({
    delay: 200, // Start the animation 200ms after the element enters the viewport
    duration: 1000, // The animation will take 1s to complete
    easing: "ease-in-out", // Use an easing function that starts and ends slowly
    mirror: true, // Mirror the animation on scroll up
    once: true, // Only animate the element once
    offset: 200, // Start the animation when the element is 200px from the top of the viewport
    anchorPlacement: "center-bottom", // The anchor point for the animation is at the center bottom of the element
  });
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
