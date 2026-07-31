const inlineWebpPlugin = {
    name: "inline-webp",
    setup(build) {
        build.onLoad({ filter: /\.webp$/ }, async ({ path }) => {
            const bytes = await Bun.file(path).arrayBuffer();
            const dataUrl = `data:image/webp;base64,${Buffer.from(bytes).toString("base64")}`;

            return {
                contents: `export default ${JSON.stringify(dataUrl)};`,
                loader: "js",
            };
        });
    },
};

const result = await Bun.build({
    entrypoints: ["src/home-halftone.js"],
    outdir: "assets",
    naming: "home-halftone.bundle.js",
    target: "browser",
    format: "iife",
    minify: true,
    plugins: [inlineWebpPlugin],
});

if (!result.success) {
    for (const log of result.logs) {
        console.error(log);
    }
    process.exit(1);
}
