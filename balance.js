function Balance() {
  const ctx = React.useContext(UserContext);

  let show = false;
  if (ctx.activeUser[0].name != "") {
    show = true;
  } else {
    show = false;
  }

  return show ? (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Balance"
      title={`Welcome to your bank, ${ctx.activeUser[0].name}`}
      text={`Your balance is: $${ctx.activeUser[0].balance}`}
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Balance"
      title="Please login to access your account."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
