
const arr =[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120,
    }
  },
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120,
    }
  },
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120,
    }
  }

]





 function a()
 {
  var a11 = document.getElementById("card11")
 
 for(i=0;i<arr.length;i++)
 {
  var b = document.createElement("div")
  b.id="new"
  b.innerHTML=`
  <img src = "
  ${arr[i].image}"> <p>${arr[i].title}</p>
  <button>${arr[i].price}</button>`
  a11.appendChild(b)
  
 }
 }
 
 function a1()
 {
  let c = document.getElementById("card12")
  c.innerHTML=` <img src="https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
    <h2>This is card</h2> 
    <button>buy</button>`
    let d = document.getElementById("card13")
    d.innerHTML=` <img src="https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      <h2>This is card</h2> 
      <button>buy</button>`
 }

