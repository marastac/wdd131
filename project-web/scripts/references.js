document.addEventListener('DOMContentLoaded', () => {
    const referencesContainer = document.getElementById('references-container');

    const references = [
        {
            title: 'Electric Vehicle Battery Technology',
            source: 'International Energy Agency',
            description: 'Comprehensive report on the latest advancements in electric vehicle battery technology and future projections.'
        },
        {
            title: 'Global EV Outlook 2024',
            source: 'BloombergNEF',
            description: 'Annual analysis of electric vehicle market trends, sales, and technological innovations.'
        },
        {
            title: 'Sustainable Transportation Research',
            source: 'MIT Energy Initiative',
            description: 'In-depth study on the environmental impact and future potential of electric vehicles.'
        },
        {
            title: 'EV Charging Infrastructure Development',
            source: 'Department of Energy',
            description: 'Comprehensive guide to the expansion of electric vehicle charging networks across the country.'
        },
        {
            title: 'Economic Impacts of Electric Mobility',
            source: 'World Economic Forum',
            description: 'Analysis of the economic implications of the global transition to electric vehicles.'
        },
        {
            title: 'Consumer Adoption of Electric Vehicles',
            source: 'McKinsey & Company',
            description: 'Research on consumer attitudes, barriers, and trends in electric vehicle adoption.'
        }
    ];

    references.forEach(ref => {
        const referenceItem = document.createElement('div');
        referenceItem.classList.add('reference-item');
        referenceItem.innerHTML = `
            <h2>${ref.title}</h2>
            <div class="source">${ref.source}</div>
            <div class="description">${ref.description}</div>
        `;
        referencesContainer.appendChild(referenceItem);
    });
});