import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { buscarNoticia } from '../../services/noticias'
import './Materia.css'

function Materia() {
    const { id } = useParams()

    const [ noticia, setNoticia ] = useState([])
    const [ carregando, setCarregando ] = useState(true)
    const [ erro, setErro ] = useState('')
    
    useEffect(() => {
        async function carregar() {
            try{
                setCarregando(true)
                setErro('')
                const dadosNoticia = await buscarNoticia(id)
                setNoticia(dadosNoticia)
            } catch (erro){
                if(erro.status === 404){
                    setErro("Notícia não encontrada!")
                }else{
                    setErro("Não foi possível carregar a notícia")
                }
            } finally {
                setCarregando(false)
            }
        }

        carregar()
    }, [id])

    if(carregando) return <p className="aviso-tela">Carregando...</p>
    if(erro) {
        return (
            <main className='container materia'>
                <p className="aviso-tela">{erro}</p>
                <p>
                    <Link to="/">Voltar à capa</Link>
                </p>
            </main>
        )
    }

    return (
        <main className='container materia'>
            <Link to="/" className='materia__voltar'>Voltar à capa</Link>
            <span className='materia__categoria'>{noticia.categoria}</span>
            <h1>{noticia.titulo}</h1>
            <p className='materia__resumo'>{noticia.resumo}</p>
            <div className='materia__texto'>
                <p>{noticia.texto}</p>
            </div>
        </main>
    )
}

export default Materia