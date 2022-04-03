<template>
  <Variable :name="name" type="Skill" :length="16">
    <span class="type" v-if="isJulia">Dict</span><span class="expression" v-if="isJulia">(</span>
    <span class="expression" v-else>{</span>
    <span class="white-space space"></span>
    <span class="symbol" v-if="isJulia">:level</span>
    <span class="variable" v-else>level</span>
    <span class="white-space space" v-if="isJulia"></span>
    <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
    <span class="white-space space"></span>
    <Number :value="skill.level.toFixed(1)" class="progress" />
    <span class="expression">,</span>
    <span class="white-space space"></span>
    <span class="symbol" v-if="isJulia">:name</span>
    <span class="variable" v-else>name</span>
    <span class="white-space space" v-if="isJulia"></span>
    <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
    <span class="white-space space"></span>
    <String :value="skill.name"></String>
    <span class="white-space space"></span>
    <span class="expression" v-if="isJulia">)</span>
    <span class="expression" v-else>}</span>
    <span class="variable" v-if="isRuby">.with_indifferent_access</span>
  </Variable>
</template>

<script lang="ts">
  import Variable from './_variable.vue';
  import String from './_string.vue';
  import Number from './_number.vue';

  export default {
    props: [
      'name',
      'skill',
    ],
    components: {
      Variable,
      String,
      Number,
    },
  };
</script>
