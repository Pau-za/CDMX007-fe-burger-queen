import Vue from 'vue';
import Router from 'vue-router';
import FoodElection from '@/components/FoodElection';
import MealsMenu from '@/components/MealsMenu';
import BreakfastMenu from '@/components/BreakfastMenu';

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
      path: '/mealsMenu',
      name: 'MealsMenu',
      component: MealsMenu,
    },
    {
      path: '/breakfastMenu',
      name: 'BreakfastMenu',
      component: BreakfastMenu,
    },
  ],
});
