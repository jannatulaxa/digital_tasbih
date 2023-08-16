// id called from html...................................
const Subhanalllah_Display = document.getElementById('Subhanalllah_Display') //Subhanalllah_Incriment
const subhanalllah_Incriment = document.getElementById('subhanalllah_Incriment')
const Subhanalllah_Decriment = document.getElementById('Subhanalllah_Decriment')

const Bismillah_Display = document.getElementById('Bismillah_Display')
const Bismilla_Incriment = document.getElementById('Bismilla_Incriment')
const Bismilla_Decriment = document.getElementById('Bismilla_Decriment')

const Alhamdulillah_Display = document.getElementById('Alhamdulillah_Display')
const Alhamdulillah_Incriment = document.getElementById('Alhamdulillah_Incriment')
const Alhamdulillah_Decriment = document.getElementById('Alhamdulillah_Decriment')

const Reset = document.getElementById('Reset')


// initial_value...............................................
let Subhanalllah_value = 0;
let Bismilllah_value = 0;
let Alhamdulilllah_value = 0;


// read 33 subhanallah............................................
subhanalllah_Incriment.addEventListener('click',function(){

    if(Subhanalllah_value == 33){
        return alert('Complate Your Tasbih')
    }

    Subhanalllah_value += 1
    Subhanalllah_Display.innerText = Subhanalllah_value
})
Subhanalllah_Decriment.addEventListener('click',function(){

    if(Subhanalllah_value == 0){
        return alert('You can not added negative value')
    }

    Subhanalllah_value -= 1
    Subhanalllah_Display.innerText = Subhanalllah_value
})


// read 33 Bismillah............................................
Bismilla_Incriment.addEventListener('click',function(){

    if(Bismilllah_value == 33){
        return alert('Complate Your Tasbih')
    }

    Bismilllah_value += 1
    Bismillah_Display.innerText = Bismilllah_value
})
Bismilla_Decriment.addEventListener('click',function(){

    if(Bismilllah_value == 0){
        return alert('You can not added negative value')
    }

    Bismilllah_value -= 1
    Bismillah_Display.innerText = Bismilllah_value
})


// read 33 Alhamdulillah............................................
Alhamdulillah_Incriment.addEventListener('click',function(){

    if(Alhamdulilllah_value == 33){
        return alert('Complate Your Tasbih')
    }

    Alhamdulilllah_value += 1
    Alhamdulillah_Display.innerText = Alhamdulilllah_value
})
Alhamdulillah_Decriment.addEventListener('click',function(){

    if(Alhamdulilllah_value == 0){
        return alert('You can not added negative value')
    }

    Alhamdulilllah_value -= 1
    Alhamdulillah_Display.innerText = Alhamdulilllah_value
})


// reset button.................................
Reset.addEventListener('click', function(){
    Subhanalllah_Display.innerText = 0
    Bismillah_Display.innerText = 0
    Alhamdulillah_Display.innerText = 0

    Subhanalllah_value = 0;
    Bismilllah_value = 0;
    Alhamdulilllah_value = 0;
})