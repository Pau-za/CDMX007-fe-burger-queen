<template>
  <div class="general-menu">
    <div id="top-menu">#</div>
    <div class="upper-menu">
      <div class="menu-name">
        <img
          id="sm-burger-logo"
          src="../assets/logo_burquerqueen/logo_burguer_sm.png"
          alt="logo-burgerqueen"
        >
        <h4 id="kind-of-menu">{{ kindOfMenu }}</h4>
      </div>
      <div class="menu-number">
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
        <h3 id="order-title">ORDEN</h3>
      </div>
    </div>
    <div class="menu-options">
      <img class="ticket-icons" src="../assets/menu_icons/menu_icon_sm.png" alt="menu-icon">
      <img
        class="ticket-icons"
        src="../assets/menu_icons/configuracion.png"
        alt="configuration-icon"
      >
      <img class="ticket-icons" src="../assets/logout/logout_sm.png" alt="logout-icon">
    </div>

    <div class="sell-info">
      <div class="picked-items">
        <h6 id="kind-of-menu">{{ item }}</h6>
        <h6 id="kind-of-menu">{{ costo }}</h6>
      </div>

      <div id="single-burgers" class="meals-selected">
        <div class="menu-display-space">
          <button class="single option-meal" id="single-beef-burger">
            <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
            <h5>Sencilla Res</h5>
          </button>
          <button class="single option-meal" id="single-chicken-burger">
            <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
            <h5>Sencilla Pollo</h5>
          </button>
          <button class="single option-meal" id="single-vegan-burger">
            <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
            <h5>Sencilla Vegetariana</h5>
          </button>
        </div>

        <div id="double-burgers" class="menu-display-space">
          <button class="double option-meal" id="double-beef-burger">
            <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
            <h5>Doble Res</h5>
          </button>
          <button class="double option-meal" id="double-chicken-burger">
            <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
            <h5>Doble Pollo</h5>
          </button>
          <button class="double option-meal" id="double-vegan-burger">
            <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
            <h5>Doble Vegetariana</h5>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralMenu",
  data() {
    return {
      kindOfMenu: "Comida",
      item: "Producto",
      costo: "Costo"
    };
  }
};
</script>

<style scoped>
h4,
h5,
h6 {
  display: -webkit-inline-box;
  font-weight: 700;
  margin-top: 0%;
}

h3 {
  margin: 0% 2%;
  font-weight: 700;
}

.general-menu {
  background-color: #242e3a;
  width: 100%;
}

.upper-menu {
  background-color: #38404a;
  color: rgb(251, 252, 253);
  height: 0%;
  width: 102%;
  margin-top: 0%;
}

.menu-number {
  background-color: #242e3a;
  display: -webkit-inline-box;
  margin: 0% 0% 0% 0%;
  width: 100%;
  border-bottom: 3px solid black;
}

.menu-options {
  margin: -10% 0% 0% 62%;
  width: 40%;
}

.sell-info {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  color: white;
  width: 102%;
}

.picked-items {
  width: 36%;
  background-color: #38404a;
  margin: 5.3% -2% 0% 0%;
  padding: 3% 0% 51% 0%;
  border-left: 4px solid white;
}

.ticket-icons {
  margin: 0% 10%;
  width: 10%;
}

.meals-selected {
  background-color: #242e3a;
  margin: 5.3% 0% 0% 0%;
  width: 64%;
  padding-bottom: 27%;
}

.option-meal {
  justify-content: space-evenly;
  /* display: inline-flex; */
  border-radius: 10%;
  border: none;
   margin: 2%;
  width: 22%;
}

.single {
  height: 34%;
  background-color: #eab126;
 
}

.double {
  height: 34%;
  background-color: #ff6a5c;
 
}

.menu-display-space {
  margin-left: 0%;
}

#sm-burger-logo {
  margin: 1% 0% -2% -55%;
  width: 7%;
}

#kind-of-menu {
  margin: -2% 14% 2% 5%;
}

#top-menu {
  background-color: #242e3a;
  color: #242e3a;
  margin-top: -6%;
  width: 102%;
  padding: 1% 0%;
}

#order-title {
  margin-left: 11%;
}
</style>

