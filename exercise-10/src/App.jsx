import UserList from "./UserList";
function App() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;