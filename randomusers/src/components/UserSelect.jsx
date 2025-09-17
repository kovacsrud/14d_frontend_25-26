function UserSelect({setUserNum}) {
  return (
    <div className="m-10 flex flex-row items-center justify-center">
      <select onChange={(e)=>setUserNum(e.target.value)}  className="select select-success">
        <option selected value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        
      </select>
    </div>
  );
}

export default UserSelect;
