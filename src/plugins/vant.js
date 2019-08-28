import Vue from 'vue'
import {
  Button,
  NavBar,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Card,
  Tab,
  Tabs,
  Panel,
  Notify,
  Lazyload,
  ImagePreview
} from 'vant'
const options = {

}
Vue.use(Button).use(NavBar).use(Swipe)
  .use(SwipeItem).use(Tabbar).use(TabbarItem)
  .use(Grid).use(GridItem).use(Card).use(Lazyload, options)
  .use(Tab).use(Tabs).use(Panel)

Vue.prototype.$Notify = Notify

Vue.prototype.$ImagePreview = ImagePreview
