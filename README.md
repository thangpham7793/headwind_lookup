# headwind_lookup
A simple CLI for looking up headwind classes using Deno

To install:

- Download `hw` binary or clone repo and compile with Deno 
- Then save it to your `bin` folder

To use:

#### Fuzzy Seach

- Simple type `hw` plus any keyword.

```bash

hw pt-4

hw fontSize

// color codes need to be quoted

hw "#153D3A"

```

#### Numeric Comparator Search

- Valid Operators: `eq`, `lt`, `gt`, `lte`, `gte`

```bash

hw pt gt 20

```

#### Numeric Range Search

- Format: `hw` + `keyword` + `btw` + `num` + `num`

```bash

hw padding btw 10 30 

```