# vitecodemirror
Minimal code mirror example with vite

trying to create a live editor - something that updates as you edit code in
a browser. so vite / codemirror.

searched for 'vite codemirror' and the first thing was this github issue
https://github.com/vitejs/vite/issues/1801

the person pasted a gist which showed the simplest way to do this (amazingly
simple) https://gist.github.com/egoist/1369b664517e87214515071e29ad7f8b

## running

to run just `npm install` and then run `vite` (presumably after installing
with `npm install -g vite` though i have to check...) then browse to url
(normally `localhost:3000`).

*BUT* I highly recommend you follow the steps below - i was really surprised
at how easy this is. _and_ it flies in the face of most advice - the vite
website recommends you install vite into your project, for example...

whether or not this will stay this simple I'm not sure ...

## steps to recreate

1. create a directory (i called mine `vitecodemirror`)
2. initialise npm with `npm init -y`
3. install code mirror libraries (see below)
4. create `index.html` (see below)
5. create `main.ts` (see below)
6. run `vite` (should be installed, i suppose via `npm install -g vite`?)
7. browse to url (usually `localhost:3000)

it looks like nothing is there but it is - mouse over to the very top
of the window and you'll see it's a text editor.

and it's live! it's vite so you can make changes to either `main.ts`
or `index.html` and your changes come through automatically.

personally i'm amazed at how simple this is...

## install libraries

```
npm install -D @codemirror/view
npm install -D @codemirror/state
npm install -D @codemirror/lang-markdown
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/main.ts" type="module"></script>
  </body>
</html>
```

omw what?

## main.ts

```ts
import { EditorView } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { markdown } from "@codemirror/lang-markdown"

new EditorView({
  parent: document.getElementById("app"),
  state: EditorState.create({
    extensions: [markdown()],
  }),
})
```

not sure why it's typescript or even if it has to be ...
don't really like typescript (though i've never used it
in a project)

## that's all folks

is that it? no setup for vite? how does it know what to
build? where is the config for codemirror?

and why is an example like this not standard? (i haven't
actually checked to see if the codemirror website
examples are this straight forward). i mean, with vite
i had no idea you a) don't need to install vite, b)
don't need any configuration files (e.g. `vite.config.ts`).
just two files? what?

let me know if this was useful.

k
