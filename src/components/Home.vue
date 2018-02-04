<template>
  <div class="home-container">
    <div class="md-display-1 heading">Email Client</div>
    <div>
      <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/components/tabs/home"></md-tab>
        <md-tab id="tab-dashboard" md-label="Email" to="/components/tabs/email"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Email Client'
    }
  }
}
</script>

<style scoped>
  .heading {
    font-weight: normal;
    text-align: left;
    border-bottom: 1px solid #e6e6e6;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
