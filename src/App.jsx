// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import Red from "./components/Red";
// import Blue from "./components/Blue";
// import Home from "./components/Home";

// function App() {
//   return (
//     <>
//       <div id="navbar">
//         <Link to="/blue">Blue</Link>
//         <Link to="/red">Red</Link>
//         <Link to="/">Home</Link>
//       </div>
//       <div id="main-section">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/blue" element={<Blue />} />
//           <Route path="/red" element={<Red />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

// + Footer + Navbar + NavContainer
import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
