<template>
  <Stage class="job" :data="data">
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">company</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.company"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">remote</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <Boolean :value="data.remote"></Boolean>
      <span class="expression">,</span>
    </CodeLine>
    <template v-if="Array.isArray(data.position)">
      <CodeLine>
        <Tab/><Tab/>
        <span class="variable">position</span>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <span class="expression">[</span>
      </CodeLine>
      <CodeLine v-for="position in data.position" :key="position">
        <Tab/><Tab/><Tab/>
        <String :value="position"></String>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab/><Tab/>
        <span class="expression">],</span>
      </CodeLine>
    </template>
    <template v-else>
      <CodeLine>
        <Tab/><Tab/>
        <span class="variable">position</span>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <String :value="data.position"></String>
        <span class="expression">,</span>
      </CodeLine>
    </template>
  </Stage>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import Boolean from './_boolean.vue';
  import Stage from './_stage.vue';

  export default {
    props: [
      'data',
    ],
    components: {
      CodeLine,
      Tab,
      String,
      Boolean,
      Stage,
    },
  };
</script>