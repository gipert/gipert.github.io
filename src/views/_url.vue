<template>
  <span class="string">
    '<a :href="value" target="_blank" @click="openLink">{{display}}</a>'
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
