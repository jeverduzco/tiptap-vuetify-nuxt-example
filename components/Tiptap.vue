<template>
  <div>
    <client-only>
      <v-card class="rich-text-section" flat>
        <v-toolbar v-if="editor">
          <v-spacer class="d-none d-lg-block" />
          <v-btn
            icon
            append
            :class="editor.isActive({ textAlign: 'left' }) ? 'v-btn--active ml-1 mr-1' : 'ml-1 mr-1'"
            title="Izquierda"
            @click="editor.chain().focus().setTextAlign('left').run()"
          >
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive({ textAlign: 'center' })
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Centrado"
            @click="editor.chain().focus().setTextAlign('center').run()"
          >
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive({ textAlign: 'right' })
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Derecha"
            @click="editor.chain().focus().setTextAlign('right').run()"
          >
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive({ textAlign: 'justify' })
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Justificado"
            @click="editor.chain().focus().setTextAlign('justify').run()"
          >
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="editor.isActive('bold') ? 'v-btn--active ml-1 mr-1' : 'ml-1 mr-1'"
            title="Negrita"
            @click="editor.chain().focus().toggleBold().run()"
          >
            <v-icon>mdi-format-bold</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('italic') ? 'v-btn--active ml-1 mr-1' : 'ml-1 mr-1'
            "
            title="Cursiva"
            @click="editor.chain().focus().toggleItalic().run()"
          >
            <v-icon>mdi-format-italic</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('strike') ? 'v-btn--active ml-1 mr-1' : 'ml-1 mr-1'
            "
            title="Tachado"
            @click="editor.chain().focus().toggleStrike().run()"
          >
            <v-icon>mdi-format-strikethrough</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('code') ? 'v-btn--active ml-1 mr-1' : 'ml-1 mr-1'
            "
            title="Código"
            @click="editor.chain().focus().toggleCode().run()"
          >
            <v-icon>mdi-xml</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('heading', { level: 1 })
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Título 1"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          >
            <v-icon>mdi-format-header-1</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('heading', { level: 2 })
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Título 2"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          >
            <v-icon>mdi-format-header-2</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('heading', { level: 3 })
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Título 3"
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          >
            <v-icon>mdi-format-header-3</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('blockquote')
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Cita"
            @click="editor.chain().focus().toggleBlockquote().run()"
          >
            <v-icon>mdi-format-quote-open-outline</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('bulletList')
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Lista"
            @click="editor.chain().focus().toggleBulletList().run()"
          >
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="
              editor.isActive('orderedList')
                ? 'v-btn--active ml-1 mr-1'
                : 'ml-1 mr-1'
            "
            title="Lista ordenada"
            @click="editor.chain().focus().toggleOrderedList().run()"
          >
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            class="ml-1 mr-1"
            title="Linea horizontal"
            @click="editor.chain().focus().setHorizontalRule().run()"
          >
            <v-icon>mdi-format-vertical-align-center</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            :class="editor.isActive('link') ? 'v-btn--active ml-1 mr-1' : 'ml-1 mr-1'"
            title="Enlace"
            @click="editor.isActive('link') ? editor.commands.unsetLink() : addLink()"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
          <v-btn
            icon
            append
            class="ml-1 mr-1"
            title="Imagen"
            @click="addImage"
          >
            <v-icon>mdi-image</v-icon>
          </v-btn>
          <v-spacer class="d-none d-lg-block" />
        </v-toolbar>
        <v-container class="editor">
          <editor-content :editor="editor" />
        </v-container>
      </v-card>
      <v-dialog v-model="linkModal" persistent max-width="550px">
        <v-card>
          <v-card-title>
            <p
              class="text-overline text-center card-center-title modal-title"
            >
              Añadir enlace
            </p>
          </v-card-title>
          <v-divider />
          <v-card-text class="form-imputs">
            <v-form
              ref="linkForm"
              v-model="validLink"
              lazy-validation
            >
              <v-text-field
                v-model="linkToAdd"
                :rules="linkRules"
                label="Enlace"
                required
                filled
                color="secondary"
              />
              <v-btn
                :disabled="!validLink"
                depressed
                title="Añadir enlace"
                color="secondary"
                x-large
                block
                @click="addLinkToEditor"
              >
                Añadir enlace
              </v-btn>
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn color="info" text block @click="linkModal = false, linkToAdd = '', $refs.linkForm.reset()">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="imageModal" persistent max-width="550px">
        <v-card>
          <v-card-title>
            <p
              class="text-overline text-center card-center-title modal-title"
            >
              Añadir imagen
            </p>
          </v-card-title>
          <v-divider />
          <v-card-text class="form-imputs">
            <v-form
              ref="imageForm"
              v-model="validLink"
              lazy-validation
            >
              <v-text-field
                v-model="linkToAdd"
                :rules="linkRules"
                label="Enlace de la imagen"
                required
                filled
                color="secondary"
              />
              <v-btn
                :disabled="!validLink"
                depressed
                title="Añadir imagen"
                color="secondary"
                x-large
                block
                @click="addImageToEditor"
              >
                Añadir imagen
              </v-btn>
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn color="info" text block @click="imageModal = false, linkToAdd = '', $refs.imageForm.reset()">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'

export default {
  name: 'TipTap',
  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
      linkModal: false,
      validLink: true,
      linkToAdd: '',
      linkRules: [(v) => !!v || 'El enlace es requerido'],
      imageModal: false,
    }
  },

  watch: {
    value(value) {
      const isSame = this.editor.getHTML() === value
      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      parseOptions: {
        preserveWhitespace: 'full',
      },
      content: this.value,
      extensions: [
        StarterKit,
        TextAlign.configure({
          types: ['heading', 'paragraph', 'image'],
          alignments: ['left', 'right', 'center', 'justify'],
        }),
        Link.configure({
          openOnClick: false,
        }),
        Image.configure({
          inline: true,
        }),
        Dropcursor,
      ],
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      },
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    addLink() {
      this.linkModal = true
    },
    addLinkToEditor() {
      if (this.$refs.linkForm.validate()) {
        this.editor.commands.setLink({
          href: this.linkToAdd,
          target: '_blank',
        })
        this.linkModal = false
        this.linkToAdd = ''
        this.$refs.linkForm.reset()
      }
    },
    addImage() {
      this.imageModal = true
    },
    addImageToEditor() {
      if (this.$refs.imageForm.validate()) {
        this.editor.chain().focus().setImage({ src: this.linkToAdd }).run()
        this.imageModal = false
        this.linkToAdd = ''
        this.$refs.imageForm.reset()
      }
    },
  },
}
</script>
<style>
.rich-text-section > .editor .ProseMirror {
  min-height: 300px;
  outline: none !important;
}

.rich-text-section .v-toolbar {
  height: auto !important;
}
.rich-text-section .v-toolbar__content {
  height: auto !important;
  flex-wrap: wrap;
}
.modal-title {
  margin-bottom: 0 !important;
  word-break: break-word;
}
.form-imputs {
  padding: 20px 24px 20px !important;
}
.card-center-title {
  width: 100%;
}
</style>
