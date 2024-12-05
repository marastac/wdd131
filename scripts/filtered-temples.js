// temples.js

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 26000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
      templeName: "Guatemala City Guatemala",
      location: "Guatemala City, Guatemala",
      dedicated: "1984, December, 1",
      area: 16000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 68000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    }
  ];
  
  function renderTempleCards() {
    const templesContainer = document.querySelector('.temple-cards');
  
    temples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card');
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = 'lazy';
  
      const name = document.createElement('h3');
      name.textContent = temple.templeName;
  
      const location = document.createElement('p');
      location.textContent = temple.location;
  
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} sq ft`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
  
      templesContainer.appendChild(card);
    });
  }
  
  function filterTemples(category) {
    const templesContainer = document.querySelector('.temple-cards');
    templesContainer.innerHTML = '';
  
    let filteredTemples = [];
    switch (category) {
      case 'old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')[1], temple.dedicated.split(', ')[0] - 1, temple.dedicated.split(', ')[2]) < new Date(1900, 0, 1));
        break;
      case 'new':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')[1], temple.dedicated.split(', ')[0] - 1, temple.dedicated.split(', ')[2]) > new Date(2000, 0, 1));
        break;
      case 'large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }
  
    filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card');
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = 'lazy';
  
      const name = document.createElement('h3');
      name.textContent = temple.templeName;
  
      const location = document.createElement('p');
      location.textContent = temple.location;
  
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} sq ft`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
  
      templesContainer.appendChild(card);
    });
  }
  
  // Update the copyright year
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Update the last modified date
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
  
  // Add event listeners to the navigation links
  document.getElementById('all').addEventListener('click', () => filterTemples());
  document.getElementById('old').addEventListener('click', () => filterTemples('old'));
  document.getElementById('new').addEventListener('click', () => filterTemples('new'));
  document.getElementById('large').addEventListener('click', () => filterTemples('large'));
  document.getElementById('small').addEventListener('click', () => filterTemples('small'));
  
  // Render the initial temple cards
  renderTempleCards();