import { useEffect, useState } from "react";
import { GithubUserInfo } from "./GithubUserInfo";

const URL = "https://api.github.com/users/";
export default function Github() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(URL + query);
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUser();
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="github-container">
      {console.log(user)}
      <h1 className="title">Github User Search</h1>
      <GithubForm onSubmit={handleSubmit} onChange={handleChange} />
      {user.login && <GithubUserInfo user={user} />}
    </div>
  );
}

function GithubForm({ onSubmit, onChange }) {
  return (
    <form className="github-form-container" onSubmit={onSubmit}>
      <input className="github-search-input" type="text" onChange={onChange} />
      <button className="github-search-button">Search</button>
    </form>
  );
}
