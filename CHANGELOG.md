# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
<!-- #### Added -->
<!-- #### Changed -->
<!-- #### Removed -->

## Major Releases:
### v0.1.0 - 2019 06 29
- Initial Release

### [v2.0.0] - 2019 07 03
#### Added
- All non-SSO ESI endpoints
- Docs
- `getSettings` and `setSettings`
#### Changed
- Updated README.md
- Improved error handling
- Changed constants declared as `let`s to `const`s
- Datasource is now modifiable

### [v3.0.0] - 2019 08 24
#### Added
- JSDoc
- `inputValidation` and `request` (#4, #5)
#### Changed
- Codebase Refactoring (@JFCodes, #4, @cppctamber, #5)
- `endpoints.js`
#### Removed
- `addArrays`

#### Removed
- `CONTRIBUTING.md`

### [v4.0.1] - 2020 10 30
#### Added
- Support for authenticated routes
- Support for tokens
- Support for getting requested data in a different language
- Local configuration file
- Methods return headers along with data
#### Changed
- Package is now a class
#### Removed
- Datasource modification (ESI has removed Singularity data)
#### Additional Info
- Version is `4.0.1` because I (for some reason) can't publish it as `4.0.0`.

## Minor Releases:
### [v1.0.1] - 2019 06 29
#### Added
- CHANGELOG.md
- Mocha/Chai testing
#### Changed
- Package.json to support Mocha tests

### [v2.1.0] - 2019 07 12
#### Added
- `addArrays` and `sleep`
#### Changed
- Errors are now thrown instead of returned
- Changed the name of `alliances.icons` to `alliances.icon`

### [v2.1.2] - 2019 07 12
#### Changed
- `Lodash` security fix

### [v3.0.2] - 2019 08 24
#### Changed
- Fixed some bugs with the refactoring

### [v3.0.4] - 2019 12 11
- Added warning for next major release
- Fixed issues with some endpoints
- Fixed a issue with a variable already being declared

### [v3.0.5] - 2019 12 16
- Fixed a issue with the `market.orders` endpoint where the validation will fail no matter what ([@GeekyAubergine](https://github.com/GeekyAubergine), [#11](https://github.com/ExperiBass/esiJS/pull/11))
- Typos

### [v4.0.2] - 2020 10 31
- Fixed a issue where `character.affiliation`s parameter name was off ([@quantumferret](https://github.com/quantumferret), [#15](https://github.com/ExperiBass/esiJS/pull/15))

### [v4.0.3] - 2020 11 01
- Fixed a issue with `setSettings` where the given values weren't saved with the right names, and some input was ignored

### [v4.0.6] - 2021 5 19
- Changes error handling, updates docs

### [v4.0.7] - 2021 8 12
- Updates dependencies

### [v4.1.0] - 2021 11 3
#### Added
- Caching (Requests are cached for 5 minutes)
#### Changed
- The requests function now checks if a request has
  been cached before firing off a new one
#### Other
- Update Axios

### [v4.1.2] - 2024 05 29
#### Changed
- Bugfix missing routes const, request auth header (#21)
- Added character location endpoints (#22)
- Fix wrong route in corporation.allianceHistory (#26)
#### Other
- Update Dependencies

### [v4.1.3] - 2024 06 12
#### Changed
- Update docs
- Fix wrong route in alliance.corps (#27)
#### Other
- Update Dependencies

<!-- LINKS -->
<!-- RELEASES -->
[Unreleased]: https://github.com/ExperiBass/esiJS/compare/v0.1.1...dev
[v0.1.1]: https://github.com/ExperiBass/esiJS/compare/v0.1.0...v0.1.1
[v2.0.0]: https://github.com/ExperiBass/esiJS/compare/v0.1.1...v2.0.0
[v2.1.2]: https://github.com/ExperiBass/esiJS/compare/v2.0.0...v2.1.2
[v3.0.0]: https://github.com/ExperiBass/esiJS/compare/v2.1.2...v3.0.0
[v3.0.2]: https://github.com/ExperiBass/esiJS/compare/v3.0.0...v3.0.2
[v4.0.1]: https://github.com/ExperiBass/esiJS/compare/v3.0.2...v4.0.1
[v4.0.2]: https://github.com/ExperiBass/esiJS/compare/v4.0.1...v4.0.2
[v4.0.3]: https://github.com/ExperiBass/esiJS/compare/v4.0.2...v4.0.3
[v4.0.6]: https://github.com/ExperiBass/esiJS/compare/v4.0.3...v4.0.6
[v4.0.7]: https://github.com/ExperiBass/esiJS/compare/v4.0.6...v4.0.7
[v4.1.0]: https://github.com/ExperiBass/esiJS/compare/v4.0.7...v4.1.0
[v4.1.2]: https://github.com/ExperiBass/esiJS/compare/v4.1.0...v4.1.2
<!-- ISSUES -->
