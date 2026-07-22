import './Header.css'

function Header() {
    const hoje = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', uear: 'numeric'
    })

    return (
        <header className='cabecalho'>
            <div className='cabecalho__faixa'>
                <span>Edição de nova York</span>
                <span>{hoje}</span>
                <span>U$ 1,50</span>
            </div>
            <h1 className='cabecalho__titulo'>o clarim diário</h1>
            <p className='cabecalho__lema'>A verdade doa a quem doer - Inclusive a certos aracnídeos</p>
            <nav className='cabecalho__menu'>
                <a href="">Cidade</a>
                <a href="">Ameaças Urbanas</a>
                <a href="">Opinião do Editor</a>
                <a href="">Esportes</a>
                <a href="">Classificados</a>
            </nav>
        </header>
    )
}

export default Header