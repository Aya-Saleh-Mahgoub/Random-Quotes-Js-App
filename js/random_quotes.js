var quotes=[
    {'quote': '“ Be yourself; everyone else is already taken. ”',
     'author': "― Oscar Wilde",
     'color':"#cb3772",
    },
    {'quote': '“ It\'s not what happens to you, but how you react to it that matters. ”',
     'author': "― Epictetus",
     'color':"#ef4533"
    },
    {'quote':'“ The best revenge is massive success. ”',
    'author':"― Frank Sinatra",
     'color':"#f2762c"
    },
    {'quote': '“ You miss 100% of the shots you don\'t take. ”',
    'author':"― Wayne Gretzy",
     'color':"#29acc0"
    },
    {'quote': '“ Resentment is like drinking poison and waiting for your enemies to die.”',
    'author':"Nelson Mandela",
     'color':"#566cb4"
    },
    
    {'quote': '“ Do not take life too seriously. You will not get out alive. ”',
    'author':"― Elbert Hubbard",
     'color':"#6c4ea1"
    },
];
let lastIndex=-1;
console.log(lastIndex)
function getQuotes(){
    let newIndex;
    console.log(lastIndex);
    do{
        newIndex=Math.floor(Math.random()*quotes.length);
    }while(newIndex==lastIndex);
    lastIndex=newIndex;
    console.log(newIndex);
    document.getElementById('quoteDisplay').innerHTML=quotes[newIndex].quote;
    document.getElementById('authorDisplay').innerHTML=quotes[newIndex].author;
    document.body.style.backgroundColor = quotes[newIndex].color;
    document.body.style.color = quotes[newIndex].color;
    document.querySelector('.btn').style.backgroundColor = quotes[newIndex].color;
}