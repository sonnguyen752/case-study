function addChar(input, character) {
    if (input.value == null|| input.value == 0) {
        input.value = character;
    } else 
    {
        input.value += character;
    }
}
function checkNum(str) {
    for(i = 0; i< str.length; i++) {
        var ch = str.charAt(i);
        if (ch < 0 || ch > 9) {
            if(ch!= '+' && ch!= '-'&& ch!= '*' && ch!= '/'&& ch!= '(' && ch!= ')'&& ch!= '.'&& ch!='^') {
                alert ("phép tính không hợp lệ");
                return false;
            }
        }
    }
    return true;
}
function calculate() {
    var x = displayBox.value;
    var a = x.indexOf("^");
    if (a > -1) {
    var b = x.substring(0,a);
    var c = x.substring(a+1,x.length);
    displayBox.value = Math.pow(b,c);
    } else 
    displayBox.value = eval(displayBox.value);
}
function sqrt() {
    displayBox.value = Math.sqrt(displayBox.value);
}
function square() {
    displayBox.value = Number(displayBox.value) * Number(displayBox.value);
}
function factorial() {
    var number = 1;
    if (displayBox.value === 0) {
        displayBox.value = "1";
    } else if (displayBox.value < 0) {
        displayBox.value = "undefined";
    } else {
        for (var i = displayBox.value; i > 0; i--) {
        number *=  i;
        }
      displayBox.value = number;
    }
}
function percent() {
    displayBox.value = displayBox.value * 0.01;
}
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}
function sin() {
    displayBox.value = Math.sin(displayBox.value);
}
function cos() {
    displayBox.value = Math.cos(displayBox.value);
}
function tan() {
    displayBox.value = Math.tan(displayBox.value);
}
function reverse() {
    displayBox.value =  1 / (displayBox.value);
}

