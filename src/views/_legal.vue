<template>
  <div class="legal" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment comment="Website initially developed by Tamino Martinius"/>
    <Comment comment="and modified by me. Original copyright notice:"/>
    <CodeLine/>
    <Comment
      v-if="collapsed"
      :comment="`(c) ${year} Tamino Martinius`"
    >
      <Collapsed/>
    </Comment>
    <CommentBlock
      v-else
      :comment="`(c) ${year}\n\nTamino Martinius\nLehdenstr.  21\n06847 Dessau\n\nlawyer@zaku.eu`"
    />
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import Comment from './_comment.vue';
  import CommentBlock from './_comment_block.vue';
  import CodeLine from './_code_line.vue'
  import Collapsed from './_collapsed.vue';

  export default {
    data() {
      return {
        collapsed: true,
      };
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Legal', 'none');
      },
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
    components: {
      Comment,
      CommentBlock,
      CodeLine,
      Collapsed,
    },
  };
</script>
