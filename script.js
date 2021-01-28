// const divImg = document.querySelectorAll('.imgContent');
// const divType = document.querySelectorAll('.typePokemon');
const divRow = document.querySelector('.centerContent');

// let newDiv = content.cloneNode(true); //n sei porque esta errado

let k = 0
for(let i = 1 ; i < 31; i++){
    const pokedex = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(r => r.json())
        .then((body) => {
            // console.log(body)
            const content = document.querySelectorAll('.sectionPokemon');
            let contentImg = content[k].querySelector('.imgContent');
            contentImg.setAttribute('src',body.sprites.back_default);
            let contentNome = content[k].querySelector('.nomePokemon');
            contentNome.innerText = body.name.toUpperCase();
            let contentType = content[k].querySelector('.typePokemon');
            // contentType.innerText = body.types[0].type.name  //adicionar contandor
            for(let s = 0; s<body.types.length; s++){
                if(body.types[s].type.nome =! null){
                    const newType = document.createElement('p')
                    newType.innerText = body.types[s].type.name
                    newType.innerText = newType.innerText[0].toUpperCase() + newType.innerText.slice(1);
                    colorType(newType); //colocar cor nos Types
                    contentType.appendChild(newType);
                }
            }
            if(contentType.children.length < 2){
                contentType.classList.remove('typePokemonDi')
                contentType.classList.add('typePokemonNewDi')
            }
            // console.log(contentNome)
            k++
            if(k%3 == 0){
                //ou cloneNode
                let newRow = document.createElement('div')
                newRow.classList.add('rowContent')
                let g = 0;
                while(g < 3){
                    let newNome = document.createElement('div')
                    newNome.classList.add('nomePokemon')
                    let contentDiv = document.createElement('div')
                    contentDiv.classList.add('sectionPokemon')

                    let contentNewImg = document.createElement('img')
                    contentNewImg.classList.add('imgContent')

                    let contentNewType = document.createElement('div')
                    contentNewType.classList.add('typePokemon');
                    contentNewType.classList.add('typePokemonDi')
                    //adicionar no html
                    divRow.appendChild(newRow);
                    newRow.appendChild(contentDiv);
                    contentDiv.appendChild(contentNewImg);
                    contentDiv.appendChild(newNome);
                    contentDiv.appendChild(contentNewType);
                    g++
                }
            }
            })
}
setTimeout(()=>{
    const totalDivFinal = document.querySelectorAll('.sectionPokemon');
    // console.log(totalDivFinal);
    totalDivFinal.forEach((iten)=>{
        if(iten.children[0].attributes[1] == null){
            // console.log('encontrado')
            iten.remove();
        }else{
            // console.log('nada encontrado');
        }
    })
},1000);

function colorType(divType){
    const nomeType = divType.innerText;
    switch(nomeType){
        case 'Normal':
            divType.classList.add('colorNormal')
            break;
        case 'Bug':
            divType.classList.add('colorBug')
            break;
        case 'Fire':
            divType.classList.add('colorFire')
            break;
        case 'Water':
            divType.classList.add('colorWater')
            break;
        case 'Flying':
            divType.classList.add('colorFlying')
            break;
        case 'Ground':
            divType.classList.add('colorGround')
            break;
        case 'Electric':
            divType.classList.add('colorElectric')
            break;
        case 'Grass':
            divType.classList.add('colorGrass')
            break;
        case 'Poison':
            divType.classList.add('colorPoison')
            break;
    }
};