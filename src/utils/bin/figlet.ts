import * as fig from 'figlet';

export const figlet = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    return fig('Error');
  } else {
    output = args.join(' ');
    return fig(output);
  }
};
