function Kutyanev({ kutyanev }) {
  return (
    <div className="card m-5 w-96 bg-lime-100 text-lime-800 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p>
          Id:{kutyanev.Id}
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Módosítás</button>
          <button className="btn btn-primary">Törlés</button>
        </div>
        <div className="justify-end card-actions">
          
        </div>
      </div>
    </div>
  );
}

export default Kutyanev;
