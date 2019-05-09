import Vue from 'vue';
import Router from 'vue-router';
import FoodElection from '@/components/FoodElection';
import GeneralMenu from '@/components/GeneralMenu';
import SellInformation from '@/components/SellInformation';
import MealsFood from '@/components/MealsFood';

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
      path: '/GeneralMenu',
      name: 'GeneralMenu',
      component: GeneralMenu,
    },
    {
      path: '/SellInformation',
      name: 'SellInformation',
      component: SellInformation,
    },
    {
      path: '/MealsFood',
      name: 'MealsFood',
      component: MealsFood,
    },
  ],
});
