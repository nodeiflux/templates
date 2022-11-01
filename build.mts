import esbuild from 'esbuild'
import { readdir } from 'node:fs/promises'

const templatePlugin: esbuild.Plugin = {
  name: 'templates',
  setup(build) {
    build.onLoad({ filter: /.*lib\\templates.*/ }, async () => {
      const templates = await readdir('./templates')
      return {
        contents: JSON.stringify(templates),
        loader: 'json',
      }
    })
  },
}

try {
  await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  target: "node18",
  platform: "node",
  outfile: "bin/index.js",
  plugins: [templatePlugin]
})
  console.log('Done!')
} catch (error) {
  console.error(error)
  process.exit(1)
}
