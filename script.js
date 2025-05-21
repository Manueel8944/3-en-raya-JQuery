$(document).ready(function () {
    let turnos = ['x', 'o']
    let turnoActual = 0
    let tablero = [" ", " ", " ", " ", " ", " " , " ", " ", " "]
    let ganadoras = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    let victoriasx = 0
    let victoriaso = 0

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
        let indexGanadoras
        for(let i = 0; i < ganadoras.length; i++){
            
            let [a, b, c] = ganadoras[i]
            if (tablero[a] != " " && tablero[a] == tablero[b] && tablero[a] == tablero [c]) {
                ganador = tablero[a]
                indexGanadoras = ganadoras[i]
            }
        }

        let win = {0: ganador, 1: indexGanadoras}    

        return win
    }

    $(".item").on("click", function(){
        
        let indice = $(this).attr("id")

        if(comprobarCelda(indice)){
            $(this).text(turnos[turnoActual])
            tablero[indice] = turnos[turnoActual]

            if(comprobarGanador()[0] == "x") {
                let celdas = comprobarGanador()[1];
                $("#" + celdas[0]).css("background-color", "rgb(75, 192, 75)");
                $("#" + celdas[1]).css("background-color", "rgb(75, 192, 75)");
                $("#" + celdas[2]).css("background-color", "rgb(75, 192, 75)");
                tablero = ["", "", "", "", "", "" , "", "", ""]
                victoriasx++
                $("#contx").text("x: " + victoriasx)
                $("#contx").css("background-color", "rgb(75, 192, 75)")
                cambiarTurno()

            }

            else if(comprobarGanador()[0] == "o"){
                let celdas = comprobarGanador()[1];
                $("#" + celdas[0]).css("background-color", "rgb(75, 192, 75)");
                $("#" + celdas[1]).css("background-color", "rgb(75, 192, 75)");
                $("#" + celdas[2]).css("background-color", "rgb(75, 192, 75)");
                tablero = ["", "", "", "", "", "" , "", "", ""]
                victoriaso++
                $("#conto").text("o: " + victoriaso)
                $("#conto").css("background-color", "rgb(75, 192, 75)")
                cambiarTurno()
            }

            else{
                console.log(tablero)
                cambiarTurno()
            }
        }
    })

    $(".reset").on("click",function(){
        tablero = [" ", " ", " ", " ", " ", " " , " ", " ", " "]
        $(".item").text("")
        $(".item").css("background-color", "white");
        $("#conto").css("background-color", "white")
        $("#contx").css("background-color", "white")
    })
})