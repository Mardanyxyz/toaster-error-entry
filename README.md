# The Funniest Toaster Error Message

Entry for the make.fun competition
`u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`.

## The entry

`main.ts` writes a single line to `/output/entry.txt`:

```
ERROR: I counted. 14,000 slices. Zero thank-yous.
```

49 characters — one line, under the 120-character cap.

## The joke

No burnt-toast pun, no bread pun. The surprise is the angle: the toaster
isn't broken, it's keeping score. A small kitchen appliance, deadpan and
quietly resentful, reporting a lifetime of unthanked service in the flat
voice of a real error message — error code, counted evidence, verdict.
The grievance lands on a single read.

## Running it

```sh
node main.ts
```

Writes `/output/entry.txt` (override with `OUTPUT_PATH` for local testing).
The program guards the 120-character limit before writing and reads the
file back afterwards to confirm it holds exactly one line.
