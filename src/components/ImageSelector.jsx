export default function ImageSelector({clickedImg}) {
  const blackSeal = '/images/cornell-seal-black.svg'
  const redSeal = '/images/cornell-seal-red.svg'

  return (
    <div className="selector">
      <button onClick={()=>clickedImg(blackSeal)}>
        <img src={blackSeal} />
      </button>
      <button onClick={()=>clickedImg(redSeal)}>
        <img src={redSeal} />
      </button>
      <button onClick={()=>clickedImg(undefined)}>
        <em>None</em>
      </button>
    </div>
  )
}
