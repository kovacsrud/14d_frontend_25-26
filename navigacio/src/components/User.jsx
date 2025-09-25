function User({ user }) {
  return (
    <div className="m-3 card bg-sky-200 text-sky-800 w-96">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>
          Cím:{user.address.street} {user.address.suite} {user.address.city}
        </p>
        <p>Email:{user.email}</p>
        <p>Website:{user.website}</p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
}

export default User;
