<template>
  <Stage
    class="education"
    :abbreviation="`[${startYear}-${endYear}] ${place} - ${data.graduation}`"
    :data="data"
    :isLast="isLast"
  >
    <template v-if="data.university">
      <CodeLine>
        <Tab/><Tab/>
        <JuliaSymbol name="university" v-if="isJulia"/>
        <VariableName name="university" v-else/>
        <span class="white-space space" v-if="isJulia"></span>
        <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
        <span class="white-space space"></span>
        <String :value="data.university"></String>
        <span class="expression">,</span>
      </CodeLine>
    </template>
    <template v-if="data.institution">
      <template v-if="Array.isArray(data.institution)">
        <CodeLine>
          <Tab/><Tab/>
          <JuliaSymbol name="institution" v-if="isJulia"/>
          <VariableName name="institution" v-else/>
          <span class="white-space space" v-if="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <span class="expression">[</span>
        </CodeLine>
        <CodeLine v-for="institution in data.institution" :key="institution">
        <Tab/><Tab/><Tab/>
        <String :value="institution"></String>
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
          <JuliaSymbol name="institution" v-if="isJulia"/>
          <VariableName name="institution" v-else/>
          <span class="white-space space" v-if="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <String :value="data.institution"></String>
          <span class="expression">,</span>
        </CodeLine>
      </template>
    </template>
    <CodeLine>
      <Tab/><Tab/>
      <JuliaSymbol name="graduation" v-if="isJulia"/>
      <VariableName name="graduation" v-else/>
      <span class="white-space space" v-if="isJulia"></span>
      <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
      <span class="white-space space"></span>
      <String :value="data.graduation"></String>
      <span class="expression">,</span>
    </CodeLine>
  </Stage>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import Stage from './_stage.vue';
  import VariableName from './_variable_name.vue';
  import JuliaSymbol from './_symbol.vue';

  export default {
    props: [
      'data',
      'isLast',
    ],
    computed: {
      startYear() {
        return this.data.startsAt.getFullYear();
      },
      place() {
        if (this.data.institution) {
          const inst = Array.isArray(this.data.institution)
            ? this.data.institution[0]
            : this.data.institution
          ;
          return inst;
        } else {
          return this.data.university;
        }
      },
      endYear() {
        return this.data.endsAt ? this.data.endsAt.getFullYear() : ' now';
      },
    },
    components: {
      CodeLine,
      Tab,
      String,
      Stage,
      VariableName,
      JuliaSymbol,
    },
  };
</script>
