function Deposit() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [balance, setBalance] = React.useState(ctx.activeUser[0].balance);

  let show = false;
  if (ctx.activeUser[0].name != "") {
    show = true;
  } else {
    show = false;
  }

  function clearForm() {
    setAmount("");
  }

  function validateDeposit(field, label) {
    if (!field) {
      setStatus(`Error: ${label} not provided`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (amount <= 0) {
      setStatus(`Error: ${label} must be greater than 0`);
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validateDeposit(amount, "amount")) return;
    let checkAmount = confirm(
      `The amount to deposit is $${amount}. Is this correct?`
    );
    if (checkAmount === true) {
      ctx.activeUser[0].balance =
        Number(ctx.activeUser[0].balance) + Number(amount);
      alert(`Your new balance is $${ctx.activeUser[0].balance}`);
      setBalance(ctx.activeUser[0].balance);
    } else {
      alert("Please enter the correct amount");
      clearForm();
    }
  }

  return show ? (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      title={`Welcome to BadBank, ${ctx.activeUser[0].name}`}
      text={`Your balance is: $${balance}`}
      body={
        <>
          <input
            type="number"
            className="form-control"
            id="deposit"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
          <br />
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Confirm
          </button>
        </>
      }
      status={status}
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      title="Please login to access your account."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
