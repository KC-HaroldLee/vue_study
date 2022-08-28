import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBinding_html.vue'
import DataBindingInputText from '../views/DataBinding_inputText.vue'
import DataBindingInputNumber from '../views/DataBinding_inputNumber.vue'
import DataBindingTextarea from '../views/DataBinding_textarea.vue'
import DataBindingSelect from '../views/DataBinding_select.vue'
import DataBindingCheckBox from '../views/DataBinding_checkBox.vue'
import DataBindingCheckBox2 from '../views/DataBinding_checkBox2.vue'
import DataBindingRadio from '../views/DataBinding_radio.vue'
import DataBindingAttr from '../views/DataBinding_attr.vue'
import DataBindingButton from '../views/DataBinding_button.vue'
import DataBindingClass from '../views/DataBinding_class.vue'
import DataBindingClass2 from '../views/DataBinding_class2.vue'
import DataBindingStyle from '../views/DataBinding_style.vue'
import DataBindingList from '../views/DataBinding_list.vue'
import RenderingVIf from '../views/Rendering_v-if.vue'
import RenderingVShow from '../views/Rendering_v-show.vue'
import RenderingVOn from '../views/Rendering_v-on.vue'
import RenderingVOn2 from '../views/Rendering_v-on2.vue'
import RenderingVOn3 from '../views/Rendering_v-on3.vue'
import ComputedFullname from '../views/Computed_fullname.vue'
import WatchFullname from '../views/Watch_fullname.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBindingTest',
    component: DataBinding
  },
  {
    path: '/databinding_html',
    name: 'DataBinding_html',
    component: DataBindingHtml
  },
  {
    path: '/databinding_inputText',
    name: 'DataBinding_InputText',
    component: DataBindingInputText
  },
  {
    path: '/databinding_inputNum',
    name: 'DataBinding_InputNum',
    component: DataBindingInputNumber
  },
  {
    path: '/databinding_textarea',
    name: 'DataBinding_Textarea',
    component: DataBindingTextarea
  },
  {
    path: '/databinding_select',
    name: 'DataBinding_Select',
    component: DataBindingSelect
  },
  {
    path: '/databinding_checkBox',
    name: 'DataBinding_CheckBox',
    component: DataBindingCheckBox
  },
  {
    path: '/databinding_checkBox2',
    name: 'DataBinding_CheckBox2',
    component: DataBindingCheckBox2
  },
  {
    path: '/databinding_radio',
    name: 'DataBinding_Radio',
    component: DataBindingRadio
  },
  {
    path: '/databinding_attr',
    name: 'DataBinding_Attr',
    component: DataBindingAttr
  },
  {
    path: '/databinding_button',
    name: 'DataBinding_button',
    component: DataBindingButton
  },
  {
    path: '/databinding_class',
    name: 'DataBinding_class',
    component: DataBindingClass
  },
  {
    path: '/databinding_class2',
    name: 'DataBinding_class2',
    component: DataBindingClass2
  },
  {
    path: '/databinding_style',
    name: 'DataBinding_Style',
    component: DataBindingStyle
  },
  {
    path: '/databinding_list',
    name: 'DataBinding_List',
    component: DataBindingList
  },
  {
    path: '/rendering_v-if',
    name: 'Rendering_V-if',
    component: RenderingVIf
  },
  {
    path: '/rendering_v-show',
    name: 'Rendering_V-show',
    component: RenderingVShow
  },
  {
    path: '/rendering_v-on',
    name: 'Rendering_V-on',
    component: RenderingVOn
  },
  {
    path: '/rendering_v-on2',
    name: 'Rendering_V-on2',
    component: RenderingVOn2
  },
  {
    path: '/rendering_v-on3',
    name: 'Rendering_V-on3',
    component: RenderingVOn3
  },
  {
    path: '/computed_fullName',
    name: 'Computed_FullName',
    component: ComputedFullname
  },
  {
    path: '/watch_fullName',
    name: 'Watch_FullName',
    component: WatchFullname
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
