function Main() {
  return (
    <div>
      <main class="flex-grow flex items-center justify-center py-20 lg:py-32">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Üdvözöljük körünkben
          </div>
          <h1 class="headline-font text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
            Üdvözöljük a Dummy.Inc oldalán!
          </h1>
          <p class="text-xl lg:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-body">
            Elkötelezettek vagyunk a prémium minőség és a folyamatos innováció
            mellett, hogy a legkiválóbb élményt nyújthassuk Önnek minden nap.
          </p>
          <div class="mt-12 flex justify-center gap-4">
            <button class="primary-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300">
              Fedezze fel értékeinket
            </button>
          </div>
        </div>
      </main>

      <footer class="bg-slate-50 dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div class="max-w-7xl mx-auto px-8 py-16">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="col-span-1 md:col-span-2">
              <a
                class="text-lg font-bold text-slate-900 dark:text-white headline-font mb-6 block"
                href="#"
              >
                Dummy.Inc
              </a>
              <p class="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed font-body">
                A jövő technológiája, ma. Elkötelezettek vagyunk a minőség és az
                innováció mellett, hogy ügyfeleinknek a legjobbat nyújthassuk.
              </p>
              <div class="flex gap-4">
                <a
                  class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-all text-slate-900 dark:text-white"
                  href="#"
                >
                  <span class="material-symbols-outlined text-sm">public</span>
                </a>
                <a
                  class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-all text-slate-900 dark:text-white"
                  href="#"
                >
                  <span class="material-symbols-outlined text-sm">
                    alternate_email
                  </span>
                </a>
                <a
                  class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-all text-slate-900 dark:text-white"
                  href="#"
                >
                  <span class="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div>
              <h4 class="text-blue-800 dark:text-blue-300 font-bold Manrope uppercase text-xs tracking-widest mb-6">
                Navigáció
              </h4>
              <ul class="space-y-4">
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Termékek
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Rólunk
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Kapcsolat
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-blue-800 dark:text-blue-300 font-bold Manrope uppercase text-xs tracking-widest mb-6">
                Jogi információk
              </h4>
              <ul class="space-y-4">
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Adatvédelem
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Feltételek
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    Süti beállítások
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-body text-sm"
                    href="#"
                  >
                    GYIK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-slate-500 dark:text-slate-500 text-sm font-body">
              © 2024 Dummy.Inc. Minden jog fenntartva.
            </p>
            <div class="flex items-center gap-6">
              <span class="material-symbols-outlined text-slate-400">
                payments
              </span>
              <span class="material-symbols-outlined text-slate-400">
                credit_card
              </span>
              <span class="material-symbols-outlined text-slate-400">
                account_balance_wallet
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
