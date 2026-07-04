class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="d-flex justify-content-between align-items-center py-3">
                <h1>
                    Eduardo Goes
                </h1>
                <nav class="navbar navbar-expand-md" aria-label="Navbar navigation">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <ul id="navbarNav" class="navbar-nav collapse navbar-collapse gap-5">
                            <li clas="nav-item">    
                                <a class="nav-link">Sobre</a>
                            </li>
                            <li clas="nav-item">
                                <a class="nav-link">Contato</a>
                            </li>
                            <li clas="nav-item">
                                <a class="nav-link">Projetos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        `
    }
}

customElements.define('site-header', Header);