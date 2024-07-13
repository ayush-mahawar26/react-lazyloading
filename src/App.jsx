import React, { Suspense, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
const DashBoard = React.lazy(() => import("./components/dashboard"));
const Landing = React.lazy(() => import("./components/landing"));

function App() {
  // router
  return <Navigator />;
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <CountRender count={count} setCount={setCount}></CountRender>

  //   </div>
  // );
}

// function CountRender({ setCount }) {
//   return (
//     <div>
//       <ShowCount />
//       <CounterButton setCount={setCount} />
//     </div>
//   );
// }

// function ShowCount() {
//   var count = 0;
//   return <div>{count} </div>;
// }

// function CounterButton({ setCount }) {
//   var count = 1;
//   return (
//     <button
//       onClick={() => {
//         setCount(count + 1);
//       }}
//     >
//       Increment
//     </button>
//   );
// }

function Navigator() {
  <div>
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"loading.."}>
              <DashBoard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={"loading.."}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>;
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        DashBoard
      </button>
    </div>
  );
}

export default App;
