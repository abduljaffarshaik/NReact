import React from "react";
import ReactDOM from "react-dom/client";
// import image from "./Images/cameo_res.png";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
       return <div className="App">
                <Header/>
                <Outlet/>
       </div> 
}

const AppRouter = createBrowserRouter([
       {
              path: "/",
              element: <AppLayout/>,
              children: 
              [
                     {
                            path: "/",
                            element: <Body/>,
                     },
                     {
                            path: "/about",
                            element: <About/>,
                     },
                     {
                            path: "/contact",
                            element: <Contact/>,
                     },
                     {
                            path: "/restaurant/:resId",
                            element: <RestaurantMenu/>,
                     },
              ],
              errorElement: <Error/>,
       },
      
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);














// const parent = React.createElement("div" , {id : "parent"}, [React.createElement("div", {id : "child"}, [ React.createElement("h1", {}, "I am H1 Tag"),  React.createElement("h2", {}, "I am H2 Tag")] ), React.createElement("div", {id : "child1"}, [ React.createElement("h1", {}, "I am H1 Tag"),  React.createElement("h2", {}, "I am H2 Tag")]) ], React.createElement("div", {id : "child2"}, [ React.createElement("h1", {}, "I am H1 Tag"),  React.createElement("h2", {}, "I am H2 Tag")]) );

//  const heading = React.createElement('p', {id : 'ttle'}, "Hello Jaffar This is React Program");

//         const root = ReactDOM.createRoot(document.getElementById('root'));

//         root.render(parent);

//         console.log(parent);

// const heading = React.createElement("h1", {id: "heading"}, "Hello Jaffar!");

//  const jsxHeading = <h1 id="heading" className="headClass" tabIndex={1}>Hello Jaffar this is jsxHeading!</h1>
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
   

// React Components
// const HeadingCompoent1 = () => <h1>React Functional Components1</h1>;
// const HeadingCompoent = () => {
//         return <h1>React Functional Components</h1>
// }
// const HeadingCompoent3 = () => true;


// const elem = <span>This is Span Element</span>

// const title = (
//         <h1 className="titleEle">This is React Element</h1>
// );

// const Title = () => (
        
//         <h1 className="ttlComp">
//                 {title}
//                 Hello Jaffare You are started practicing React Js</h1>
// );

// const HeadingCompoent = () => (
//         <div id="container">  
//         <Title/> 
//         {elem}
//          <h1 className="fnComponent">React Functional Components</h1>
//         </div>
// );

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - - Restaurant Cards
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */