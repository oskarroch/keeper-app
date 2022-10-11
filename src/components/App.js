import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function X(data) {
  return <Note key={data.id} title={data.title} content={data.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(X)}
      <Footer />
    </div>
  );
}

export default App;
