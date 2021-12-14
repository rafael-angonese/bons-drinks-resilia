import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="grid">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
