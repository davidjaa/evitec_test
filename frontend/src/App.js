import { useState } from "react";
import LiquidEther from './LiquidEther';
import './style.css';

function App() {
  const [form, setForm] = useState({ firstName: "", lastName: "", personalCode: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.text();
    setMessage(result);
  };

  return (
    <div className="app-wrapper">
      {/* Taust */}
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      />

      {/* Vorm */}
      <div className="container">
        <h1 className="heading">Lisa uus klient</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input className="input" name="firstName" placeholder="Eesnimi" onChange={handleChange} />
          <input className="input" name="lastName" placeholder="Perenimi" onChange={handleChange} />
          <input className="input" name="personalCode" placeholder="Isikukood" onChange={handleChange} />
          <input className="input" name="email" placeholder="E-post" onChange={handleChange} />
          <button className="button" type="submit">Salvesta</button>
        </form>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
