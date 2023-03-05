
const text = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let Data = new Date();
let Hour = Data.getHours();
let Minutes = Data.getMinutes();
let time = Hour + ":" + Minutes;


const botReplies = ['Добрый день!',                    
                    'Кто тут?',
                    'Где ваша совесть?',                    
                    'Добрый день! До свидания!',                    
                    'Мы ничего не будем вам продавать!',
                    ];

function openChat() {
    const chat = document.querySelector('.chat-widget');
    
    chat.addEventListener('click', () => {
        chat.classList.add('chat-widget_active');        

    });
}

function getRandomReply() {
    let randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
    
    return randomReply;
}

function sendMessage() {  

    text.addEventListener('keypress', (e) => {

        if (e.key == 'Enter') {            
            // добавит
            messages.innerHTML +=` 
            <div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">${text.value}</div>
            </div>
            `;
            text.value = '';
            messages.innerHTML += `
            <div class="message">
                <div class="message__time">${time}</div>
                <div class="message__text">${getRandomReply()}</div>
            </div>
            `;
            messages.scrollIntoView(false);            
        }; 
   
    });
};

openChat(); 
sendMessage();
