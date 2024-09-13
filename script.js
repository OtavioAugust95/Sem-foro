document.addEventListener('DOMContentLoaded', ()=>{
    const vermelho = document.getElementById('vermelho')
    const amarelo = document.getElementById('amarelo')
    const verde = document.getElementById('verde')

    let estadoAtual = 'amarelo'

    function alternarLuzes(){
        if(estadoAtual === 'amarelo'){
            vermelho.style.backgroundColor = '#a800005e';
            amarelo.style.backgroundColor = '#ffff00';
            verde.style.backgroundColor = '#00800080';
            estadoAtual = 'vermelho'
        }else if(estadoAtual === 'vermelho'){
            vermelho.style.backgroundColor = '#ff0000';
            amarelo.style.backgroundColor = '#a5a50088';
            verde.style.backgroundColor = '#00800080';
            estadoAtual = 'verde';
        }else if(estadoAtual === 'verde'){
            vermelho.style.backgroundColor = '#a800005e';
            amarelo.style.backgroundColor = '#a5a50088';
            verde.style.backgroundColor = '#00ff00';
            estadoAtual = 'amarelo'
        }        
    }
    setInterval(alternarLuzes, 2000);
});