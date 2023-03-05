import * as figlet from 'figlet';

class FigletTest() {

    testFiglet(testData: string) => {
        figlet(testData, (error: any, data: any) => {
            if (error) {
                return process.exit(1);
            }
            console.log(chalk.blue(data));
            console.log('');
            process.exit(0);
        });
    }
}
