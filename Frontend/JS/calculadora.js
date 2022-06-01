res = document.getElementById("resultado");
calc = document.getElementById("calc");

//converte o valor do input e transforma em calculo.
function Total() {
  var resv = res.value;
  var calcv = calc.value;

  res.value = eval(calcv);
  calc.value = eval(calcv);
}

//resgata o sinal de operação e adiciona ao input.
function addOper(oper) {
  slc = res.value;
  sOpers = " " + oper + " ";

  if (res.value == "0") {
    res.value = "";
    calc.value = "";
  }

  if (slc.slice(-1) == ")") {
    switch (oper) {
      case "+":
        res.value = res.value + sOpers;
        calc.value = calc.value + oper;
        break;
      case "–":
        res.value = res.value + "-";
        calc.value = calc.value + "-";
        break;
      case "×":
        res.value = res.value + sOpers;
        calc.value = calc.value + "*";
        break;
      case "÷":
        res.value = res.value + sOpers;
        calc.value = calc.value + "/";
        break;
      default:
        break;
    }
  } else if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
    res.value = res.value;
    calc.value = calc.value;
  } else {
    switch (oper) {
      case "+":
        res.value = res.value + sOpers;
        calc.value = calc.value + oper;
        break;
      case "–":
        res.value = res.value + "-";
        calc.value = calc.value + "-";
        break;
      case "×":
        res.value = res.value + sOpers;
        calc.value = calc.value + "*";
        break;
      case "÷":
        res.value = res.value + sOpers;
        calc.value = calc.value + "/";
        break;
      default:
        res.value = res.value + oper;
        calc.value = calc.value + oper;
        break;
    }
  }
}

//reculpera o valor do botão que fez a ação e adiciona no input.
function addNum(num) {
  //se o valor do input for '0' ele limpa e adiciona o valor resgatado.
  if (res.value == "0") {
    res.value = "";
    calc.value = "";
    res.value = parseInt(num);
    calc.value = parseInt(num);
  } else {
    //caso não seja zero, ele busca o valor atual e concatena com o digitado.
    res.value = res.value + parseInt(num);
    calc.value = calc.value + parseInt(num);
  }
}

//exclui os 3 ultimos ou O ultimo caractere do input, dando a função do backspace
function bs() {
  var resv = document.getElementById("resultado").value;
  var clv = document.getElementById("calc").value;

  //caso o ultimo caractere seja um espaço em branco, ele deleta os 3 ultimos caracteres.
  if (resv.slice(-1) == " ") {
    document.getElementById("resultado").value = resv.substring(
      0,
      resv.length - 3
    );
    document.getElementById("calc").value = clv.substring(0, clv.length - 1);
  } else {
    //caso não seja, ele deleta apenas o ultimo caractere.
    document.getElementById("resultado").value = resv.substring(
      0,
      resv.length - 1
    );
    document.getElementById("calc").value = clv.substring(0, clv.length - 1);
  }

  //caso não sobre nenhum caractere, ele reseta para o '0'.
  if (res.value == "") {
    calc.value = "0";
    res.value = "0";
  }
}

//substitui todo o valor do input para '0'.
function clean() {
  res.value = "0";
  calc.value = "0";
}

/***************HOTKEY (atalhos no teclado)***************/

//função que lê clicks no teclado.
document.onkeyup = function (e) {
  slc = res.value;
  switch (e.which) {
    case 97: //caso a tecla pressionada for key97 (numero 1)
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "1";
        calc.value = calc.value + "1";
      } else {
        res.value = res.value + "1";
        calc.value = calc.value + "1";
      }
      break;
    case 98: //caso a tecla pressionada for key98 (numero 2)
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "2";
        calc.value = calc.value + "2";
      } else {
        res.value = res.value + "2";
        calc.value = calc.value + "2";
      }
      break;
    case 99:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "3";
        calc.value = calc.value + "3";
      } else {
        res.value = res.value + "3";
        calc.value = calc.value + "3";
      }
      break;
    case 100:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "4";
        calc.value = calc.value + "4";
      } else {
        res.value = res.value + "4";
        calc.value = calc.value + "4";
      }
      break;
    case 101:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "5";
        calc.value = calc.value + "5";
      } else {
        res.value = res.value + "5";
        calc.value = calc.value + "5";
      }
      break;
    case 102:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "6";
        calc.value = calc.value + "6";
      } else {
        res.value = res.value + "6";
        calc.value = calc.value + "6";
      }
      break;
    case 103:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "7";
        calc.value = calc.value + "7";
      } else {
        res.value = res.value + "7";
        calc.value = calc.value + "7";
      }
      break;
    case 104:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "8";
        calc.value = calc.value + "8";
      } else {
        res.value = res.value + "8";
        calc.value = calc.value + "8";
      }
      break;
    case 105:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "9";
        calc.value = calc.value + "9";
      } else {
        res.value = res.value + "9";
        calc.value = calc.value + "9";
      }
      break;
    case 96:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "0";
        calc.value = calc.value + "0";
      } else {
        res.value = res.value + "0";
        calc.value = calc.value + "0";
      }
      break;
    case 190:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + ".";
        calc.value = calc.value + ".";
      } else {
        if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + ".";
          calc.value = calc.value + ".";
        }
      }
      break;
    case 107:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + " + ";
        calc.value = calc.value + "+";
      } else {
        if (slc.slice(-1) == ")") {
          res.value = res.value + " + ";
          calc.value = calc.value + "+";
        } else if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + " + ";
          calc.value = calc.value + "+";
        }
      }
      break;
    case 109:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + " - ";
        calc.value = calc.value + "-";
      } else {
        if (slc.slice(-1) == ")") {
          res.value = res.value + " - ";
          calc.value = calc.value + "-";
        } else if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + " - ";
          calc.value = calc.value + "-";
        }
      }
      break;
    case 106:
    case 88:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + " × ";
        calc.value = calc.value + "*";
      } else {
        if (slc.slice(-1) == ")") {
          res.value = res.value + " × ";
          calc.value = calc.value + "*";
        } else if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + " × ";
          calc.value = calc.value + "*";
        }
      }
      break;
    case 111:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + " ÷ ";
        calc.value = calc.value + "/";
      } else {
        if (slc.slice(-1) == ")") {
          res.value = res.value + " ÷ ";
          calc.value = calc.value + "/";
        } else if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + " ÷ ";
          calc.value = calc.value + "/";
        }
      }
      break;
    case e.shiftKey && 57:
      if (res.value == "0") {
        res.value = "";
        calc.value = "";
        res.value = res.value + "(";
        calc.value = calc.value + "(";
      } else {
        if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + "(";
          calc.value = calc.value + "(";
        }
      }
      break;
    case e.shiftKey && 48:
      if (res.value == "0") {
        res.value = "0";
      } else {
        if (isNaN(slc.slice(-1)) || slc.slice(-1) == " ") {
          res.value = res.value;
        } else {
          res.value = res.value + ")";
          calc.value = calc.value + ")";
        }
      }
      break;
    case 13:
      Total();
      break;
    case 8:
      bs();
      break;
    case 46:
    case 67:
      clean();
      break;
    default:
      break;
  }
};

