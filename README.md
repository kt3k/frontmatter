# Deprecated

Front matter parser is now available in Deno Standard Modules.

https://deno.land/std/encoding/front_matter.ts

Please use Standard Modules' version instead of this module.

```
import { extract } from "https://deno.land/std@0.145.0/encoding/front_matter.ts";
import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts";

const example = `
---
title: Hello
author: John
---
# Content
`.trim();

const { attrs, body, frontMatter } = extract<{ title: string, author: string }>(example);

assertEquals(attrs.title, "Hello");
assertEquals(attrs.author, "John");
assertEquals(body, "# Content");
assertEquals(frontMatter, "title: Hello\nauthor: John");
```

# frontmatter v0.1.5

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
  data: unknown;
  content: string;
};
```

where `data` is parsed frontmatter object and `content` is the content after the
frontmater.

When it doesn't find any front matter pattern, it returns with `data` ===
`undefined`, and `content` === input `text`.

# License

MIT
