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
    // {
    //   path: '/',
    //   name: 'FoodElection',
    //   component: FoodElection,
    // },
    {
      path: '/',
      name: 'GeneralMenu',
      component: GeneralMenu,
    },
    {
      path: '/',
      name: 'SellInformation',
      component: SellInformation,
    },
    {
      path: '/',
      name: 'MealsFood',
      component: MealsFood,
    },
  ],
});
