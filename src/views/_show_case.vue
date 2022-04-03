<template>
  <Stage
    class="show-case"
    :abbreviation="`${data.name}`"
    :data="data"
    :isLast="isLast"
  >
    <CodeLine>
      <Tab/><Tab/>
      <JuliaSymbol name="name" v-if="isJulia"/>
      <VariableName name="name" v-else/>
      <span class="white-space space" v-if="isJulia"></span>
      <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
      <span class="white-space space"></span>
      <String :value="data.name"></String>
      <span class="expression">,</span>
    </CodeLine>
  </Stage>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import Url from './_url.vue';
  import Stage from './_stage.vue';
  import VariableName from './_variable_name.vue';
  import JuliaSymbol from './_symbol.vue';

  export default {
    props: [
      'data',
      'isLast',
    ],
    components: {
      CodeLine,
      Tab,
      String,
      Url,
      Stage,
      VariableName,
      JuliaSymbol,
    },
  };
</script>
