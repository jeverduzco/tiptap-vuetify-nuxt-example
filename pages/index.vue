<template>
  <v-row justify="center">
    <v-col cols="12">
      <Tiptap v-model="content" />
    </v-col>
    <v-col v-if="content" cols="12">
      <v-card class="rich-text-section" flat>
        <v-container>
          <article id="article-content" class="ProseMirror" v-html="content" />
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      content: null,
    }
  },
}
</script>
