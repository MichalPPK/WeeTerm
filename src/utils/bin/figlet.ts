import * as fig from 'figlet';

export const figlet = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    return fig.text('Error'', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
  } else {
    output = args.join(' ');
    return fig(output);
  }
};
