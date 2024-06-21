//VOUCHER
document.addEventListener('DOMContentLoaded', () => {
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = today.getMonth() - birthDateObj.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    };
    
    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    const generateRandomDateOfBirth = () => {
        const start = new Date(1949, 0, 1);
        const end = new Date(1989, 0, 1);
        return randomDate(start, end).toISOString().split('T')[0];
    };

    const bonusSection = document.getElementById('bonus');
    const reservesSection = document.getElementById('reserves');
    const noBonusSection = document.getElementById('no-bonus');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                user.dateOfBirth = generateRandomDateOfBirth();
                const age = calculateAge(user.dateOfBirth);
                const userInfoDiv = document.createElement('div');
                userInfoDiv.classList.add('user-info');
                userInfoDiv.innerHTML = `<h4>Nome:</h4><p>${user.name}</p><h4>Numero di Telefono:</h4><p> ${user.phone}</p><h4>Età:</h4><p> ${age}</p>`;

                if (age >= 18 && age <= 35) {
                    bonusSection.appendChild(userInfoDiv);
                } else if (age >= 36 && age <= 64) {
                    reservesSection.appendChild(userInfoDiv);
                } else {
                    noBonusSection.appendChild(userInfoDiv);
                }
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});


//CARDS
    const bestSellerContainer = document.getElementById('best-seller-cards');
    const viaggiContainer = document.getElementById('viaggi-cards');

    //CARDS BEST SELLER
    const bestSellerData = [
        { title: 'Relax, vino e buon cibo in Toscana', imageUrl: './img/tuscany.jpg', link: 'https://example.com/best-seller-1' },
        { title: 'Volo in Mongolfiera per 5 persone', imageUrl: './img/mongolfiera.jpg', link: 'https://example.com/best-seller-2' },
        { title: '3 notti a Londra con tour', imageUrl: './img/londra.jpg', link: 'https://example.com/best-seller-3' }
    ];

    //CARDS VIAGGI
    const viaggiData = [
        { title: 'Phi Phi Island', imageUrl: './img/phi.phi.jpg', link: 'https://example.com/viaggio-1' },
        { title: 'Capo Verde', imageUrl: './img/capoverde.jpg', link: 'https://example.com/viaggio-2' },
        { title: 'Grecia', imageUrl: './img/grecia.jpg', link: 'https://example.com/viaggio-3' }
    ];

    //CREO SINGOLA CARD
    function createCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        cardImage.style.backgroundImage = `url(${cardData.imageUrl})`;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = cardData.title;

        const cardLink = document.createElement('a');
        cardLink.textContent = 'Scopri di più';
        cardLink.href = cardData.link;
        cardLink.target = '_blank';

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardLink);

        card.appendChild(cardImage);
        card.appendChild(cardContent);

        return card;
    }

    //AGGIUNGO LE CARD AL DOM
    function addCardsToContainer(container, cards) {
        cards.forEach(cardData => {
            const cardElement = createCard(cardData);
            container.appendChild(cardElement);
        });
    }

    addCardsToContainer(bestSellerContainer, bestSellerData);

    
    addCardsToContainer(viaggiContainer, viaggiData);

