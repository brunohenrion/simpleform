import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Create account</h1>
      </header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (username && email && password !== confirmPassword) {
            alert(`Vos deux mots de passe ne sont pas identiques`);
          } else if (username && email && password === confirmPassword) {
            <div>lolo</div>;
          }
        }}
      >
        <label for="name">Name</label>
        <input
          value={username}
          className="text"
          placeholder="Jean Dupont"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label for="email">Email</label>
        <input
          value={email}
          className="email"
          placeholder="jeandupont@lereacteur.io"
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="pass" for="password">
          Password
        </label>
        <input
          value={password}
          className="password"
          placeholder="IErEaCtEuR2020"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label className="confirm" for="Confirmpassword">
          Confirm your password
        </label>
        <input
          value={confirmPassword}
          className="confirmpassword"
          placeholder="IErEaCtEuR2020"
          type="password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
