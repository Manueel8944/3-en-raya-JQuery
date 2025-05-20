$(document).ready(function () {
    let turnos = ['x', 'o']
    let turnoActual = 0
    let tablero = [" ", " ", " ", " ", " ", " " , " ", " ", " "]
    let ganadoras = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,7], [2,4,6]
    ]

    function cambiarTurno(){

        if (turnoActual == 0){
            turnoActual = 1
        }

        else {
            turnoActual = 0
        }
    }

    function comprobarCelda(celda){

        if (tablero[celda] == " ") {
            return true
        }

        else {
            return false
        }

    }

    function comprobarGanador(){
        let ganador

        for(let i = 0; i < ganadoras.length; i++){
            
            let [a, b, c] = ganadoras[i]
            if (tablero[a] != " " && tablero[a] == tablero[b] && tablero[a] == tablero [c]) {
                ganador = tablero[a]
            }
        }

        return ganador
    }

    $(".item").on("click", function(){
        
        let indice = $(this).attr("id")

        if(comprobarCelda(indice)){
            $(this).text(turnos[turnoActual])
            tablero[indice] = turnos[turnoActual]
            cambiarTurno()
        }
    })
})