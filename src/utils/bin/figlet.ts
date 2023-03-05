import * as fig from 'figlet';

export const figlet = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    console.log('Usage: figlet text');
  } else {
    output = args.join(' ');
    return fig.text(output);
  }
};
