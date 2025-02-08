function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states) {

       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("log").innerHTML+="<br>Habitación: ".concat(location).concat(" | Acción: ").concat(action_result);
       if (action_result == "CLEAN"){
			if (location == "A") {
				states[1] = "CLEAN";
				contadorEstados++;
			} else if (location == "B") {
				states[2] = "CLEAN";
				contadorEstados++;
			}
       } else {
            if (states[0] == "A" && states[1] == "CLEAN" && states[2] == "CLEAN"){
                states[0] = "B";
                states[1] = "DIRTY";
                states[2] = "DIRTY";
                contadorEstados++;
            }
            else if (action_result == "RIGHT"){
                states[0] = "B";
                contadorEstados++;
            } 
            else if (action_result == "LEFT"){
                states[0] = "A";
                countstates++;
            } 
      }
      if (countstates < 8) setTimeout(function () { test(states); }, 2000); 
}

var states = ["A","DIRTY","DIRTY"];
var contadorEstados = 0; //Para contar los estados por los que pasa
test(states);

//Estado1(A, DIRTY, DIRTY)
//Estado3(A, CLEAN, DIRTY)
//Estado7(B, CLEAN, DIRTY)
//Estado8(B, CLEAN, CLEAN)
//Estado4(A, CLEAN, CLEAN)

//Estado6(B, DIRTY, CLEAN)
//Estado2(A, DIRTY, CLEAN)

//Estado5(B, DIRTY, DIRTY)