import './nosotros.css'

export default function Nosotros(){
  return(
    <div className="bodyNosotros">
      <div className="containerNosotros">
        <div className="containerImageNosotros">
          <img src="/images/fotoNosotros.jpeg" alt="" style={{height:"100%"}} />
        </div>

        <div className="containerTextNosotros">
          <div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <h3 style={{fontSize:"1.5rem"}}>Contactanos</h3>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", padding:"1rem 0"}}>
              <ContactIcons />
            </div>
          </div>
          <p style={{color:"var(--black-tefi)"}}>
            Somos una familia conformada por un desarrollador web con experiencia en comunicación audiovisual, una animadora digital especializada en animación 2D con trayectoria en diseño (conocida como Tefi) y un bebé que es nuestro motor y fuente de inspiración.<br/>
            <br/>
            Juntos, unimos nuestras habilidades para ofrecer dos servicios pensados especialmente para implementarse en sitios web:<br/>
            <br/>
            1. Logos Animados<br/>
            2. Componentes<br/>
            <br/>
            Actualmente nos enfocamos exclusivamente en estos dos servicios, lo que nos permite entregar un trabajo detallado, equilibrando con dedicación nuestra vida familiar y creativa.<br/>
            <br/>
            Nuestro objetivo es ayudar a potenciar la identidad de marca de cada cliente a través de nuestro trabajo.<br/>
          </p>
        </div>

      </div>
    </div>
  )
}

const ContactIcons = ({marginIcons}) => {
  return(
    <>
      <div style={{margin: marginIcons}}>
        <a href="mailto:tefi@tefi.cl?subject=Me%20interesa%20su%20servicio%20de%20logotipos&body=Hola" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/290/994/small/line-art-mail-button-icon-in-flat-style-vector.jpg"
            alt="email"
            style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: "50px" }}
          />
        </a>
      </div>
        
      <div style={{margin: marginIcons}}>
        <a href="https://wa.me/56990059578?text=Hola%20quiero%20informacion%20sobre%20el%20servicio%20que%20ofrecen" target="_blank" rel="noopener noreferrer">
          <img
            src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
            alt="WhatsApp"
            style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: "50px" }}
          />
        </a>
      </div>
    </>
  )
}