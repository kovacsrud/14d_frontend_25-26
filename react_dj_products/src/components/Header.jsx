function Header({szoveg}) {
  return (
    <div>
      <header className="w-full bg-[#0047AB] py-3 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-white text-xl font-bold tracking-tight headline-font">
            {szoveg}
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
