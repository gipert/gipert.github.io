<template>
  <Stage
    class="job"
    :abbreviation="`[${startYear}-${endYear}] ${firstInstitution} - ${mainPosition}`"
    :data="data"
    :isLast="isLast"
  >
    <template v-if="data.company">
      <CodeLine>
        <Tab/><Tab/>
        <JuliaSymbol name="company" v-if="isJulia"/>
        <VariableName name="company" v-else/>
        <span class="white-space space" v-if="isJulia"></span>
        <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
        <span class="white-space space"></span>
        <String :value="data.company"></String>
        <span class="expression">,</span>
      </CodeLine>
    </template>
    <template v-if="data.remote">
      <CodeLine>
        <Tab/><Tab/>
        <JuliaSymbol name="remote" v-if="isJulia"/>
        <VariableName name="remote" v-else/>
        <span class="white-space space" v-if="isJulia"></span>
        <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
        <span class="white-space space"></span>
        <Boolean :value="data.remote"></Boolean>
        <span class="expression">,</span>
      </CodeLine>
    </template>
    <template v-if="Array.isArray(data.position)">
      <CodeLine>
        <Tab/><Tab/>
        <JuliaSymbol name="position" v-if="isJulia"/>
        <VariableName name="position" v-else/>
        <span class="white-space space" v-if="isJulia"></span>
        <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
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
        <JuliaSymbol name="position" v-if="isJulia"/>
        <VariableName name="position" v-else/>
        <span class="white-space space" v-if="isJulia"></span>
        <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
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
      Boolean,
      Stage,
      VariableName,
      JuliaSymbol,
    },
    computed: {
      startYear() {
        return this.data.startsAt.getFullYear();
      },
      endYear() {
        return this.data.endsAt ? this.data.endsAt.getFullYear() : ' now';
      },
      mainPosition() {
        const position = Array.isArray(this.data.position)
          ? this.data.position[0]
          : this.data.position
        ;
        const remote = this.data.remote ? '(remote) ' : '';
        return remote + position;
      },
      firstInstitution() {
        return this.data.institution[0];
      },
    },
  };
</script>
