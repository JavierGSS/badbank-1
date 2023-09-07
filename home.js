function Home() {
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
      header={`Welcome to BadBank, ${ctx.activeUser[0].name}`}
      title={`Your balance is $${ctx.activeUser[0].balance}`}
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Please login to access your account."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
