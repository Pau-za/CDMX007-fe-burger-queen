<template>
  <div class="food-election">
    <div class="col l4 m4 s12 offset-m4 food-type" id="breakfast">
      <img src="../assets/breakfast/breakfast-icon-xxxl.png" alt="breakfast-image">
      <h4><router-link to="/BreakfastMenu"> Desayunos </router-link> </h4>
    </div>
    <div class="food-type col l4 m4 s12 offset-m4" id="meal">
      <img src="../assets/meals/meals-icon-xxxl.png" alt="meals-image">
      <h4><router-link to="/MealsMenu"> Comidas </router-link> </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodElection",
  //   data() {

  //   }
};
</script>

<style scoped>
h4 {
  color: rgb(253, 253, 253);
}
.food-election {
  background-color: #242e3a;
  margin: -6% -2%;
  padding: 28% 37%;
  display: inline-flex;
  align-items: baseline;
}

#breakfast{
    margin-right: 89%;
    margin-left: -48%;
}
</style>


