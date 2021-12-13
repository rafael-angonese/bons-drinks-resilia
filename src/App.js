import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="grid">
      <div className="box item1">One</div>
      <div className="box item2">Two</div>

      <div className="box item3">
        <div className="box1">Content</div>
        <div className="box1">Content</div>
        <div className="box1">Content</div>
        <div className="box1">Content</div>
        <div className="box1">Content</div>
        <div className="box1">Content</div>
        <div className="box1">Content</div>
        {/* <div className="box1">Content</div> */}
       
      </div>

      <div className="box item4">Four</div>
      <div className="box item5">Five</div>
      <div className="box item6">Six</div>
      <div className="box item7">Seven</div>
      <div className="box item8">Eight</div>
      <div className="box item9">Nine</div>
    </div>
  );
}

export default App;
