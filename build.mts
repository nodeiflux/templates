import esbuild from 'esbuild'

try {
  await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  target: "node18",
  platform: "node",
  outfile: "bin/index.js",
})
  console.log('Done!')
} catch (error) {
  console.error(error)
  process.exit(1)
}
