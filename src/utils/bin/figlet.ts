import * as fig from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

fig.parseFont('Standard', standard);

export const figlet = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    return 'Usage: figlet text';
  } else {
    output = args.join(' ');
    return fig(output);
  }
};
