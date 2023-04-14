'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    const i = 4;
    const d = 4.0;
    const s = 'HackerRank'

    const i1 = parseInt(readLine());
    const d1 = parseFloat(readLine());
    const s1 = readLine();

    console.log(i1 + i)
    console.log((d1 + d).toFixed(1))
    console.log(s+ ' ' + s1);
}