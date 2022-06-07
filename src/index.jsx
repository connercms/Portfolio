import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Work from "./pages/work";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadMe from "./pages/readme";
import PageNotFound from "./pages/page-not-found";
import Contact from "./pages/contact";
import Index from "./pages";

// function Test() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         flexBasis: 1,
//         backgroundColor: "black",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "between",
//           backgroundColor: "orange",
//         }}
//       >
//         <span>Foo</span>
//         <span>Bar</span>
//       </div>
//       <div
//         style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexGrow: 2,
//             backgroundColor: "blue",
//           }}
//         >
//           <p>Explorer</p>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "yellow",
//             flexGrow: 3,
//             overflowY: "auto",
//           }}
//         >
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             Elementum facilisis leo vel fringilla est ullamcorper eget nulla
//             facilisi. Magna etiam tempor orci eu lobortis elementum nibh tellus.
//             Feugiat nibh sed pulvinar proin gravida hendrerit. Nisl rhoncus
//             mattis rhoncus urna. Feugiat scelerisque varius morbi enim. At
//             varius vel pharetra vel turpis. Ipsum consequat nisl vel pretium
//             lectus quam id leo in. Elit ullamcorper dignissim cras tincidunt.
//             Egestas egestas fringilla phasellus faucibus scelerisque eleifend
//             donec. Sed felis eget velit aliquet sagittis id consectetur purus
//             ut. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.
//             Auctor neque vitae tempus quam pellentesque nec nam. Laoreet sit
//             amet cursus sit amet dictum. Leo urna molestie at elementum eu
//             facilisis sed odio morbi. A arcu cursus vitae congue mauris rhoncus
//             aenean vel elit. Amet volutpat consequat mauris nunc congue. Diam
//             maecenas sed enim ut sem viverra. Imperdiet massa tincidunt nunc
//             pulvinar sapien et. Eget felis eget nunc lobortis mattis aliquam
//             faucibus. Nunc non blandit massa enim nec dui nunc. A erat nam at
//             lectus. Duis ut diam quam nulla. Purus faucibus ornare suspendisse
//             sed nisi lacus. Suspendisse sed nisi lacus sed viverra tellus. Risus
//             nullam eget felis eget nunc. Sit amet facilisis magna etiam tempor
//             orci. Egestas diam in arcu cursus. Hendrerit dolor magna eget est.
//             Sit amet commodo nulla facilisi. At tempor commodo ullamcorper a
//             lacus vestibulum sed. In hendrerit gravida rutrum quisque non tellus
//             orci. Mi in nulla posuere sollicitudin. Ante metus dictum at tempor
//             commodo ullamcorper a lacus vestibulum. Ac ut consequat semper
//             viverra. Feugiat nisl pretium fusce id velit ut. Nec feugiat nisl
//             pretium fusce id velit. Quisque id diam vel quam. Nunc mattis enim
//             ut tellus elementum sagittis vitae et. Non nisi est sit amet
//             facilisis. Risus quis varius quam quisque id. Orci phasellus egestas
//             tellus rutrum. Blandit cursus risus at ultrices mi. Ut sem nulla
//             pharetra diam sit amet nisl. Id volutpat lacus laoreet non curabitur
//             gravida arcu ac tortor. Metus dictum at tempor commodo ullamcorper a
//             lacus vestibulum. Sed viverra ipsum nunc aliquet bibendum enim
//             facilisis gravida neque. Habitant morbi tristique senectus et netus
//             et malesuada fames ac. Convallis tellus id interdum velit laoreet
//             id. Hac habitasse platea dictumst quisque. Ut tristique et egestas
//             quis ipsum suspendisse ultrices. Morbi blandit cursus risus at
//             ultrices mi tempus. Massa enim nec dui nunc mattis enim ut tellus
//             elementum. Elementum curabitur vitae nunc sed velit dignissim
//             sodales ut. Sagittis id consectetur purus ut faucibus pulvinar
//             elementum. Aliquet nec ullamcorper sit amet. Pulvinar pellentesque
//             habitant morbi tristique senectus. Pharetra pharetra massa massa
//             ultricies mi quis. Facilisis gravida neque convallis a. Viverra
//             tellus in hac habitasse platea dictumst vestibulum. Mauris sit amet
//             massa vitae tortor condimentum lacinia. Quisque egestas diam in arcu
//             cursus euismod. Ut lectus arcu bibendum at varius. Ipsum consequat
//             nisl vel pretium. Massa sed elementum tempus egestas sed sed risus.
//             Sed libero enim sed faucibus. Habitant morbi tristique senectus et
//             netus et malesuada fames. Amet mattis vulputate enim nulla aliquet
//             porttitor lacus luctus. Velit ut tortor pretium viverra.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="readme" element={<ReadMe />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
