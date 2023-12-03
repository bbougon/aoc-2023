export type Day = {
    part1: (puzzle: string) => number
    part2: (puzzle: string) => number
}
export const Aoc = {
    day1: (): Day => {
        function addCurrentLineTo(line: string, previousValue: number) {
            const numbers = line.replace(/[a-zA-Z]/g, '')
            return (
                parseInt(
                    numbers.charAt(0) + numbers.charAt(numbers.length - 1)
                ) + previousValue
            )
        }

        return {
            part1: (puzzle) =>
                puzzle.split('\n').reduce((previousValue, line) => {
                    return addCurrentLineTo(line, previousValue)
                }, 0),
            part2: (puzzle) => {
                type Number =
                    | 'one'
                    | 'two'
                    | 'three'
                    | 'four'
                    | 'five'
                    | 'six'
                    | 'seven'
                    | 'eight'
                    | 'nine'
                const DIGITS =
                    /(?<=((one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)))/g
                const DIGITS_CONVERSION: Map<Number, string> = new Map([
                    ['one', '1'],
                    ['two', '2'],
                    ['three', '3'],
                    ['four', '4'],
                    ['five', '5'],
                    ['six', '6'],
                    ['seven', '7'],
                    ['eight', '8'],
                    ['nine', '9'],
                ])
                return puzzle.split('\n').reduce((previousValue, line) => {
                    let result = ''
                    Array.from(
                        line.matchAll(DIGITS),
                        (match) => ({ match: match[1], index: match['index'] })
                    ).forEach(
                        (match) =>
                            (result += line.replaceAll(match.match, DIGITS_CONVERSION.get(match.match as unknown as Number)!))
                    )
                    return addCurrentLineTo(result === '' ? line : result, previousValue)
                }, 0)
            },
        }
    },
}
