import { Command } from 'commander'

// node cli.js -s
const program = new Command()

program
  .option('-s, --small', 'small pizza size')
  .parse();

const options = program.opts();
if (options.small) console.log('- small pizza size');