import Vue from 'vue';
import Router from 'vue-router';
import FoodElection from '@/components/FoodElection';
import GeneralMenu from '@/components/GeneralMenu';
import Breakfast from '@/components/Breakfast';
import SellInformation from '@/components/SellInformation';


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
      path: '/MealsMenu',
      name: 'GeneralMenu',
      component: GeneralMenu,
    },
    {
      path: '/BreakfastMenu',
      name: 'Breakfast',
      component: Breakfast,
    },
    {
      path: '/SellInformation',
      name: 'SellInformation',
      component: SellInformation,
    },
    // {
    //   path: '/MealsFood',
    //   name: 'MealsFood',
    //   component: MealsFood,
    // },
  ],
});
