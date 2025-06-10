import Hamburger from '../../pages/home/components/buttonMenu'
import './navbar.css'

const VARIANTS = {
  black: {
    containerClass: 'navbarContainerBlack',
    logoClass: 'animatedLogoContainerTc',
    loadingClass: 'loadingTc',
    menuClass: 'menuContainer',
    hamburgerColor: 'white',
    linkColor: 'white'
  },
  criollito: {
    containerClass: 'navbarContainerCriollito',
    logoClass: 'animatedLogoContainerCriollito',
    loadingClass: 'loadingCriollito',
    menuClass: 'menuContainerWhite',
    hamburgerColor: '#cc0000',
    linkColor: 'red'
  },
  white: {
    containerClass: 'navbarContainerWhite',
    logoClass: 'animatedLogoContainerDevsafio',
    loadingClass: 'loadingDevsafio',
    menuClass: 'menuContainerWhite',
    hamburgerColor: 'blue',
    linkColor: 'black'
  }
}

export default function Navbar({ variant = 'black' }) {
  const {
    containerClass,
    logoClass,
    loadingClass,
    menuClass,
    hamburgerColor,
    linkColor
  } = VARIANTS[variant] || VARIANTS.black

  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <div className={containerClass}>
        <div className={logoClass}>
          <div className={loadingClass}></div>
        </div>
        <div className={menuClass}>
          <div className="hamburguerContainer">
            <Hamburger color={hamburgerColor} />
          </div>
          <div className="linksContainer">
            <p style={{ color: linkColor }}>About</p>
            <p style={{ color: linkColor }}>Contact</p>
            <p style={{ color: linkColor }}>Home</p>
          </div>
        </div>
      </div>
    </div>
  )
}