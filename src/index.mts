// Author: Igor Dimitrijević (@igorskyflyer)

import { existsSync, readFileSync } from 'node:fs'

const headerPattern: RegExp = /^(?:\[.*\]\r?\n*)?(?:!.*\r?\n?)+/im

/**
 * Extracts the header and metadata from an Adblock filter text.
 * @param filter The string that contains the Adblock filter.
 * @param trimWhitespace Should the whitespace be trimmed or not. Defaults to `true`.
 * @returns The extracted header.
 * @since v1.0.0
 */
export function extractHeaderString(
  filter: string,
  trimWhitespace: boolean = true
): string {
  if (typeof filter !== 'string') {
    return ''
  }

  headerPattern.lastIndex = -1

  const match: RegExpExecArray | null = headerPattern.exec(filter)
  let result: string = ''

  if (match?.at(0)) {
    result = match[0]
  }

  if (trimWhitespace === true) {
    result = result.trim()
  }

  return result
}

/**
 *
 * Extracts the header and metadata from an Adblock filter file. File is read with the UTF-8 encoding by default.
 * @param file The path to the filter file.
 * @param trimWhitespace Should the whitespace be trimmed or not. Defaults to `true`.
 * @throws Will throw an error if the file cannot be found or there is an error in reading it.
 * @returns The extracted header.
 * @since v1.0.0
 */
export function extractHeaderFromFile(
  file: string,
  trimWhitespace: boolean = true
): string {
  if (!existsSync(file)) {
    throw "Couldn't find the filter file."
  }

  try {
    const filter: string = readFileSync(file, 'utf-8')
    return extractHeaderString(filter, trimWhitespace)
  } catch {
    throw "Couldn't read the filter file."
  }
}
