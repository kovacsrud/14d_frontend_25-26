function Author({ author }) {
  return (
    <div className="m-5 card card-border bg-sky-200 w-96">
      <div className="card-body">
        <h2 className="card-title">{author.name}</h2>
        <p>
          {author.name} könyvei:
        </p>
        <ul>
            {
                author.books.map((book)=>(<li key={book.id}>{book.title}</li>))
            }
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Vásárlás</button>
        </div>
      </div>
    </div>
  );
}

export default Author;
