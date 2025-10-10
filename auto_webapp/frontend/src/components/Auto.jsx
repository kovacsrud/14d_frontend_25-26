function Auto({ auto }) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{auto.marka} {auto.tipus}</h2>
        <p>
          {auto.rendszam}
        </p>
        <p>{auto.gyartasiev}</p>
        <p>{auto.szin}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Módosítás</button>
          <button className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Auto;
