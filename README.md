# frontmatter v0.1.3

A simple frontmatter parser for deno.

# Usage

```ts
import { parse } from "https://deno.land/x/frontmatter/mod.ts";

const example = `
---
title: Hello
author: John
---
# Content
`.trim();

const obj = parse(example);

console.log(obj);
// => {
//   data: {
//     title: "Hello",
//     author: "John"
//   },
//   content: "# Content"
// }
```

# API

It has only one API `parse`

## `parse(text: string): ParseResult`

where:

`text` is the input text.

```ts
type ParseResult = {
  data: unknown,
  content: string
}
```

where `data` is parsed frontmatter object and `content` is the content after the frontmater.

When it doesn't find any front matter pattern, it returns with `data` === `undefined`, and `content` === input `text`.

# License

MIT
