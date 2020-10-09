import path from "path"

const outputPath = path.resolve(__dirname, "dist")

console.log(`Output path is "${outputPath}".`)

export { outputPath }