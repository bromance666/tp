import fs from 'fs';
import path from 'path';

function getComponentPath(dir) {
	let files = fs.readdirSync(path.resolve(__dirname, `../${dir}`));
	return files.map(file => {
		return `/${dir}/${file}`
	})
}

export default getComponentPath;
