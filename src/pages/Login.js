
import React from 'react';

function Login() {
  return (
    <div>
      <form>
      <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button><br></br>
        <br></br>
      <p>Don't have an account? <a href="/register">Register here</a></p>
      </form>
    </div>
  );
}

export default Login;
