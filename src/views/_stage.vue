<template>
  <div class="stage" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      :indentation="1"
      v-if="collapsed"
      :comment="abbreviation"
    >
      <Collapsed/>
    </Comment>
    <template v-if="!collapsed">
      <CodeLine>
        <Tab/>
        <span class="type" v-if="isJulia">Dict</span><span class="expression" v-if="isJulia">(</span>
        <span class="expression" v-else>{</span>
      </CodeLine>
      <slot/>
      <template v-if="data.description">
        <CodeLine>
          <Tab/><Tab/>
          <span class="symbol" v-if="isJulia">:description</span>
          <span class="variable" v-else>description</span>
          <span class="white-space space" v-if="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <span class="string">
            {{state.currentLanguageHelper.multilineString}}
          </span>
        </CodeLine>
        <MultiLineString
          :value="data.description.trim()"
          :indentation="3"
        />
        <CodeLine>
          <Tab/><Tab/>
          <span class="string">
            {{state.currentLanguageHelper.multilineString}}
          </span>
          <span class="expression">,</span>
        </CodeLine>
      </template>
      <template v-if="data.urls">
        <CodeLine>
          <Tab/><Tab/>
          <span class="symbol" v-if="isJulia">:urls</span>
          <VariableName name="urls" v-else/>
          <span class="white-space space" v-if="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <span class="expression">[</span>
        </CodeLine>
        <CodeLine v-for="url in data.urls" :key="url">
          <Tab/><Tab/><Tab/>
          <Url :value="url"></Url>
          <span class="expression">,</span>
        </CodeLine>
        <CodeLine>
          <Tab/><Tab/>
          <span class="expression">],</span>
        </CodeLine>
      </template>
      <template v-if="data.startsAt">
        <CodeLine>
          <Tab/><Tab/>
          <JuliaSymbol name="startsAt" v-if="isJulia"/>
          <VariableName name="startsAt" v-else/>
          <span class="white-space space" v-if="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <Date :value="data.startsAt"></Date>
          <span class="expression">,</span>
        </CodeLine>
      </template>
      <template v-if="data.endsAt">
        <CodeLine>
          <Tab/><Tab/>
          <JuliaSymbol name="endsAt" v-if="isJulia"/>
          <VariableName name="endsAt" v-else/>
          <span class="white-space space" v-if=="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <Date :value="data.endsAt"></Date>
          <span class="expression">,</span>
        </CodeLine>
      </template>
      <template v-if="data.skills">
        <CodeLine>
          <Tab/><Tab/>
          <JuliaSymbol name="skills" v-if="isJulia"/>
          <VariableName name="skills" v-else/>
          <span class="white-space space" v-if="isJulia"></span>
          <span class="expression">{{state.currentLanguageHelper.relationalOp}}</span>
          <span class="white-space space"></span>
          <span class="expression">[</span>
        </CodeLine>
        <CodeLine v-for="(skill, key) in data.skills" :key="key">
          <Tab/><Tab/><Tab/>
          <span class="variable progress" :style="{ '--value': skill.level }">{{key}}</span>
          <span class="expression">,</span>
        </CodeLine>
        <CodeLine>
          <Tab/><Tab/>
          <span class="expression">],</span>
        </CodeLine>
      </template>
      <CodeLine>
        <Tab/>
        <span class="expression" v-if="isJulia">)</span>
        <span class="expression" v-else>}</span>
        <span class="expression" v-if="isRuby">.with_indifferent_access</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-if="!isLast"/>
    </template>
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import CodeLine from './_code_line.vue';
  import Comment from './_comment.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import MultiLineString from './_multi_line_string.vue';
  import Date from './_date.vue';
  import Collapsed from './_collapsed.vue';
  import VariableName from './_variable_name.vue';
  import JuliaSymbol from './_symbol.vue';
  import Url from './_url.vue';

  export default {
    data() {
      return {
        collapsed: true,
      };
    },
    props: [
      'isLast',
      'data',
      'abbreviation',
    ],
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Stage', this.abbreviation);
      },
    },
    computed: {
      multiStringStart() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Stage', this.abbreviation);
      },
    },
    components: {
      CodeLine,
      Comment,
      Tab,
      String,
      MultiLineString,
      Date,
      Collapsed,
      VariableName,
      JuliaSymbol,
      Url,
    },
  };
</script>
