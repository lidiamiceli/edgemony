document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        switch (event.target.id) {
            case 'button1':
                console.log('Button 1 clicked');
                break;
            case 'button2':
                console.log('Button 2 clicked');
                break;
            case 'button3':
                console.log('Button 3 clicked');
                break;
            default:
                console.log('Other button clicked');
        }
    }
});