function Logout() {
  const [show, setShow] = React.useState(false);
  const ctx = React.useContext(UserContext);

  {
    /* if (ctx.activeUser[0].name !== "") {
      setShow(true);
    } */
  }

  React.useEffect(() => {
    if (ctx.activeUser[0].name !== "") {
      setShow(true);
    }
  }, [ctx.activeUser[0].name]);

  function handleLogout() {
    alert(
      `You have successfully logged out, ${ctx.activeUser[0].name}. See you soon!`
    );
    ctx.activeUser = [
      {
        name: "",
        balance: "",
      },
    ];
    setShow(false);
  }

  return show ? (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Logout"
      title={`Welcome to your bank, ${ctx.activeUser[0].name}`}
      text={`Your balance is: $${ctx.activeUser[0].balance}`}
      body={
        <>
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      }
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank exit page"
      title="Please login to access your account"
      body={
        <>
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        </>
      }
    />
  );
}
