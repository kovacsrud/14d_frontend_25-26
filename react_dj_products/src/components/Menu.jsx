import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav class="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300">
        <div class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div class="flex items-center gap-8">
            <div class="flex items-center gap-8">
                <Link to='/'
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                href="#"
              >
                Főoldal
              </Link>
              <Link to='/products'
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                href="#"
              >
                Termékek
              </Link>
              <a
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                href="#"
              >
                Rólunk
              </a>
              <a
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                href="#"
              >
                Kapcsolat
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full">
              <span class="material-symbols-outlined text-outline text-sm">
                search
              </span>
              <input
                class="bg-transparent border-none focus:ring-0 text-sm w-48 font-body"
                placeholder="Keresés..."
                type="text"
              />
            </div>
            <button class="primary-gradient text-on-primary px-6 py-2.5 rounded font-semibold text-sm scale-95 active:scale-90 transition-transform shadow-lg shadow-primary/20">
              Belépés
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
