import Vue from 'vue';
import Router from 'vue-router';
import FoodElection from '@/components/FoodElection';
import MealsMenu from '@/components/MealsMenu';

/* eslint-disable */

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FoodElection',
      component: FoodElection,
    },
    {
      path: '/mealsmenu',
      name: 'MealsMenu',
      component: MealsMenu,
    },
   
  ],
});
