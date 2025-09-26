let inp = document.querySelector('.inp1')
let btn = document.querySelector('button')
let div = document.querySelector('.car1')

    let MyFunction = () => {
        fetch("https://68d63156c2a1754b4269cdc2.mockapi.io/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: inp.value }),
        })
}

fetch("https://68d63156c2a1754b4269cdc2.mockapi.io/user")
.then((res)=> res.json())

.then((data)=>{
  

data.map((et)=>{

    div.innerHTML += `
    <div class = "car">
    <h1>${et.name}</h1>
    <p>${et.id}</p>
    </div>
    
    `
})




})

let inp2 = document.querySelector('.inp2')

let over = ()=>{

fetch(`https://68d63156c2a1754b4269cdc2.mockapi.io/user/${inp2.value}`,{
    method:"DELETE"
})


}


