/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Routes
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Home from 'features/Home'
import Example01 from 'features/Example01'
import Example02 from 'features/Example02'
import Example03 from 'features/Example03'
import Example04 from 'features/Example04'
import Example05 from 'features/Example05'


const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Example 01',
    path: '/example01',
    component: Example01,
  },
  {
    name: 'Example 02',
    path: '/example02',
    component: Example02,
  },
  {
    name: 'Example 03',
    path: '/example03',
    component: Example03,
  },
  {
    name: 'Example 04',
    path: '/example04',
    component: Example04,
  },
  {
    name: 'Example 05',
    path: '/example05',
    component: Example05,
  },
]

export default routes
