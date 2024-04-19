const Header = () => {
    return <header>        
        <div class="p-3 text-Light-emphasis bg-success">
        <h1 class="text-center">SPORT SHOP</h1>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#">Home</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Novedades</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Curvy</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Tops</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Shorts</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Leggings</a>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Categorias
                            </a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Ofertas</a></li>
                              <li><a class="dropdown-item" href="#">Conjuntos largo</a></li>
                              <li><a class="dropdown-item" href="#">Conjuntos cortos</a></li>
                              <li><a class="dropdown-item" href="#">Liquidación</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
        
    </header>;
}

export default Header;