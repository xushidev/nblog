import { React, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

// accessible to login

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <label>
          Login page!
        </label>
        <label>
          username
        </label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          placeholder="john doe"
          className="p-2 rounded m-2"
        />

        <label>password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="*****"
          className="p-2 rounded m-2"
        />
        <button 
          type="submit"
          className="btn btn-block"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
