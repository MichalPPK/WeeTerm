import * as fig from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

export const figlet = async (args?: string[]): Promise<string> => {
  let output = args.join('+');

  if (!output) {
    return 'Usage: figlet [phrase]. Example: figlet Hello World';
  }
  else {
    return fig.text(output, function(err, data) {
    if (err) {
        return ('Something went wrong...');
    }
    return (data)
});
  }
};
