function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>All data</h1>
      {JSON.stringify(ctx.users)}
    </>
  );
}
