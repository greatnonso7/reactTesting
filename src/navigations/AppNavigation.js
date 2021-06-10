import Home from '../Home';
import Register from '../Register';
import Api from '../Api';

export const HomeRoutes = {
  initialRoute: 'Home',
  routes: [
    {
      name: 'Home',
      component: Home,
      options: {
        headerShown: false,
        header: null,
      },
    },
    {
      name: 'Register',
      component: Register,
      options: {
        headerShown: false,
        header: null,
      },
    },
    {
      name: 'Api',
      component: Api,
      options: {
        headerShown: false,
        header: null,
      },
    },
  ],
};
