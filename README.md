## Solid Start Bug Repro

When using the same Typescript path aliases from within a package and the app it fails to resolve correctly.

## Reproduce

```bash
pnpm i
pnpm dev
# See error on `http://localhost:3000
```

## Workaround

You can adding the following patch to the `package.json` to workaround the issue (make sure you run `pnpm i` after adding the patch).

I'm not sure if this is going to have any other consequences.

```bash
{
    ...
    "pnpm": {
        "patchedDependencies": {
            "@solidjs/start": "patches/@solidjs__start.patch"
        }
    }
}
```
