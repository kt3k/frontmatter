import { parse } from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

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
