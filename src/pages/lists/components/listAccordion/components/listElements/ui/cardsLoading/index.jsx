import "./cardsLoading.css"

export default function CardsLoading(){
    return(
        [...Array(5)].map((_, index) => (
            <div
              key={index}
              className="cardLoading"
            />
          ))
    )
}