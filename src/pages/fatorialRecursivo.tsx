export default function fatorialRecursivo() {

  function fat(x:number):number {
    if(x == 1) {
      return 1
    } else {
      return x * fat(x - 1)
    }
  }

  return(
    <div>
      <h1>Fatorial Recursivo</h1>
      <div>
        <h2>O fatorial de 5 é: {fat(5)}</h2>
      </div>
    </div>
  )
}