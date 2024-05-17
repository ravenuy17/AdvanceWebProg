import React, { useState } from 'react';

function SignUp() {
  const [userType, setUserType] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement further logic like sending the data to a server, etc.
    console.log("User Type: " + userType);
    console.log("Username: " + username);
    console.log("Password: " + password);
    alert("Sign up successful!");
    // You can redirect the user to another page or perform any other action after sign up.
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userType">I am a:</label><br />
        <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select><br /><br />
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
