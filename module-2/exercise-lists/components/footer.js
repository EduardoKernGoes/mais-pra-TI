class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="text-light py-5 mt-5">
                <div class="container d-flex justify-content-between align-items-center">
                    <p class="m-0">&copy; 2026 Eduardo Goes. Todos os direitos reservados.</p>
                    <div class="d-flex gap-3">
                        <a class="social-networks" href="https://www.linkedin.com/in/eduardo-kern-goes/" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-linkedin"></i>
                            Linkedin
                        </a>
                        <a class="social-networks" href="https://www.instagram.com/ek_goess/" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-instagram"></i>
                            Instagram
                        </a>
                        <a class="social-networks" href="https://github.com/EduardoKernGoes" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-github"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', Footer);