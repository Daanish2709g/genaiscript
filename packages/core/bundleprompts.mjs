import { readdirSync, readFileSync, writeFileSync } from "fs"
import json5 from "json5"
const { parse } = json5

const dir = "./src/genaisrc"
const fp = "./src/default_prompts.ts"
const fmp = "../../docs/src/content/docs/reference/scripts/system.mdx"
const fnp = "../../docs/src/components/BuiltinTools.mdx"
console.debug(`bundling ${dir}/*.genai.js into default_prompts.ts`)
const promptMap = {}
const prompts = readdirSync(dir)
for (const prompt of prompts) {
    if (!prompt.endsWith(".js")) continue
    const text = readFileSync(`${dir}/${prompt}`, "utf-8")

    if (prompt.endsWith(".genai.js"))
        promptMap[prompt.replace(/\.genai\.js$/i, "")] = text
}
const promptFooDriver = readFileSync(
    "./src/genaiscript-api-provider.mjs",
    "utf-8"
)
const promptDefs = {
    ".gitattributes": "genaiscript.d.ts -diff merge=ours linguist-generated",
    "jsconfig.json": JSON.stringify(
        {
            compilerOptions: {
                lib: ["ES2022"],
                target: "ES2022",
                module: "ES2022",
                moduleDetection: "force",
                checkJs: true,
                allowJs: true,
                skipLibCheck: true,
            },
            include: ["*.js", "./genaiscript.d.ts"],
        },
        null,
        4
    ),
    "genaiscript.d.ts": [
        "./src/types/prompt_template.d.ts",
        "./src/types/prompt_type.d.ts",
    ]
        .map((fn) => readFileSync(fn, { encoding: "utf-8" }))
        .map((src) =>
            src.replace(/^\/\/\/\s+<reference\s+path="[^"]+"\s*\/>\s*$/gm, "")
        )
        .join("\n\n"),
}

// listing list of supported wasm languages
const wasms = await readdirSync("../../node_modules/tree-sitter-wasms/out/")
    .map((file) => /^tree-sitter-(\w*)\.wasm$/.exec(file))
    .map((m) => m?.[1])
    .filter((f) => !!f)

    const functions = Object.keys(promptMap)
    .sort()
    .map((k) => {
        const v = promptMap[k]
        const tools = []
        v.replace(
            /defTool\s*\(\s*"([^"]+)"\s*,\s*"([^"]+)"/gm,
            (m, name, description) => {
                tools.push({ id: k, name, description })
                return ""
            }
        )
        return tools
    })
    .flat()

const text = `// autogenerated - node bundleprompts.mjs
export const defaultPrompts = Object.freeze<Record<string, string>>(${JSON.stringify(
    promptMap,
    null,
    4
)});

export const promptDefinitions = Object.freeze<Record<string, string>>(${JSON.stringify(
    promptDefs,
    null,
    4
)});

export const treeSitterWasms: string[] = ${JSON.stringify(wasms)};

export const promptFooDriver = ${JSON.stringify(promptFooDriver)}
\n`

writeFileSync(fp, text, "utf-8")

const markdown = `---
title: System Prompts
sidebar:
    order: 10
description: Learn how to utilize system prompts to enhance script execution in GenAIScript.
keywords: system prompts, script execution, genai templates, environment consistency
---
System prompts are scripts that are executed and injected before the main prompt output.

-   \`system.*.genai.js\` are considered system prompt templates
-   system prompts are unlisted by default
-   system prompts must use the \`system\` instead of \`script\`
-   system prompts are executed with the same environment as the main prompt

\`\`\`js title="system.zscot.genai.js" "system"
system({
    title: "Zero-shot Chain of Thought",
})
$\`Let's think step by step.\`
\`\`\`


To use system prompts in script, populate the \`system\` field with script identifiers.

\`\`\`js title="myscript.genai.js" 'system: ["system.zscot"]'
script({
    ...,
    system: ["system.zscot"]
})
$\`Let's think step by step.\`
\`\`\`

It is also possible to populate system script by include tool names
which will result in importing the tool into the script.

\`\`\`js
script({
    ...,
    tools: ["math_eval"]
})
\`\`\`

## Builtin System Prompts

GenAIScript comes with a number of system prompt that support features like creating files, extracting diffs or
generating annotations. If unspecified, GenAIScript looks for specific keywords to activate the various system prompts.

${Object.keys(promptMap)
    .sort()
    .map((k) => {
        const v = promptMap[k]
        const m = /\b(?<kind>system|script)\(\s*(?<meta>\{.*?\})\s*\)/s.exec(v)
        const meta = parse(m.groups.meta)
        const tools = []
        v.replace(
            /defTool\s*\(\s*"([^"]+)"\s*,\s*"([^"]+)"/gm,
            (m, name, description) => {
                tools.push({ name, description })
                return ""
            }
        )
        return `### \`${k}\`

${meta.title || ""}

${meta.description || ""}

${tools.map(({ name, description }) => `-  tool \`${name}\`: ${description}`).join("\n")}

\`\`\`\`\`js wrap title="${k}"
${v}
\`\`\`\`\`
`
    })
    .join("\n\n")}
`
writeFileSync(fmp, markdown, "utf-8")

writeFileSync(
    fnp,
    `---
title: Builtin Tools
description: List of tools in system prompts
---
import { LinkCard } from '@astrojs/starlight/components';

### Builtin tools

${functions.map(({ id, name, description }) => `<LinkCard title="${name}" description="${description}" href="/genaiscript/reference/scripts/system#${id.replace(/[^a-z0-9_]/gi, "")}" />`).join("\n")}

`,
    "utf-8"
)
