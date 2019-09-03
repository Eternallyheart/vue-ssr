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
  Lazyload,
  ImagePreview,
  Stepper,
  NoticeBar,
  Popup,
  CouponList,
  AddressEdit,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Switch,
  SubmitBar,
  RadioGroup,
  Radio
} from 'vant'
const options = {

}
Vue.use(Button).use(NavBar).use(Swipe).use(NoticeBar).use(Radio)
  .use(SwipeItem).use(Tabbar).use(TabbarItem).use(RadioGroup)
  .use(Grid).use(GridItem).use(Card).use(Lazyload, options)
  .use(Tab).use(Tabs).use(Panel).use(Stepper).use(SubmitBar)
  .use(Popup).use(CouponList).use(AddressEdit).use(Switch)
  .use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)

Vue.prototype.$Toast = Toast

Vue.prototype.$ImagePreview = ImagePreview
