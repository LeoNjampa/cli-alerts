const chalk = require('chalk');
const sym = require('log-symbols');
const success = chalk.green;
const warning = chalk.keyword(`orange`);
const info = chalk.blue;
const error = chalk.red.bold;

module.exports = options => {
	const defaultOptions = {
		type: `error`,
		msg: `All options must be defined!`,
		name: ``
	};

	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;

	const printName = name ? name : type.toUpperCase();

	if (type === `success`) {
		console.log(`\n${sym.success} ${success(` ${printName} `)} ${success(msg)}\n`);
	}

	if (type === `warning`) {
		console.log(`\n${sym.warning} ${warning(` ${printName} `)} ${warning(msg)}\n`);
	}

	if (type === `info`) {
		console.log(`\n${sym.info} ${info(` ${printName} `)} ${info(msg)}\n`);
	}

	if (type === `error`) {
		console.log(
			`\n${sym.error} ${error(` ${printName} `)} ${error(msg)}\n
		`
		);
	}
};
