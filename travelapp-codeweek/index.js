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

        const cardTitle = document.createElement('h4');
        cardTitle.textContent = cardData.title;

        const cardLink = document.createElement('a');
        cardLink.textContent = 'Scopri di più';
        cardLink.href = cardData.link;
        cardLink.target = '_blank';

        cardContent.append(cardTitle, cardLink);
        //cardContent.append(cardLink);

        card.append(cardImage, cardContent);
        //card.appendChild(cardContent);

        return card;
    }

    //AGGIUNGO LE CARD AL DOM
    function addCardsToContainer(container, cards) {
        cards.forEach(cardData => {
            const cardElement = createCard(cardData);
            container.append(cardElement);
        });
    }

    addCardsToContainer(bestSellerContainer, bestSellerData);

    
    addCardsToContainer(viaggiContainer, viaggiData);
