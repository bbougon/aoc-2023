import { describe, expect, it } from 'vitest'
import * as fs from 'fs'
import { Aoc } from './aoc'

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
