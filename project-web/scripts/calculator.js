document.addEventListener('DOMContentLoaded', () => {
    const savingsForm = document.getElementById('savings-form');
    const savingsResult = document.getElementById('savings-result');

    savingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fuelConsumption = parseFloat(document.getElementById('current-fuel-car').value);
        const monthlyKm = parseFloat(document.getElementById('monthly-kilometers').value);
        const fuelPrice = parseFloat(document.getElementById('fuel-price').value);

        const monthlyFuelCost = (monthlyKm / fuelConsumption) * fuelPrice;
        const estimatedElectricCost = monthlyFuelCost * 0.3;
        const monthlySavings = monthlyFuelCost - estimatedElectricCost;
        const yearlySavings = monthlySavings * 12;

        savingsResult.innerHTML = `
            <h2>Savings Analysis</h2>
            <div class="result-details">
                <p>Monthly Fuel Cost: $${monthlyFuelCost.toFixed(2)}</p>
                <p>Estimated Electric Vehicle Cost: $${estimatedElectricCost.toFixed(2)}</p>
                <p>Monthly Savings: $${monthlySavings.toFixed(2)}</p>
                <p>Yearly Savings: $${yearlySavings.toFixed(2)}</p>
                <p class="savings-highlight">Potential Annual Savings: ${((monthlySavings / monthlyFuelCost) * 100).toFixed(1)}%</p>
            </div>
        `;

        // Store in localStorage
        localStorage.setItem('savingsCalculation', JSON.stringify({
            monthlyFuelCost,
            estimatedElectricCost,
            monthlySavings,
            yearlySavings
        }));
    });
});