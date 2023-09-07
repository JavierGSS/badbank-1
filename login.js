function Login() {
  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function clearForm() {
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function validate(field, label) {
    let positive;

    if (!field) {
      setStatus(`Error: ${label} not provided`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (ctx.users.some((item) => item.email === email)) {
      positive = ctx.users.filter((item) => item.email === email);
      console.log(positive);
    } else {
      setStatus(
        `Sorry, the email ${email} is not registered. Please try again`
      );
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }

    if (positive[0].password === password) {
      console.log("password OK");
      setName(positive[0].name);
      ctx.activeUser[0].name = positive[0].name;
      ctx.activeUser[0].balance = positive[0].balance;
      console.log("Active user: ", ctx.activeUser);
      return true;
    } else {
      setStatus("Incorrect password. Please try again");
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }
  }

  function handleLogin() {
    if (!validate(email, "email")) return;
    clearForm();
    setShow(false);
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={
        show ? (
          <>
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>Welcome to BadBank, {name}</h5>
          </>
        )
      }
    />
  );
}
