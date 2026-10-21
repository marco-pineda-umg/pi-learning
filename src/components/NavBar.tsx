const NavBar = () => {
  return (
    <nav className="sticky top-4 z-50 justify-center px-4">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between rounded-full bg-brand/90 px-6 shadow-lg shadow-black/10 ring-1 ring-white/20 backdrop-blur-xs">
        <a href="/" className="flex items-center">
          <img src="/logo.webp" alt="pi learning" className="h-10 w-auto" />
        </a>

        <a
          href="/iniciar-sesion"
          className="rounded-full px-4 py-2 text-lg font-medium text-gray-50 transition-colors hover:bg-white/15 hover:text-white"
        >
          Iniciar sesion
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
