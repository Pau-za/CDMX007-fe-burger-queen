<template>
  <div class="general-menu">
    <div class="upper-menu">
      <div class="menu-name">
        <img
          id="sm-burger-logo"
          src="../assets/logo_burquerqueen/logo_burguer_sm.png"
          alt="logo-burgerqueen"
        >
        <h5 id="kind-of-menu">{{ kindOfMenu }}</h5>

        <img id="sm-client-icon" src="../assets/client/client_sm.png" alt>
        <h4 id="client-name">{{ clientName }}</h4>
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
  </div>
</template>

<script>
export default {
  name: "GeneralMenu",
  data() {
    return {
      kindOfMenu: "Comida",
      clientName: "Fulana"
    };
  }
};
</script>

<style scoped>
h5,
h4 {
  display: -webkit-inline-box;
}

h3 {
  margin: 0% 3%;
  font-weight: 700;
}
.general-menu {
  background-color: #242e3a;
  color: rgb(251, 252, 253);
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
  margin: 0% 0% 0% -37%;
  width: 64%;
}

#sm-burger-logo {
  margin: 0% 0% -1% -46%;
}

#kind-of-menu {
  margin: 0% 14% 1% 12%;
}

#sm-client-icon {
  width: 3%;
  height: auto;
  margin-right: 1%;
}
</style>

