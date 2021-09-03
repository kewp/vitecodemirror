import { EditorView } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { markdown } from "@codemirror/lang-markdown"

new EditorView({
  parent: document.getElementById("app"),
  state: EditorState.create({
    extensions: [markdown()],
  }),
})