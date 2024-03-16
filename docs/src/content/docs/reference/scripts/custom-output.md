---
title: Custom Output
sidebar:
    order: 12
---

The `defOutput` function registers a callback to do custom processing of the LLM output at the end of the generation process. This function allows to create new files or modify the existing ones.

```js
// compute a filepath
const output = path.join(path.dirname(env.spec), "output.txt")
// post processing
defOutput(output => {
    return {
        files: [
            // emit entire content to a specific file
            [output]: output.text
        ]
    }
})
```

## Clearning generated files

This example clears the `fileEdits` object, which contains the parsed file updates.

```js
defOutput((output) => {
    // clear out any parsed content
    for (const k of Object.keys(output.fileEdits)) {
        delete output.fileEdits[k]
    }
})
```