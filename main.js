
function createGame(player1, hour, player2) {
  return `
   <li>
      <img
         src="./imagens/icon-${player1}.svg" title="Bandeira ${player1}"
         alt="Bandeira da ${player1}"
      />
      <strong>${hour}</strong>
      <img
         src="./imagens/icon-${player2}.svg" title="Bandeira ${player2}"
         alt="Bandeira de ${player2}"
      />
   </li>
   `
}

function createCard(date, day, games) {
  return `
   <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
         ${games}
      </ul>
   </div>
   `
}

document.querySelector("#app").innerHTML = `
   <header>
      <img src="./imagens/wc-logo.svg" alt="Logo da Copa" />
   </header>
  <main id="cards">
     
   </main> 
`

let Dia20 = document.querySelector("#Dia20")
Dia20.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
<main id="cards">
   ${createCard(
    "20/11", 
    "domingo",
    createGame("qatar", "13:00", "ecuador")
    )}
</main>
`
})

let Dia21 = document.querySelector("#Dia21")
Dia21.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
<main id="cards">
   ${createCard(
     "21/11",
     "segunda",
     createGame("england", "10:00", "iran")
   )}
    ${createCard(
      "21/11",
      "segunda",
        createGame("senegal", "13:00", "netherlands") +
        createGame("usa", "16:00", "wales")
    )}
</main>
`
})

let Dia22 = document.querySelector("#Dia22")
Dia22.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "22/11",
     "terça",
     createGame("argentina", "07:00", "saudi arabia") +
       createGame("denmark", "10:00", "tunisia")
   )}
   ${createCard(
     "22/11",
     "terça",
     createGame("mexico", "13:00", "poland") +
       createGame("france", "16:00", "australia")
   )}
   </main>
   `
})

let Dia23 = document.querySelector("#Dia23")
Dia23.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "23/11",
     "quarta",
     createGame("morocco", "07:00", "croatia") +
       createGame("germany", "10:00", "japan")
   )}
   ${createCard(
     "23/11",
     "quarta",
     createGame("spain", "13:00", "costa rica") +
       createGame("belgium", "16:00", "canada")
   )}
   </main>
   `
})

let Dia24 = document.querySelector("#Dia24")
Dia24.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "24/11",
     "quinta",
     createGame("switzerland", "07:00", "cameroon") +
       createGame("uruguay", "10:00", "southkorea")
   )}
   ${createCard(
     "24/11",
     "quinta",
     createGame("portugal", "13:00", "ghana") +
       createGame("brazil", "16:00", "serbia")
   )}
   </main>
   `
})

let Dia25 = document.querySelector("#Dia25")
Dia25.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "25/11",
     "sexta",
     createGame("wales", "07:00", "iran") +
       createGame("qatar", "10:00", "senegal")
   )}
   ${createCard(
     "25/11",
     "sexta",
     createGame("netherlands", "13:00", "ecuador") +
       createGame("england", "16:00", "usa")
   )}
   </main>
   `
})

let Dia26 = document.querySelector("#Dia26")
Dia26.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "26/11",
     "sabado",
     createGame("tunisia", "07:00", "australia") +
       createGame("poland", "10:00", "saudi arabia")
   )}
   ${createCard(
     "26/11",
     "sabado",
     createGame("france", "13:00", "denmark") +
       createGame("argentina", "16:00", "mexico")
   )}
   </main>
   `
})

let Dia27 = document.querySelector("#Dia27")
Dia27.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "27/11",
     "domingo",
     createGame("japan", "07:00", "costa rica") +
       createGame("belgium", "10:00", "morocco")
   )}
   ${createCard(
     "27/11",
     "domingo",
     createGame("croatia", "13:00", "canada") +
       createGame("spain", "16:00", "germany")
   )}
   </main>
   `
})

let Dia28 = document.querySelector("#Dia28")
Dia28.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "28/11",
     "segunda",
     createGame("cameroon", "07:00", "serbia") +
       createGame("southkorea", "10:00", "ghana")
   )}
   ${createCard(
     "28/11",
     "segunda",
     createGame("brazil", "13:00", "switzerland") +
       createGame("portugal", "16:00", "uruguay")
   )}
   </main>
   `
})

let Dia29 = document.querySelector("#Dia29")
Dia29.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "29/11",
     "terça",
     createGame("ecuador", "12:00", "senegal") +
       createGame("netherlands", "12:00", "qatar")
   )}
   ${createCard(
     "29/11",
     "terça",
     createGame("iran", "16:00", "usa") +
       createGame("wales", "16:00", "england")
   )}
   </main>
   `
})

let Dia30 = document.querySelector("#Dia30")
Dia30.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "30/11",
     "quarta",
     createGame("tunisia", "12:00", "france") +
       createGame("australia", "12:00", "denmark")
   )}
   ${createCard(
     "30/11",
     "quarta",
     createGame("poland", "16:00", "argentina") +
       createGame("saudi arabia", "16:00", "mexico")
   )}
   </main>
   `
})

let Dia1 = document.querySelector("#Dia1")
Dia1.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
   ${createCard(
     "1/12",
     "quinta",
     createGame("croatia", "12:00", "belgium") +
       createGame("canada", "12:00", "morocco")
   )}
   ${createCard(
     "1/12",
     "quinta",
     createGame("japan", "16:00", "spain") +
       createGame("costa rica", "16:00", "germany")
   )}
   </main>
   `
})

let Dia2 = document.querySelector("#Dia2")
Dia2.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
   <main id="cards">
  
   ${createCard(
     "2/12",
     "sexta",
     createGame("southkorea", "12:00", "portugal") +
       createGame("ghana", "12:00", "uruguay")
   )}
   ${createCard(
     "2/12",
     "sexta",
     createGame("serbia", "16:00", "switzerland") +
       createGame("cameroon", "16:00", "brazil")
   )}
   </main>
   `
})

