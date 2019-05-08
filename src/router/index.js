import Vue from 'vue';
import Router from 'vue-router';
import FoodElection from '@/components/FoodElection';
import GeneralMenu from '@/components/GeneralMenu'
import MealsFood from '@/components/MealsFood';

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
      name: 'MealsFood',
      component: MealsFood,
    },
  ],
});
