function check() {
    let weight = parseFloat(document.getElementById('firstbox').value);
    let height = parseFloat(document.getElementById('secondbox').value);
    let bmi = (weight / ((height * height) / 10000));

    if (bmi < 16) {
        document.getElementById('result').innerHTML = `Under Weight: `+bmi
    
    } else if (bmi >= 16 && bmi < 17) {
        document.getElementById('result').innerHTML = `Moderate Thiness: `+ bmi;
    } else if(bmi >= 17 && bmi<18.5 ){
        h1.innerHTML="Mid Thiuness: " + bmi
    }
    else if(bmi >= 18.5 && bmi<25 ){
        document.getElementById('result').innerHTML='Normal: ' + bmi
    }
    else if(bmi >= 25 && bmi<30 ){
        document.getElementById('result').innerHTML='OberWeight: ' + bmi
    }
    else {
        document.getElementById('result').innerHTML="Danger: " + bmi
    }
    }

