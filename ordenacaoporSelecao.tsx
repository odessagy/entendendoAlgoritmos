export default function ordenacaoporSelecao() {

  function buscaMenor(arr:any[]) {
    let menor = arr[0]
    let menor_indice = 0

    for(let i = 0; i < arr.length; i++){
      if( arr[i] < menor ){
        menor = arr[i]
        menor_indice = i
      }
    }

    return menor_indice
  }

  function ordenacaoPorSelecao(arr:any[]) {
    let novoArr:any[] = []
    let copyArray:any[] = [...arr]

    for(let i = 0; i < arr.length; i++){
      let menor = buscaMenor(copyArray)
      novoArr.push(copyArray.splice(menor,1)[0])// remove o menor numero do array cópia e o coloca em um novo array
    }

    return novoArr
  }

  const arrayParaOrdenar = [5, 3, 6, 2, 10]
  const arrayOrdenado = ordenacaoPorSelecao(arrayParaOrdenar)

  console.log("Array a ser ordenado - ", arrayParaOrdenar)
  console.log("Novo Array ordenado - ", arrayOrdenado)


  return(
    <div>
      <h1>Algoritmo Ordenação por Seleção</h1>
    </div>
  )
}