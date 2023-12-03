import { program } from 'commander'
import { Aoc, Day } from './aoc'
import * as fs from 'fs'

const days: Map<string, () => Day> = new Map([
   ['1', Aoc.day1],
   ['2', Aoc.day2],
])

const command = program
   .description('Welcome to AOC')
   .argument('<day>', 'The number of the day')

command.action((...args: any[]) => {
   const dayNumber = args[0]
   console.log(`Executing day ${dayNumber}`)
   const day = days.get(dayNumber)?.()
   const part1Result = day?.part1(
      fs.readFileSync(`./puzzles/day_${dayNumber}.txt`, 'utf-8')
   )
   const part2Result = day?.part2(
      fs.readFileSync(`./puzzles/day_${dayNumber}.txt`, 'utf-8')
   )
   console.log('Result, part 1 %s, part 2 %s', part1Result, part2Result)
})

program.parse()
