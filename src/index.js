const url = "http://localhost:3000/films"
const filmsDiv = document.querySelector("#films")
const posterDiv = document.querySelector("#poster")
const showingDiv = document.querySelector("#showing")
const titleDiv = document.querySelector("#title")
const runtimeDiv = document.querySelector("#runtime")
const ticketNumDiv = document.querySelector("#ticket-num")
const showtimeDiv = document.querySelector("#showtime")
const description = document.querySelector("#film-info")
const button = document.querySelector("#button")

fetch('http://localhost:3000/films/1')
.then(function(response){
    return response.json()
})
.then(function(movie){
    posterDiv.src = movie.poster
    description.innerText = movie.description
    console.log(description)
    titleDiv.innerText = movie.title
    runtimeDiv.innerText = `${movie.runtime} minutes`
    showtimeDiv.innerText = movie.showtime
    let integer = parseInt(movie.capacity)
    let number = (integer - movie.tickets_sold)
    ticketNumDiv.append(number)
    console.log(movie)

    button.addEventListener('click', function(){
        let newTickets = movie.tickets_sold += 1 
        if (newTickets > 0){
        
        ticketNumDiv.innerText = (integer - newTickets)

        fetch('http://localhost:3000/films/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify
            ({tickets_sold: newTickets})

        })
    }
    })

})