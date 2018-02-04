<template>
  <div id="app">
    <div class="md-display-1 heading">Email Client</div>
    <div>
      <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/">
        </md-tab>
        <md-tab id="tab-dashboard" md-label="Email" to="/email">
        </md-tab>
      </md-tabs>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
.heading {
  font-weight: normal;
  text-align: left;
  border-bottom: 1px solid #e6e6e6;
}
</style>
