<template>
  <div class="container">
    <div class="items-container">
      <div class="logo-title row">
        <img
          class="col m-6"
          id="sm-burger-logo"
          src="../assets/logo_burquerqueen/logo_burguer_sm.png"
          alt="logo-burgerqueen"
        >
        <h4 class="col m-6" id="kind-of-menu">{{ kindOfMenu }}</h4>
      </div>
      <br>
      <!-- <div class="menu-number">
        <h3>1</h3>
        <h3>2</h3>
        <h3>3</h3>
        <h3>4</h3>
        <h3>5</h3>
        <h3>6</h3>
        <h3>7</h3>
        <h3>8</h3>
        <h3>9</h3>
        <h3>0</h3>
      </div>-->
      <div class="options-items-food">
        <div class="meals-selected">
          <h4>Hamburguesas</h4>
          <div id="single-burgers" class="menu-display-space">
            <button class="single option-meal" @click="identifyId('ml-sh-single-beef',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Sencilla Res</p>
            </button>
            <button
              class="single option-meal"
              @click="identifyId('ml-sh-single-chicken',mealsFood)"
            >
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Sencilla Pollo</p>
            </button>
            <button class="single option-meal" @click="identifyId('ml-sh-single-veggie',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Sencilla Veggie</p>
            </button>
          </div>

          <div id="double-burgers" class="menu-display-space">
            <button class="double option-meal" @click="identifyId('ml-dh-double-beef',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Doble Res</p>
            </button>
            <button
              class="double option-meal"
              @click="identifyId('ml-dh-double-chicken',mealsFood)"
            >
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Doble Pollo</p>
            </button>
            <button class="double option-meal" @click="identifyId('ml-dh-double-veggie',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Doble Veggie</p>
            </button>
          </div>

          <h4>Quitar ingredientes</h4>
          <div class="no-ingredients">
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-onion',mealsFood)"
            >
              <img src="../assets/onion/onion_sm.png" alt="cebolla">
              <p>Cebolla</p>
            </button>
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-lettuce',mealsFood)"
            >
              <img src="../assets/lettuce/lettuce_sm.png" alt="lechuga">
              <p>Lechuga</p>
            </button>
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-tomato',mealsFood)"
            >
              <img src="../assets/tomato/tomato_sm.png" alt="jitomate">
              <p>Jitomate</p>
            </button>
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-pickles',mealsFood)"
            >
              <img src="../assets/pickles/pickles_sm.png" alt="pepinillos">
              <p>Pepinillos</p>
            </button>
          </div>

          <h4>Ingredientes extras</h4>
          <div class="extras">
            <button class="option-meal color-yellow" @click="identifyId('ml-ex-cheese',mealsFood)">
              <img src="../assets/cheese/cheese_sm.png" alt="queso">
              <p>Queso</p>
            </button>
            <button class="option-meal color-yellow" @click="identifyId('ml-ex-egg',mealsFood)">
              <img src="../assets/egg/egg_sm.png" alt="huevo">
              <p>Huevo</p>
            </button>
          </div>

          <h4>Bebidas</h4>
          <div class="beverages">
            <button class="option-meal color-green" @click="identifyId('ml-dr-water',mealsFood)">
              <img src="../assets/water/water_bottle_sm.png" alt="agua">
              <p>Agua</p>
            </button>
            <button class="option-meal color-green" @click="identifyId('ml-dr-soda',mealsFood)">
              <img src="../assets/soda/soda_sm.png" alt="refresco">
              <p>Refresco</p>
            </button>
          </div>

          <h4>Guarniciones</h4>
          <div class="garrison">
            <button class="option-meal color-pink" @click="identifyId('ml-gr-fries',mealsFood)">
              <img src="../assets/fries/fries_sm.png" alt="papas">
              <p>Papas fritas</p>
            </button>
            <button
              class="option-meal color-pink"
              @click="identifyId('ml-gr-onion-rings',mealsFood)"
            >
              <img src="../assets/onion_rings/onion_rings_sm.png" alt="aros-de-cebolla">
              <p>Aros de cebolla</p>
            </button>
          </div>
        </div>
      </div>
      <div class="extra-options">
        <button class="option-meal color-white-pink">
          <p>Platillo</p>
        </button>
        <button class="option-meal color-green">
          <p>Bebidas</p>
        </button>
        <button class="option-meal color-pink">
          <p>Guarnición</p>
        </button>
        <button class="option-meal color-white-green">
          <p>OK</p>
        </button>
        <button class="option-meal color-yellow">
          <p>Extra</p>
        </button>
        <button class="option-meal color-white-yellow">
          <p>Sin Ingredientes</p>
        </button>
      </div>
    </div>
    <div class="ticket-container">
      <h2>ORDEN</h2>
      <br>
      <div class="row text-size">
        <table>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Costo</th>
          </tr>
          <tr v-for="(item,index) in pickedItems" v-bind:key="index">
            <td>{{ index }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr>
            <td> </td>
            <td>Total</td>
            <td :v-model="sumOfPrices(pickedItems)">{{  }}</td>
          </tr>
        </table>
      </div>
      <div class="order-confirm">
        <button class="action-button color-white-green order-buttons">
          <p>Cancelar orden</p>
        </button>
        <button class="action-button color-white-green order-buttons">
          <p>Confirmar orden</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../js/firebase";
export default {
  name: "MealsMenu",
  data() {
    return {
      kindOfMenu: "Comida",
      mealsFood: [],
      pickedItems: [],
      mealButtons: document.getElementsByClassName("option-meal"),
      totalSum: [],
      tickets: {
        clientName: null,
        order: null,
        date: null
      }
    };
  },
  methods: {
    saveDataOrder() {
      db.collection("tickets")
        .add(this.tickets)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    // Esta función es para que borre los inputs, pero en esta interfaz no sé si utilizaré alguno
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    // clickedButton() {
    //   for (let button of this.mealButtons) {
    //     button.addEventListener("click", () => {
    //       const idButton = button.id;
    //       this.identifyId(idButton, this.mealsFood);
    //     });
    //   }
    // },
    identifyId(id, data) {
      for (const item of data) {
        if (id === item.id) {
          this.pickedItems.push(item);
        }
      }
      console.log(this.pickedItems);
    },
    sumOfPrices(arr){
      for(const item of arr){
        this.totalSum.push(item.price);
        console.log(this.totalSum);
      }
    }
  },
  created() {
    db.collection("foodItems")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          this.mealsFood.push(doc.data());
          // console.log(this.mealsFood);
        });
      });
  }
};
</script>

<style scoped>
p {
  margin-top: 0%;
}

h3 {
  margin-top: 1%;
  margin-bottom: 2%;
}

h4 {
  color: white;
}

.container {
  display: flex;
  background-color: #242e3a;
  width: 100%;
  height: 0 auto;
  margin-top: -6%;
}

.items-container {
  width: 66%;
  margin-top: 2%;
  border-right: 2px solid white;
}

.logo-title {
  /* height: 8%; */
  color: white;
  background-color: #38404a;
  margin: 1% 0%;
}

.menu-number {
  background-color: #242e3a;
  margin: -6% 0% 5% 0%;
  width: 100%;
  border-bottom: 1px solid black;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  color: white;
  /* height: 9%; */
}

.ticket-container {
  width: 34%;
  margin-top: 2%;
  background-color: #38404a;
  color: white;
  margin-bottom: 0%;
}

.meals-selected {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  flex-grow: 1;
  margin-bottom: 2%;
}

.option-meal,
.action-button {
  justify-content: space-evenly;
  border-radius: 10%;
  border: none;
  margin: 2%;
  width: 17%;
  font-size: 1.3em;
  font-weight: 500;
  margin: -1% 2% 2% 1%;
}

.menu-display-space {
  margin-bottom: 1%;
}

.single {
  height: 34%;
  background-color: #eab126;
}

.double {
  height: 34%;
  background-color: #ff6a5c;
}

.extra-options {
  background-color: #38404a;
  margin-bottom: 0%;
  padding: 5% 0%;
}

/* .options-itmes-food {
  margin-bottom: 3%;
} */

.color-white-pink {
  background-color: rgb(231, 209, 229);
}

.color-green {
  background-color: #20948b;
}

.color-pink {
  background-color: #c08dba;
}

.color-white-green {
  background-color: rgb(213, 228, 173);
}

.color-yellow {
  background-color: #eddd4c;
}

.color-white-yellow {
  background-color: #dad87a;
}

.text-size {
  font-size: 1.4em;
}

/* .order-confirm {
  margin-top: 129%;
} */

.order-buttons {
  width: 30%;
}

#sm-burger-logo {
  width: 9%;
}

#single-burgers {
  margin-left: 0%;
}

#kind-of-menu {
  margin: 0%;
}
</style>

