export function GithubUserInfo({ user }) {
  return (
    <div className="github-user-container">
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <img
          className="github-user-pic"
          src={user.avatar_url}
          alt={user.login}
        />
      </a>
      <div className="github-user-info">
        {user.name && <div>Name: {user.name}</div>}
        {user.login && (
          <div>
            Username: <span>{user.login}</span>
          </div>
        )}
        {user.blog && (
          <div>
            Blog: <a href={user.blog}>Visit {user.login} website</a>
          </div>
        )}
      </div>
    </div>
  );
}
