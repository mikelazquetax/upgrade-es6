const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];



window.onload = () =>{
  let boton = document.querySelector('button')
  boton.addEventListener('click', ()=>{

   valorIntroducido = document.querySelector('input')
  result =    filtrado(valorIntroducido.value)
  console.log(result)
  })
}


filtrado = (valorFiltrado) =>{
 const resultadoFinal =       streamers.filter((item)=>{
            streamerBuscado =    item.name.includes(valorFiltrado)
            return streamerBuscado
        })

  return resultadoFinal
}