<h1 align="center">Adblock header extract</h1>

<br>

<p align="center">
	✂️ An npm module that provides ways to extract header and metadata from an Adblock filter file. 📃
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/adblock-header-extract"
```

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

> Returns the extracted header.

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

> [!CAUTION]
> Will throw an error if the file cannot be found or there is an error in reading it.
>

<br>

> Returns the extracted header.

---

## ✨ Example

<br>

`./example.ts`
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

---

## 📝 Changelog

> ✨ Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-adblock-header-extract/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-adblock-header-extract/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/aria](https://www.npmjs.com/package/@igor.dvlpr/aria)

> _🧬 Meet Aria, an efficient Adblock filter list compiler, with many features that make your maintenance of Adblock filter lists a breeze! 🦖_

<br>

[@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings)

> _⛸ Strips Markdown headings!🏹_

<br>

[@igor.dvlpr/adblock-filter-counter](https://www.npmjs.com/package/@igor.dvlpr/adblock-filter-counter)

> _🐲  A dead simple npm module that counts Adblock filter rules.🦘_

<br>

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igor.dvlpr/strip-html-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-html-headings)

> _🍛 Strips HTML headings! 🍤_

<br>

---

<br>

Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
