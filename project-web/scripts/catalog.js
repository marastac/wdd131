document.addEventListener('DOMContentLoaded', () => {
    const carCatalog = document.getElementById('car-catalog');

    const electricCars = [
        {
            name: 'Tesla Model 3',
            range: 500,
            price: 40000,
            image: 'images/tesla-model-3.jpg',
            description: 'Sleek and high-performance electric sedan with cutting-edge technology.'
        },
        {
            name: 'Nissan Leaf',
            range: 350,
            price: 32000,
            image: 'images/nissan-leaf.jpg',
            description: 'Affordable and practical electric hatchback for urban driving.'
        },
        {
            name: 'Chevrolet Bolt',
            range: 420,
            price: 35000,
            image: 'images/chevy-bolt.jpg',
            description: 'Compact electric vehicle with impressive range and modern design.'
        },
        {
            name: 'Hyundai Kona Electric',
            range: 415,
            price: 34000,
            image: 'images/hyundai-kona.jpg',
            description: 'Versatile electric SUV with excellent range and comfort.'
        },
        {
            name: 'Porsche Taycan',
            range: 380,
            price: 80000,
            image: 'images/porsche-taycan.jpg',
            description: 'Luxury high-performance electric sports car with exceptional engineering.'
        },
        {
            name: 'BMW i4',
            range: 475,
            price: 55000,
            image: 'images/bmw-i4.jpg',
            description: 'Premium electric sedan combining BMW driving dynamics with zero emissions.'
        }
    ];

    electricCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h2>${car.name}</h2>
            <div class="car-details">
                <p><strong>Range:</strong> ${car.range} km</p>
                <p><strong>Price:</strong> $${car.price}</p>
                <p>${car.description}</p>
            </div>
        `;
        carCatalog.appendChild(carCard);
    });
});