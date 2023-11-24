import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.js"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "@marmooo/kanji",
    version: Deno.args[0],
    description: "Get various grade information about kanji",
    license: "MIT",
    main: "mod.js",
    repository: {
      type: "git",
      url: "git+https://github.com/marmooo/kanji.git",
    },
    bugs: {
      url: "https://github.com/marmooo/kanji/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
