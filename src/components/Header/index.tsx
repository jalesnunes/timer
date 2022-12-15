import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <h1>
        <span>Pomodoro</span>Timer
      </h1>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
