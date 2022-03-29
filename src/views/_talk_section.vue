<template>
  <div>
    <Section :section="section"></Section>
    <CodeLine/>
    <CodeLine>
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <span class="variable">{{name}}</span>
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="type class" v-if="isTs">Talk</span>
      <span class="expression" v-if="isTs">[]</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data">
      <Talk
        :key="`talk-${index}`"
        :data="entry"
        :isLast="index === data.length - 1"
      />
    </template>
    <CodeLine>
      <span class="expression">];</span>
    </CodeLine>
    <CodeLine/>
    <CodeLine/>
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Section from './_section.vue';
  import Talk from './_talk.vue';

  export default {
    props: [
      'section',
      'name',
      'data',
    ],
    components: {
      CodeLine,
      Section,
      Talk,
    },
  };
</script>
