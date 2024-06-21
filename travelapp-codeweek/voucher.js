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
        const end = new Date(2006, 0, 1); 
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
                } 
                else {
                    noBonusSection.appendChild(userInfoDiv);
                }
            });
        
        })
        .catch(error => console.error('Error fetching users:', error));
    });
