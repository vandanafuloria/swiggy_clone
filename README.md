  <!-- REAct and react dom : react.createElement is core form react , but if we want to manipulate dom or put something in dom then react dom-->

    <!-- <h1>HEllo this is outside of root</h1>
    <div id="root">
      <h1>Hello i am form html</h1>
      if somehing would be here , then root.render(value) the value would replace the html value  -->
    <!-- REPLACED NOT APPENDED : react will work on reder id -->
    <!-- </div> -->
    <!-- <h1>HEllo this is outside of root</h1> -->

    <!-- <script>
      const root = document.getElementById("root");
      const heading = document.createElement("h1");
      heading.innerHTML = "HELLO WORLD I AM JAVASCRIPT !";
      root.appendChild(heading);
    </script> -->
    <!-- <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script> -->


    // const heading = React.createElement(

// this is a react element not html , is will give a object not a tag;
// "h1",
// { id: "heading" },
// "HELLO I AM REACT"
// ); // first paramenter element , {} second one is attribute tags last content;
// is a object
// const container = ReactDOM.createRoot(document.getElementById("root")); // Everything will be render inside root .
// const root = createRoot(container);

// react element is object while rendering on dom it convert into html tag

// Props : Children + attributes
// Render : converting the object to tag , like heading object to heading tag , and make the heading compatible for html;

// const parent = React.createElement
// "div",
// { className: "parent" },
// React.createElement("div", { className: "child" }, [
// React.createElement(
// "h1",
// { id: "heading1" },
// "I am from syntax of core react , i dont use jsx 🥹"
// ),
// React.createElement(
// "h1",
// { id: "heading2" },
// "I am from syntax of core react , i dont use jsx 🥹"
// ),
// ])

//
// planing is really important
/\*\* how page should look

- header => logo, nav, cart
- body => search bar, carts, footer
-
- \*/
