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
            <div>lol</div>;
          }
        }}
      >
        <p>Name</p>
        <input
          value={username}
          className="text"
          placeholder="Jean Dupont"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <p>Email</p>
        <input
          value={email}
          className="email"
          placeholder="jeandupont@lereacteur.io"
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Password</p>
        <input
          value={password}
          className="password"
          placeholder="IErEaCtEuR2020"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p>Confirm your password</p>
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
