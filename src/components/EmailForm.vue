<template>
  <form novalidate class="md-layout" @submit.prevent="validateEmailForm">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Send Email</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <md-field :class="getValidationClass('toEmailAddresses')">
            <label for="to-email-addresses">To:</label>
            <md-input name="to-email-addresses" id="to-email-addresses" autocomplete="given-name" v-model="form.toEmailAddresses" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.toEmailAddresses.required">At least 1 email address is required</span>
            <span class="md-error" v-if="$v.form.toEmailAddresses.required && !$v.form.toEmailAddresses.emailListValidator">Email address should be comma separated in valid format e.g john@example.com, doe@example.com</span>
          </md-field>
        </div>

        <div class="md-layout md-gutter">
          <md-field :class="getValidationClass('subject')">
            <label for="subject">Subject:</label>
            <md-input name="subject" id="subject" autocomplete="subject" v-model="form.subject" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.subject.required">Subject is required</span>
          </md-field>
        </div>

        <div class="md-layout md-gutter">
          <md-field :class="getValidationClass('emailText')">
            <label for="emailText">Email Body:</label>
            <md-textarea rows="20" cols="100" name="emailText" id="emailText" autocomplete="email-body" v-model="form.emailText" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.emailText.required">Email body is required</span>
          </md-field>
        </div>

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
import {emailList} from '../validators/emailList'

import {
  required
} from 'vuelidate/lib/validators'

export default {
  name: 'Email Form',
  mixins: [validationMixin],
  data: () => ({
    form: {
      toEmailAddresses: null
    },
    emailSent: false,
    sending: false
  }),
  validations: {
    form: {
      toEmailAddresses: {
        required,
        emailList
      },
      subject: {
        required
      },
      emailText: {
        required
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
      this.form.toEmailAddresses = null
      this.form.subject = null
      this.form.emailText = null
    },

    sendEmail () {
      this.sending = true

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
