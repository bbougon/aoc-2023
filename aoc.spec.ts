import { describe, expect, it } from 'vitest'
import * as fs from 'fs'
import { Aoc } from './aoc'

describe('AOC', () => {
   describe('Day 1', () => {
      describe('Part 1', () => {
         it('should give 12', () => {
            expect(Aoc.day1().part1('1abc2')).toBe(12)
         })

         it('should give 15', () => {
            expect(Aoc.day1().part1('a1b2c3d4e5f')).toBe(15)
         })

         it('should give 77', () => {
            expect(Aoc.day1().part1('treb7uchet')).toBe(77)
         })

         it('should give 142', () => {
            expect(
               Aoc.day1().part1(
                  fs.readFileSync('./puzzles/day_1_part_1_test.txt', 'utf-8')
               )
            ).toBe(142)
         })
      })

      describe('Part 2', () => {
         it('should give 29', () => {
            expect(Aoc.day1().part2('two1nine')).toBe(29)
         })

         it('should give 83', () => {
            expect(Aoc.day1().part2('eightwothree')).toBe(83)
         })

         it('should give 13', () => {
            expect(Aoc.day1().part2('abcone2threexyz')).toBe(13)
         })

         it('should give 24', () => {
            expect(Aoc.day1().part2('xtwone3four')).toBe(24)
         })

         it('should give 76', () => {
            expect(Aoc.day1().part2('7pqrstsixteen')).toBe(76)
         })

         it('should give 87', () => {
            expect(
               Aoc.day1().part2('eightthreeseven2nnkvlzxkvhszfpqzhl37ddqvnxg')
            ).toBe(87)
         })

         it('should give 62', () => {
            expect(Aoc.day1().part2('6eightwogd')).toBe(62)
         })

         it('should give 22', () => {
            expect(Aoc.day1().part2('2fvq')).toBe(22)
         })

         it('should give 22', () => {
            expect(Aoc.day1().part2('28sevenseven')).toBe(27)
         })

         it('should give 281', () => {
            expect(
               Aoc.day1().part2(
                  fs.readFileSync('./puzzles/day_1_part_2_test.txt', 'utf-8')
               )
            ).toBe(281)
         })
      })
   })

   describe('Day 2', () => {
      describe('Part 1', () => {
         it('should give 1', () => {
            expect(
               Aoc.day2().part1(
                  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
               )
            ).toBe(1)
         })

         it('should give 2', () => {
            expect(
               Aoc.day2().part1(
                  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
               )
            ).toBe(3)
         })

         it('should give 0 for red cubes', () => {
            expect(
               Aoc.day2().part1(
                  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
               )
            ).toBe(0)
         })

         it('should give 0 for blue cubes', () => {
            expect(
               Aoc.day2().part1(
                  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 3 red'
               )
            ).toBe(0)
         })

         it('should give 0 for green cubes', () => {
            expect(
               Aoc.day2().part1(
                  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 14 green, 1 blue, 3 red'
               )
            ).toBe(0)
         })

         it('should give 8', () => {
            expect(
               Aoc.day2().part1(
                  fs.readFileSync('./puzzles/day_2_part_1_test.txt', 'utf-8')
               )
            ).toBe(8)
         })
      })

      describe('Part 2', () => {
         it('should give 48', () => {
            expect(
               Aoc.day2().part2(
                  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
               )
            ).toBe(48)
         })

         it('should give 12', () => {
            expect(
               Aoc.day2().part2(
                  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
               )
            ).toBe(12)
         })
         it('should give 1560', () => {
            expect(
               Aoc.day2().part2(
                  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
               )
            ).toBe(1560)
         })

         it('should give 2286', () => {
            expect(
               Aoc.day2().part2(
                  fs.readFileSync('./puzzles/day_2_part_1_test.txt', 'utf-8')
               )
            ).toBe(2286)
         })
      })
   })

})
