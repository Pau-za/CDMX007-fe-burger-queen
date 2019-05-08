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
      <div class="menu-number"></div>
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
  color: rgb(251, 252, 253);
  display: -webkit-inline-box;
}
.general-menu {
  background-color: #242e3a;
}

.upper-menu {
  background-color: #38404a;
}

/* .menu-name {
  display:con;
} */

#sm-burger-logo {
  margin: 0% 0% -1% -60%;
}

#kind-of-menu {
  margin: 0% 3% 1% 9%;
}

#sm-client-icon {
  width: 3%;
  height: auto;
  margin-right: 1%;
}
</style>

