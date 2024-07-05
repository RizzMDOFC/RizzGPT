body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    height: 80%;
}

header {
    background: #3b82f6;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto;
}

#chat-box {
    flex-grow: 1;
    margin-bottom: 10px;
    overflow-y: auto;
}

.message {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    width: fit-content;
}

.user {
    background-color: #e1f5fe;
    align-self: flex-end;
}

.gpt {
    background-color: #e0f7fa;
    align-self: flex-start;
}

.input-box {
    display: flex;
}

#user-input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    outline: none;
}

#send-button {
    padding: 10px 20px;
    border: none;
    background: #3b82f6;
    color: white;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    transition: background 0.3s;
}

#send-button:hover {
    background: #2563eb;
}

footer {
    background: #f1f5f9;
    padding: 10px;
    text-align: center;
    font-size: 12px;
    color: #555;
}
