<template>

  <form novalidate class="md-layout" @submit.prevent="validateUser">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Send Email</div>
      </md-card-header>
      <md-card-content>

      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default {
  name: 'Email Form',
}
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
