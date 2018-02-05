<template>
  <div class="home-container">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Metrics</div>
      </md-card-header>
      <md-card-content>
        <md-card>
          <md-card-header>
            <div class="md-title">Sent</div>
          </md-card-header>
          <md-card-content>
            <h2 class="md-display-2">{{sent}}</h2>
          </md-card-content>
        </md-card>
        <md-card>
          <md-card-header>
            <div class="md-title">Failed</div>
          </md-card-header>
          <md-card-content>
            <h2 class="md-display-2">{{fail}}</h2>
          </md-card-content>
        </md-card>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import {getMetrics} from '../services/metrics'

export default {
  name: 'Metrics',
  data () {
    return {
      sent: 0,
      fail: 0
    }
  },
  created () {
    this.showMetrics()
  },
  methods: {
    showMetrics () {
      getMetrics().then((data) => {
        this.sent = data.email.sent
        this.fail = data.email.fail
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
