const path = require('path')
const fs = require('fs')

function getUrls(dir) {
	let files = fs.readdirSync(path.resolve(__dirname, `${dir}`));
	return files.map(file => {
		console.log(file)
		return `/${dir}/${file}`
	})
}
getUrls('./packages')