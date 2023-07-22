var card = document.getElementById('card'),
    btn = document.getElementById('btn');

    console.log(card,btn)

    var qutes= [
        ` <p id="qoute" >
        “ Be yourself ; everyone else is already taken. ”
        </p>
        <span class="auther"> ― Oscar Wilde</span>`,
        ` <p id="qoute" >
         “ Two things are infinite: the universe and human stupidity ; <br> and I'm not sure about the universe. ”
        </p>
        <span class="auther"> ― Albert Einstein </span>`,
        ` <p id="qoute" >
        “ A room without books is like a body without a soul. ”
        </p>
        <span class="auther"> ― Marcus Tullius Cicero </span>`,
        ` <p id="qoute" >
        “ “You only live once, but if you do it right, once is enough. ”
        </p>
        <span class="auther"> ― Mae West</span>`,
        ` <p id="qoute" >
        “You know you're in love when you can't fall asleep <br>
         because reality is finally better than your dreams.”
        </p>
        <span class="auther"> ― Dr. Seuss</span>`,
        ` <p id="qoute" >
        “Be the change that you wish to see in the world.”
        </p>
        <span class="auther"> ― Mahatma Gandhi</span>`
    ]

    var qut;
    
    function randomQutes(){
         qut = qutes[Math.floor(Math.random() * qutes.length)];
        card.innerHTML = qut;
  
    }
       

    

    
    