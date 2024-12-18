document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Savings Calculator
    const savingsForm = document.getElementById('savings-form');
    const savingsResult = document.getElementById('savings-result');

    savingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fuelConsumption = parseFloat(document.getElementById('current-fuel-car').value);
        const monthlyKm = parseFloat(document.getElementById('monthly-kilometers').value);
        const fuelPrice = parseFloat(document.getElementById('fuel-price').value);

        const monthlyFuelCost = (monthlyKm / fuelConsumption) * fuelPrice;
        const estimatedElectricCost = monthlyFuelCost * 0.3; // Estimated 70% savings

        savingsResult.innerHTML = `
            <h3>Resultados de Ahorro</h3>
            <p>Costo mensual actual en combustible: $${monthlyFuelCost.toFixed(2)}</p>
            <p>Costo estimado con auto eléctrico: $${estimatedElectricCost.toFixed(2)}</p>
            <p>Ahorro mensual aproximado: $${(monthlyFuelCost - estimatedElectricCost).toFixed(2)}</p>
        `;

        // Store results in localStorage
        localStorage.setItem('lastSavingsCalculation', JSON.stringify({
            fuelConsumption,
            monthlyKm,
            fuelPrice,
            monthlyFuelCost,
            estimatedElectricCost
        }));
    });

    // Electric Car Catalog
    const carList = document.getElementById('car-list');
    const electricCars = [
        { name: 'Tesla Model 3', range: 500, price: 40000 },
        { name: 'Nissan Leaf', range: 350, price: 32000 },
        { name: 'Chevrolet Bolt', range: 420, price: 35000 }
    ];

    electricCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <h3>${car.name}</h3>
            <p>Autonomía: ${car.range} km</p>
            <p>Precio: $${car.price}</p>
        `;
        carList.appendChild(carCard);
    });
});


