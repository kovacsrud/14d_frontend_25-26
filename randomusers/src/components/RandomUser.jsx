function RandomUser({user}) {
  return (
    <div className="m-3 w-96 card card-side bg-lime-200 shadow-sm">
      <figure>
        <img
          src={user.picture.large}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phone}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Részletek</button>
        </div>
      </div>
    </div>
  );
}

export default RandomUser;
