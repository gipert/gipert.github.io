<template>
  <div class="curriculum-vitae">
    <CodeLine>
      <span class="storage-type" v-if="isJs || isJulia">const</span>
      <span class="white-space space" v-if="isJs || isJulia"></span>
      <VariableName name="curriculumVitae"/>
      <span class="variable">{{title}}</span>
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space"></span>
      <span class="expression" v-if="isTs">(</span>
      <span class="type class" v-if="isTs">Job</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="keyword" v-if="isTs">|</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="type class" v-if="isTs">Education</span>
      <span class="expression" v-if="isTs">)[]</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data">
      <component
        :is="entry.graduation ? 'Education' : 'Job'"
        :key="`entry-${index}`"
        :data="entry"
        :isLast="index === data.length - 1"
      />
    </template>
    <CodeLine>
      <span class="expression">]</span>
      <span class="expression" v-if="isJs">;</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import VariableName from './_variable_name.vue';
  import CodeLine from './_code_line.vue';
  import Job from './_job.vue';
  import Education from './_education.vue';

  export default {
    props: [
      'data',
    ],
    components: {
      CodeLine,
      Job,
      Education,
      VariableName,
    },
  };
</script>
