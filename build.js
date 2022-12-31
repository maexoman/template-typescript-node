const exec = require('child_process').exec;
const os = require('os').type();
switch (os) {
	case 'Linux':
	case 'Darwin':
		exec('rm -rf ./lib && rm -rf ./types && tsc');
		break;
	case 'Windows':
		exec('rmdir /s ./lib & rmdir /s ./types & tsc');
		break;
	default: console.log('Unsupported OS found: %s', os);
}