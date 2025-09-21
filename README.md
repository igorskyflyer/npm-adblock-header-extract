<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-adblock-header-extract/main/media/adblock-header-extract.png" alt="Ad-block Header Extract – Node.js/TypeScript utility icon for parsing ad-block filter list headers and metadata" width="256" height="256">
  <h1>Ad-block Header Extract</h1>
</div>

<blockquote align="center">Fast Parsing • Clean Metadata • Node.js Utility • Ad-block Filters</blockquote>

<h4 align="center">
  ✂️ Parse and extract ad-block filter list headers with ease. Works on strings or files, trims whitespace, and returns clean metadata for tooling and automation. 📃
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- ✅ Extracts ad-block filter headers quickly  
- 📂 Reads filter files with UTF-8 support  
- ⚡ Returns clean header strings reliably  
- 🛡️ Handles invalid input safely

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/adblock-header-extract
```

```bash
yarn add @igorskyflyer/adblock-header-extract
```

```bash
npm i @igorskyflyer/adblock-header-extract
```

<br>
<br>

## 🤹🏼 API

```ts
function extractHeaderString(
  filter: string,
  trimWhitespace: boolean = true
): string
```

Extracts the header and metadata from an Adblock filter text.

- `filter` - the string that contains the Adblock filter,
- `trimWhitespace` - should the whitespace be trimmed or not. Defaults to `true`.  

Returns the extracted header.

---

```ts
function extractHeaderString(
  filter: string,
  trimWhitespace: boolean = true
): string
```

Extracts the header and metadata from an Adblock filter file. File is read with the `UTF-8` encoding by default.

- `file` - the path to the filter file,
- `trimWhitespace` - should the whitespace be trimmed or not. Defaults to `true`.

<br>

Throws an error if the file cannot be found or there is an error in reading it.

Returns the extracted header.

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { extractHeaderFromFile, extractHeaderString } from '@igor.dvlpr/adblock-header-extract'

console.log(extractHeaderFromFile('./filter.txt'))

// will print

/*
[Adblock Plus 2.0]
!
!     ___        __   _    __        _      __
!    /   |  ____/ /  | |  / /____   (_)____/ /
!   / /| | / __  /   | | / // __ \ / // __  /
!  / ___ |/ /_/ /    | |/ // /_/ // // /_/ /
! /_/  |_|\____/     |___/ \____//_/ \____/
!
!
! {@!}
! Title: AdVoid.Full
! Description: Blocks major ad-servers, trackers, malware, fake download links, cookie-consent banners, popups, modals, push notifications, survey, newsletter and subscribe popups, sharing, Google Chromecast, popup chats, post widgets, like widgets, comments, service workers, news widgets, JavaScript and CSS maps, PWA install banners, Webmanifests, SWF objects
! Version: 3.0.3340
! Last modified: 2024-07-15T02:07:07.895+02:00
! Expires: 24 hours (update frequency)
! Homepage: https://github.com/the-advoid/ad-void
! Entries: 6615
! Author: Igor Dimitrijević (@igorskyflyer)
! GitHub issues: https://github.com/the-advoid/ad-void/issues
! GitHub pull requests: https://github.com/the-advoid/ad-void/pulls
! License: https://github.com/the-advoid/ad-void/blob/main/LICENSE
! Maintained by: Aria, igorskyflyer and all of the contributors
! See the CONTRIBUTORS.md (https://github.com/the-advoid/ad-void/blob/main/CONTRIBUTORS.md) file for more information
! Source: World Wide Web
*/
```

<br>

`./filter.txt`
```adblock
[Adblock Plus 2.0]
!
!     ___        __   _    __        _      __
!    /   |  ____/ /  | |  / /____   (_)____/ /
!   / /| | / __  /   | | / // __ \ / // __  /
!  / ___ |/ /_/ /    | |/ // /_/ // // /_/ /
! /_/  |_|\____/     |___/ \____//_/ \____/
!
!
! {@!}
! Title: AdVoid.Full
! Description: Blocks major ad-servers, trackers, malware, fake download links, cookie-consent banners, popups, modals, push notifications, survey, newsletter and subscribe popups, sharing, Google Chromecast, popup chats, post widgets, like widgets, comments, service workers, news widgets, JavaScript and CSS maps, PWA install banners, Webmanifests, SWF objects
! Version: 3.0.3340
! Last modified: 2024-07-15T02:07:07.895+02:00
! Expires: 24 hours (update frequency)
! Homepage: https://github.com/the-advoid/ad-void
! Entries: 6615
! Author: Igor Dimitrijević (@igorskyflyer)
! GitHub issues: https://github.com/the-advoid/ad-void/issues
! GitHub pull requests: https://github.com/the-advoid/ad-void/pulls
! License: https://github.com/the-advoid/ad-void/blob/main/LICENSE
! Maintained by: Aria, igorskyflyer and all of the contributors
! See the CONTRIBUTORS.md (https://github.com/the-advoid/ad-void/blob/main/CONTRIBUTORS.md) file for more information
! Source: World Wide Web

! {@0} Domains (global)
||02cscosgbuzl.top^
||05e11c9f6f.com^
||0af2a962b0102942d9a7df351b20be55.com^
```

<br>
<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-adblock-header-extract/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-adblock-header-extract/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[**@igorskyflyer/normalized-string**](https://www.npmjs.com/package/@igorskyflyer/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>

[**@igorskyflyer/zep**](https://www.npmjs.com/package/@igorskyflyer/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

<br>

[**@igorskyflyer/mapped-replacer**](https://www.npmjs.com/package/@igorskyflyer/mapped-replacer)

> _🦗 Zero-dependency Map and RegExp based string replacer with Unicode support. 🍁_

<br>

[**@igorskyflyer/strip-yaml-front-matter**](https://www.npmjs.com/package/@igorskyflyer/strip-yaml-front-matter)

> _🦓 Strips YAML front matter from a String or a file. 👾_

<br>

[**@igorskyflyer/strip-html**](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
