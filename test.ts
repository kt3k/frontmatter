import { parse } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.134.0/testing/asserts.ts";

Deno.test("simple example", () => {
  const example = `
---
title: Hello
author: John
---
# Content
  `.trim();

  const obj = parse(example);

  assertEquals(obj, {
    data: {
      title: "Hello",
      author: "John",
    },
    content: "# Content",
  });
});

Deno.test("frontmatter search is non-greedy", () => {
  const example = `
---
title: Hello
author: John
---
# Heading 1

---

# Heading 2

  `.trim();

  const obj = parse(example);

  assertEquals(obj, {
    data: {
      title: "Hello",
      author: "John",
    },
    content: "# Heading 1\n\n---\n\n# Heading 2",
  });
});

Deno.test("no front matter", () => {
  const example = `
There is
no front matter
  `.trim()

  const obj = parse(example);

  assertEquals(obj, {
    data: undefined,
    content: example
  })
})
