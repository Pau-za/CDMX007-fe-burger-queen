<template>
  <div class="general-menu">
    <div class="upper-menu">
      <div id="top-menu"></div>
      <div class="menu-name">
        <img
          id="sm-burger-logo"
          src="../assets/logo_burquerqueen/logo_burguer_sm.png"
          alt="logo-burgerqueen"
        >
        <h5 id="kind-of-menu">{{ kindOfMenu }}</h5>
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
      <h5 id="kind-of-menu">{{ item }}</h5>
      <h5 id="kind-of-menu">{{ costo }}</h5>
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
h5 {
  display: -webkit-inline-box;
}

h3 {
  margin: 0% 1.5%;
  font-weight: 700;
}
.general-menu {
  /* background-color: #242e3a; */
  color: rgb(251, 252, 253);
  height: 0%;
}

.upper-menu {
  background-color: #38404a;
}

/* .menu-name {
  display:con;
} */

.menu-number {
  background-color: #242e3a;
  display: -webkit-inline-box;
  margin: 0% 6% 0% 0%;
  width: 137%;
}

.menu-options {
  margin: -10% 0% 0% 62%;
  width: 40%;
}

.sell-info {
  width: 36%;
  background-color: #38404a;
  margin: 5% 0% 0% 64%;
  padding: 3% 0% 51% 0%;
}

.ticket-icons {
  margin: 0% 10%;
  width: 10%;
}

#sm-burger-logo {
  margin: 1% 0% -2% -8%;
  width: 7%;
}

#kind-of-menu {
  margin: -2% 14% 2% 12%;
}

#top-menu {
  height: 0%;
  background-color: #242e3a;
}
</style>

