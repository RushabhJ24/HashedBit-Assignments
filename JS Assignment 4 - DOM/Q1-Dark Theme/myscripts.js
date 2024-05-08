function swapTheme() {
    /* let document.querySelector('#app').classList;
    console.log(temp); */
    var li = document.getElementById('app');
    console.log(li.className);
    if(li.className==="day"){
    
    document.querySelector('#app').classList.remove('day');
      document.querySelector('#swap').classList.remove('button_day');
      
      document.querySelector('#app').classList.add('night');
      document.querySelector('#swap').classList.add('button_night');
    }
    else{
    document.querySelector('#app').classList.remove('night');
      document.querySelector('#swap').classList.remove('button_night');
      
      document.querySelector('#app').classList.add('day');
      document.querySelector('#swap').classList.add('button_day');
    }
    
    }