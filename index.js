function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "Javier",
                email: "jagasal@gmail.com",
                password: "secret",
                balance: 100,
              },
            ],
            activeUser: [
              {
                name: "",
                balance: "",
              },
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/balance/" component={Balance} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/login/" component={Login} />
          <Route path="/logout/" component={Logout} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
