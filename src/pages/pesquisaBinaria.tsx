export default function pesquisaBinaria() {

    const minha_lista = [1, 3, 5, 7, 9]

    function pesquisa_binaria(lista:number[], item:number) {
        let baixo = 0
        let alto = lista.length - 1

        let meio, chute
        
        while(baixo <= alto) {
            meio = Math.floor((baixo + alto) / 2)
            chute = lista[meio]

            if(chute === item) {
                return meio
            } 

            if(chute > item) {
                alto = meio -1
            } else {
                baixo = meio + 1
            }
                     
        }
        
        return null
    }

    return(
        <div>
            <h1>Algoritmo Pesquisa Binária</h1>
            <p>O número pesquisado está na posição: {pesquisa_binaria(minha_lista, 3)}</p>
        </div>
    )
}

