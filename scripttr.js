gsap.from("h1", {
    y:30, duration:2, repeatDelay: 0.7,
    ease: "bounce.out", delay: 1
})

const button = document.querySelector('#btn');
button.addEventListener('click', calculate);

function calculate(e) {
    e.preventDefault();
    const spentFuel = document.querySelector('#spentFuel').value;
    const traveledDistance = document.querySelector('#traveledDistance').value;
    const fuelPrice = document.querySelector('#fuelPrice').value;

    if(spentFuel === ""|| traveledDistance === "" || fuelPrice === ""){
        Swal.fire({
            title: 'Verileri giriniz!!!',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return false;
    }
    else if (isNaN(spentFuel) || isNaN(traveledDistance)|| isNaN(fuelPrice)){
        Swal.fire({
            icon: 'error',
            title: 'Hayır!',
            text: 'Sayı girmelisiniz!',
        })
        return false;
    }

    //средний расход топлива
    let consumption = (spentFuel / traveledDistance) * 100;
    //стоимость 1 км
    let rubKm = (consumption * fuelPrice) / 100;

    consumption = consumption.toFixed(1);
    rubKm = rubKm.toFixed(2);

    document.querySelector('#averageConsumption').value = consumption;
    document.querySelector('#kmRub').value = rubKm;

}