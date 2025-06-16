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
          </div>
          <p style={{color:"var(--black-tefi)"}}>
            Somos una familia conformada por un desarrollador web con experiencia en comunicación audiovisual, una animadora digital especializada en animación 2D con trayectoria en diseño (conocida como Tefi) y un bebé que es nuestro motor y fuente de inspiración.<br/>
            <br/>
            Juntos, unimos nuestras habilidades para ofrecer dos servicios pensados especialmente para implementarse en sitios web:<br/>
            <br/>
            <span style={{ fontWeight: "bold", color:"var(--back-tefi)" }}>
              1. Logos Animados<br/>
              2. Componentes<br/>
            </span>
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
