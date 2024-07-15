// Author: Igor Dimitrijević (@igorskyflyer)

import { readFileSync } from 'node:fs'
import { assert, describe, suite, test } from 'vitest'
import { extractHeaderFromFile, extractHeaderString } from '../src/index.mjs'

const advoid: string = readFileSync('./test/data/result/header.txt', 'utf-8')

describe('🧪 Adblock header extract tests 🧪', () => {
  suite('extractHeaderString()', () => {
    test('#1 should return an empty string', () => {
      // @ts-expect-error
      assert.isEmpty(extractHeaderString())
    }) // #1

    test('#2 should return an empty string', () => {
      assert.isEmpty(extractHeaderString(''))
    }) // #2
  })

  suite('extractHeaderFromFile()', () => {
    test('#3 should throw', () => {
      assert.throws(() => {
        // @ts-expect-error
        extractHeaderFromFile()
      })
    }) // #3

    test('#4 should return an empty string', () => {
      assert.throws(() => {
        extractHeaderFromFile('fake.txt')
      })
    }) // #4

    test('#5 should return the file header (trim)', () => {
      const result: string = extractHeaderFromFile(
        './test/data/filter/advoid.txt'
      )

      assert.equal(result, advoid)
    }) // #5

    test('#6 should return the file header (no trim)', () => {
      const result: string = extractHeaderFromFile(
        './test/data/filter/advoid.txt',
        false
      )

      assert.equal(result, `${advoid}\r\n`)
    }) // #6
  })
})
