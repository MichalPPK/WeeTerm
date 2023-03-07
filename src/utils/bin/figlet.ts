import * as fig from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

export const figgy = async (args?: string[]): Promise<string> => {
  let output = args.join(' ');

  if (!output) {
    return 'Usage: figgy [phrase]. Example: figgy Hello World';
  }
  else {
    return fig.text(output, {
    font: 'Standard',
}, function(err, data) {
    return(data);
});
  }
};
