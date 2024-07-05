document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;
    
    addMessage('user', userInput);
    document.getElementById('user-input').value = '';

    fetchGPTResponse(userInput);
}

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function fetchGPTResponse(userInput) {
    const prompt = `Namamu RizzGPT, kamu terhubung dengan GPT-4.o, jawab ini: ${userInput}`;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-proj-5LV4Xw2GLwAtyIfcqkzCT3BlbkFJturLjFC5LZytD8dfaVwo'
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        const gptMessage = data.choices[0].text.trim();
        addMessage('gpt', gptMessage);

    } catch (error) {
        console.error('Error fetching GPT response:', error);
        addMessage('gpt', 'Sorry, there was an error processing your request.');
    }
}
