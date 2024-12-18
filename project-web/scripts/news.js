document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    const newsItems = [
        {
            title: 'Tesla Announces New Long-Range Model',
            summary: 'Tesla unveils its most efficient electric vehicle with a range of over 600 kilometers.',
            image: 'images/tesla-news.jpg',
            date: '2024-03-15'
        },
        {
            title: 'Global EV Sales Surge in 2024',
            summary: 'Electric vehicle sales increase by 40% compared to the previous year.',
            image: 'images/ev-sales-news.jpg',
            date: '2024-02-20'
        },
        {
            title: 'New Battery Technology Promises Faster Charging',
            summary: 'Breakthrough in battery technology could reduce charging times to just 10 minutes.',
            image: 'images/battery-news.jpg',
            date: '2024-01-10'
        },
        {
            title: 'Government Increases EV Incentives',
            summary: 'New tax credits and rebates make electric vehicles more affordable.',
            image: 'images/incentives-news.jpg',
            date: '2024-04-05'
        },
        {
            title: 'Major Automakers Commit to Electric Future',
            summary: 'Top car manufacturers pledge to phase out combustion engine vehicles by 2035.',
            image: 'images/automakers-news.jpg',
            date: '2024-02-01'
        },
        {
            title: 'Charging Infrastructure Expansion Accelerates',
            summary: 'Thousands of new charging stations planned across the country.',
            image: 'images/charging-news.jpg',
            date: '2024-03-30'
        }
    ];

    newsItems.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-card-content">
                <h2>${news.title}</h2>
                <p>${news.summary}</p>
                <div class="date">${news.date}</div>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
});