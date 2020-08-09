import { yamlParse } from "./deps.ts";

export type ParseResult = {
  data: unknown;
  content: string;
};

const reFrontmatter = /^---([\s\S]*)^---$([\s\S]*)/m;

export function parse(text: string): ParseResult {
  if (!reFrontmatter.test(text)) {
    return {
      data: undefined,
      content: text,
    };
  }

  const [_, yaml, content] = text.match(reFrontmatter)!;

  return {
    data: yamlParse(yaml.trim()),
    content: content.trim(),
  };
}
