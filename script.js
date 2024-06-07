document.getElementById('teamForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const names = [
        document.getElementById('name1').value.trim(),
        document.getElementById('name2').value.trim(),
        document.getElementById('name3').value.trim(),
        document.getElementById('name4').value.trim(),
        document.getElementById('name5').value.trim()
    ];

    const message = document.getElementById('message').value.trim();

    const data = {
        names: names,
        message: message
    };

    fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        alert('Formulário enviado com sucesso!');
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário.');
    });
});
