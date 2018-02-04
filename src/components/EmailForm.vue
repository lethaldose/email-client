<template>
  <form novalidate class="md-layout" @submit.prevent="validateEmailForm">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Send Email</div>
      </md-card-header>
      <md-card-content>
        <md-field :class="getValidationClass('email')">
          <label for="email">Email</label>
          <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
          <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
          <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
        </md-field>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Send Email</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email
  // minLength,
  // maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'Email Form',
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null
    },
    emailSent: false,
    sending: false
  }),
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },

    clearForm () {
      this.$v.$reset()
      this.form.email = null
    },

    sendEmail () {
      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.emailSent = true
        this.sending = false
        this.clearForm()
      }, 1500)
    },

    validateEmailForm () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sendEmail()
      }
    }
  }
}
</script>

<style scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
