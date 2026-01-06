import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  }

  return (
    <div>
      Login page!
      <div>
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <input 
            type='text'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder='john doe'
          />

          <label>password</label>
          <input 
            type='password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder='johndoe-password'
          />
        <button type='submit'>
          login
        </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
