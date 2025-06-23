import { StrictMode, useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser({ name: '', email: '', password: '' }); // Reset the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;