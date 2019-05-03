new Vue({
    el: '#app-1',
    data: {
      message: 'Gerechten:'
    }
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
var app2 = new Vue({
  el: '#app-2',
  mounted() {
    for (i = 0; i < this.groceryList.length; i++) {
      let element = document.getElementById(`food_${i + 1}`)
      element.src = `${this.groceryList[i].img}`
    }  

    let json = JSON.parse(localStorage.getItem("json"))
    if(json !== null) {
      this.groceryList = json
    }
    // TO EMPTY LOCAL STORAGE
    // localStorage.clear();
    // console.log(localStorage)
  },
  data: {
    groceryList: [
      {text: "Chili",
      img: "img/chiliconcarne.jpg",
      url: "chili.html",
      state: false,
      id: 0},
      {text: "Gyros",
      img: "img/gyros.jpg",
      url: "gyros.html",
      state: false,
      id: 1},
      {text: "Pizza",
      img: "img/pizza.jpg",
      url: "chili.html",
      state: false,
      id: 2},
      {text: "Spaghetti",
      img: "img/spaghetti.jpeg",
      url: "gyros.html",
      state: false,
      id: 3},
      {text: "Wok",
      img: "img/wok.jpg",
      url: "pizza.html",
      state: false,
      id: 4},
      {text: "Wraps",
      img: "img/wraps.jpg",
      url: "pizza.html",
      state: false,
      id: 5},
      {text: "Nasi",
      img: "img/nasi.jpg",
      url: "pizza.html",
      state: false,
      id: 6},
      {text: "Chiliconcarne",
      img: "img/boerekool.jpg",
      url: "pizza.html",
      state: false,
      id: 7},
      {text: "chickentonight",
      img: "img/chickentonight.jpeg",
      url: "pizza.html",
      state: false,
      id: 8},
      {text: "lasanga",
      img: "img/lasagna.jpg",
      url: "pizza.html",
      state: false,
      id: 9},
      {text: "quiche",
      img: "img/quiche.jpg",
      url: "pizza.html",
      state: false,
      id: 10},
      {text: "spinaziezalm",
      img: "img/spinaziezalm.jpg",
      url: "pizza.html",
      state: false,
      id: 11}]
    },

  methods: {
    like: function (h) {
      for (i = 0; i < this.groceryList.length; i++) { 
        if (this.groceryList[i].id == h){
          //alert('Hello ' + this.groceryList[i].id + this.groceryList[i].state + '!')
          //alert('Hello ' + this.groceryList[i].state + '!')
          this.checkBrowserSupport(this.groceryList[i].state, this.groceryList[i].id)
        }
      }
    },

    checkBrowserSupport: function (state, id){
      // Check browser support
      if (typeof(Storage) !== "undefined") {
        this.save(state, id)
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    },

    save: function (state, id){
        if (state == false){
          // Store
          this.groceryList[id].state = true
          localStorage.setItem("json", JSON.stringify(this.groceryList));
        } 
        else {
          this.groceryList[id].state = false
          localStorage.setItem("json", JSON.stringify(this.groceryList));
        }
    },

    showFavorites: function (){
      for (i = 0; i < this.groceryList.length; i++) { 
        if (this.groceryList[i].state == true){


        }
      }
    },

    showRandom: function (){
      let ranNum = Math.floor(Math.random() * 4 - 1)
      for (i = 0; i < this.groceryList.length; i++) { 
        if(this.groceryList[i].id == ranNum){
          let ranUrl = document.getElementById(`random`)
          ranUrl.href = `${this.groceryList[i].url}`
        }
      }
    }
  }
})