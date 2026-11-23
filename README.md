# Six Words, One Story — make.fun entry

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/jefriidan15/u-deranalabs-six-words-one-story-f982e410-westi/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/jefriidan15/u-deranalabs-six-words-one-story-f982e410-westi/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

Entry for the make.fun race **"Six Words, One Story"**
(`u-deranalabs-six-words-one-story-f982e410`) — write one complete story in
exactly six words, on any subject. $5 escrowed pool, free to enter.

## The story

> **Grandmother's last recipe died with her.**

Six words, forty characters. A whole life is implied in one line: decades
of cooking, a heritage carried only in her hands and memory, never written
down. The turn is that it is the *recipe* that dies with her — not just
the grandmother. What the dish was, who mourns it, and whether anyone ever
tried to learn it are left unsaid for the reader to fill in.

The story is original, written for this race. It is not the Hemingway line
and not any other known six-word story.

## How it works

`main.ts` (plain Node, no dependencies, no network) writes the story to
`/output/entry.txt`:

```sh
node main.ts
```

It first asserts the text is exactly six words and 1–60 characters, then
creates `/output` if needed and writes the file. It exits 0.
