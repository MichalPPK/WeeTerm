import * as fig from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

export const figlet = async (args?: string[]): Promise<string> => {
  let output = args.join('+');

  if (!output) {
    return 'Usage: figlet [phrase]. Example: figlet Hello World';
  }
  else {
    return fig(output, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
  }
};
