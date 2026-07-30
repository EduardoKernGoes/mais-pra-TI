import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from '../../contexts/AuthContext'
import Header from './Header'

function renderizarHeader(){
  render(
    <MemoryRouter>
      <AuthProvider>
        <Header tema="light" alternarTema={() => {}}/>
      </AuthProvider>
    </MemoryRouter>
  )
}

describe('Header', () => {
  beforeEach(() => localStorage.clear())

  it('mostrar o link entrar quando ninguém está logado', () => {
    renderizarHeader()
    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })

  it('mostrar a saudação quando há usuário salvo', () => {
    localStorage.setItem('usuario', JSON.stringify({nome: 'J. Jonah Jameson'}))

    renderizarHeader()

    expect(screen.getByText(/J. Jonah Jameson/)).toBeInTheDocument()
  })
})