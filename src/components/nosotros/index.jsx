import TypeWriter from "./../typeWriter";

export default function Nosotros(){
  return(
    <div style={{width:"50%", height:"50%"}}>
      <div style={{width:"100%", height:"50%"}}>
        <img src="/images/fotoNosotros.jpeg" alt="" style={{height:"100%", width:"auto"}} />
      </div>
      <div style={{width:"100%", height:"50%"}}>
        <TypeWriter 
          text="Somos una familia conformada por un desarrollador web con experiencia en comunicación audiovisual, una animadora digital especializada en animación 2D y diseño, conocida como Tefi, y un bebé que es nuestro motor y fuente de inspiración.
          Juntos, unimos nuestras habilidades para ofrecer servicios de animación digital y diseño pensados especialmente para ser implementados en sitios web. Nuestro objetivo es ayudar a potenciar la identidad de marca de cada cliente a través de nuestro trabajo"
          speed={10}
        />
      </div>
    </div>
  )
}