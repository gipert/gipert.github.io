<template>
  <div class="profile">
    <Section :section="Section.Profile"></Section>
    <CodeLine/>
    <Variable name="my_name">
      <String :value="data.my_name"></String>
    </Variable>
    <Variable name="profession">
      <String :value="data.profession"></String>
    </Variable>
    <Variable name="email">
      <String :value="email"></String>
    </Variable>
    <Variable name="address">
      <String :value="data.address"></String>
    </Variable>
    <CodeLine/>
    <Variable v-for="(url, name) in data.socialNetworks" :key="name" :name="name">
      <Url :value="url"></Url>
    </Variable>
    <CodeLine/>
    <Variable name="sailing_cv">
      <Url :value="data.sailing_cv"></Url>
    </Variable>
    <CodeLine/>
    <CodeLine/>

  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import CodeLine from './_code_line.vue';
  import Variable from './_variable.vue';
  import String from './_string.vue';
  import Url from './_url.vue';
  import Section from './_section.vue';

  export default {
    props: [
      'data',
    ],
    computed: {
      email() {
        const emails = this.data.emails;
        return emails[Math.floor(Math.random() * emails.length)];
      },
    },
    components: {
      CodeLine,
      Variable,
      String,
      Url,
      Section,
    },
  };
</script>
