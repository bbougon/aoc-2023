export type Day = {
   part1: (puzzle: string) => number
   part2: (puzzle: string) => number
}

export const Aoc = {
   day1: (): Day => {
      function addCurrentLineTo(line: string, previousValue: number) {
         const numbers = line.replace(/[a-zA-Z]/g, '')
         return (
            parseInt(numbers.charAt(0) + numbers.charAt(numbers.length - 1)) +
            previousValue
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
               Array.from(line.matchAll(DIGITS), (match) => ({
                  match: match[1],
                  index: match['index'],
               })).forEach(
                  (match) =>
                     (result += line.replaceAll(
                        match.match,
                        DIGITS_CONVERSION.get(match.match as unknown as Number)!
                     ))
               )
               return addCurrentLineTo(
                  result === '' ? line : result,
                  previousValue
               )
            }, 0)
         },
      }
   },
   day2: (): Day => {
      const rules = {
         redCubeLimit: 12,
         blueCubeLimit: 14,
         greenCubeLimit: 13,
      }
      type CubeColors = 'blue' | 'red' | 'green'
      type Cube = {
         quantity: number
         color: CubeColors
      }
      type Cubes = Cube[]
      type Game = {
         id: number
         subSets: Cubes[]
      }

      function createGame(stringGame: string) {
         const splitGame = stringGame.split(':')
         const subSets: Cubes[] = splitGame[1]
            .split(';')
            .map((subsets) => subsets.split(','))
            .reduce((previousValue: Cubes[], currentValue) => {
               const cubes = currentValue.map((subset) => {
                  const cube = subset.trim().split(' ')
                  return {
                     quantity: parseInt(cube[0]),
                     color: cube[1],
                  } as Cube
               })
               previousValue.push(cubes)
               return previousValue
            }, [])
         const game: Game = {
            id: parseInt(splitGame[0].split(' ')[1]),
            subSets,
         }
         return game
      }

      return {
         part1(puzzle: string): number {
            function isLimitReached(
               subSets: Cubes[],
               color: CubeColors,
               limit = 0
            ) {
               return (
                  subSets
                     .flatMap((m) => m)
                     .filter(
                        (subset) =>
                           subset.color === color && subset.quantity > limit
                     ).length > 0
               )
            }

            return puzzle.split('\n').reduce((previousValue, currentValue) => {
               const game = createGame(currentValue)
               const redCubesLimitReached = isLimitReached(
                  game.subSets,
                  'red',
                  rules.redCubeLimit
               )
               const blueCubesLimitReached = isLimitReached(
                  game.subSets,
                  'blue',
                  rules.blueCubeLimit
               )
               const greenCubesLimitReached = isLimitReached(
                  game.subSets,
                  'green',
                  rules.greenCubeLimit
               )
               return redCubesLimitReached ||
                  blueCubesLimitReached ||
                  greenCubesLimitReached
                  ? previousValue
                  : game.id + previousValue
            }, 0)
         },
         part2(puzzle: string): number {
            const retrieveFewestNumberOfCubeByColor = (
               game: Game,
               color: CubeColors
            ) => {
               return game.subSets
                  .flatMap((cubes) =>
                     cubes.filter((cube) => cube.color === color)
                  )
                  .map((cube) => cube.quantity)
                  .sort((a, b) => (a > b ? 1 : -1))
                  .reverse()[0]
            }

            return puzzle.split('\n').reduce((previousValue, currentValue) => {
               const game = createGame(currentValue)

               const maxRed = retrieveFewestNumberOfCubeByColor(game, 'red')
               const maxBlue = retrieveFewestNumberOfCubeByColor(game, 'blue')
               const maxGreen = retrieveFewestNumberOfCubeByColor(game, 'green')
               return previousValue + maxRed * maxGreen * maxBlue
            }, 0)
         },
      }
   },
}
