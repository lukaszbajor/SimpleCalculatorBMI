const weight = document.querySelector('.kg');
const growth = document.querySelector('.cm');
const error = document.querySelector('.error');
const bmiDescribe = document.querySelector('.describe');
const bmiNumber = document.querySelector('.bmiNumber');
const bmiBtn = document.querySelector('.result');
const typeBMI = document.querySelector('.typeBmi');


let yourBMI;


const checkYourBMI = () => {

    const newWeight = weight.value;
    const newGrowth = growth.value;
    if (newWeight !== '' && newGrowth !== '') {
        yourBMI = (newWeight / Math.pow(newGrowth, 2) * 10000);
        bmiNumber.textContent = (Math.round(yourBMI * 100) / 100).toFixed(2);
        error.style.display = 'none';
        bmiDescribe.style.display = 'block';
    } else {
        error.style.display = 'block';
        bmiDescribe.style.display = 'none';
    }

    if (yourBMI < 18.5) {
        typeBMI.textContent = ' niedowagę';
        bmiDescribe.style.color = 'rgb(185, 71, 71)';
    } else if (yourBMI >= 18.5 && yourBMI <= 24.9) {
        typeBMI.textContent = ' wagę prawidłową';
        bmiDescribe.style.color = 'rgb(10, 104, 15)';
    } else if (yourBMI >= 25 && yourBMI <= 29.9) {
        typeBMI.textContent = ' nadwagę';
        bmiDescribe.style.color = 'rgb(168, 2, 2)';
    } else {
        typeBMI.textContent = ' OTYŁOŚĆ!';
        bmiDescribe.style.color = 'red';

    }

}

const checkYourBMIEnter = e => {
    if (e.keyCode === 13) return checkYourBMI();

}



bmiBtn.addEventListener('click', checkYourBMI)
document.addEventListener('keyup', checkYourBMIEnter)