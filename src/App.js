import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import React from "react";
import Meme_data from "./Meme_data";
function App() {
  const x = React.useState("Aryan");
  console.log(x);
  return (
    <div className="page">
      <Header />
      <Form {...Meme_data} />
    </div>
  );
}

export default App;
