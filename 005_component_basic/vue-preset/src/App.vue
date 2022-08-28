<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data BINDING</router-link> |
    <router-link to="/databinding_html">html</router-link> |
    <router-link to="/databinding_inputText">inputText</router-link> |
    <br>
    <router-link to="/databinding_inputNum">inputNumber</router-link>
    <router-link to="/databinding_Textarea">Textarea</router-link> |
    <router-link to="/databinding_Select">Select</router-link> |
    <router-link to="/databinding_CheckBox">CheckBox</router-link> |
    <router-link to="/databinding_CheckBox2">CheckBox2</router-link> |
    <br>
    <router-link to="/databinding_Radio">Radio</router-link>|
    <router-link to="/databinding_attr">Attr</router-link>
    <router-link to="/databinding_button">Button</router-link> |
    <router-link to="/databinding_class">Class</router-link> |
    <router-link to="/databinding_class2">Class2</router-link> |
    <br>
    <router-link to="/databinding_style">Style</router-link> |
    <router-link to="/databinding_list">list</router-link> |
    <router-link to="/rendering_v-if">v-if</router-link> |
    <router-link to="/rendering_v-show">v-show</router-link> |
    <router-link to="/rendering_v-on">v-on</router-link>
    <br>
    <router-link to="/rendering_v-on2">v-on2</router-link> |
    <router-link to="/rendering_v-on3">v-on3</router-link> |
    <router-link to="/computed_fullname">computed_fullname</router-link> |
    <router-link to="/watch_fullname">watch_fullname</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
