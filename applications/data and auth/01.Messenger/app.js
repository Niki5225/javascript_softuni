function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;
    const refreshBtn = document.getElementById('refresh');
    const sendMessage = document.getElementById('submit');
    const messagesArea = document.getElementById('messages');

    sendMessage.addEventListener('click', () => {

        const data = {
            author,
            content
        }
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .catch(err => console.log(err));
    });

    refreshBtn.addEventListener('click', () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => renderAllMessages(Object.values(result)));
    });

    function renderAllMessages(messages) {
        messages.forEach(x => messagesArea.textContent += `${x.author}: ${x.content}\n`);
    }

    function createMessage(message) {
        p.textContent = `${message.author}: ${message.message}`;
        return p;
    }

}

attachEvents();