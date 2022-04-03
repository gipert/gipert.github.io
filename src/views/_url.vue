<template>
  <span class="string">
    {{state.currentLanguageHelper.stringChar}}<a :href="value" target="_blank" @click="openLink">{{display}}</a>{{state.currentLanguageHelper.stringChar}}
  </span>
</template>

<script lang="ts">
  import { formatCode } from '../util';
  import { track } from '../util';

  export default {
    props: [
      'value',
    ],
    methods: {
      openLink() {
        track('OpenLink', this.value);
      },
    },
    computed: {
      display() {
        return this.value.replace('http://', '').replace('https://', '');
      },
    },
  };
</script>
