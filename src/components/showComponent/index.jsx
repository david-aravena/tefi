export default function ShowComponent({close, children}) {
  return(
    <div style={{
          position:"absolute", 
          top:0, 
          left:0, 
          width:"100%", 
          height:"100%", 
          display:"flex", 
          justifyContent:"center", 
          alignItems:"center",
          background: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(10px)",       
          WebkitBackdropFilter: "blur(10px)"
        }}>
          <div style={{position:"absolute", top:0, right:0}}>
            <button onClick={() => close()}>CERRAR</button>
          </div>
          {children}
        </div>
  )
}