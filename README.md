# Weather.Family

This repo is a fork of the [Hometown](https://github.com/hometown-fork/hometown/) fork of [Mastodon](https://github.com/tootsuite/mastodon), customized for my personal instance.

## Differences from Hometown

- All posts are [local-only](https://github.com/hometown-fork/hometown/wiki/Local-only-posting) for all profiles _by default_. This can be turned off in user settings like normal, but makes it so that new users don't need to know what federation is. ([aff697ab](https://github.com/steamwings/weather.family/commit/aff697ab2f8b0260185d5916242764bd32dada7f))
- Fly.io-related changes
  - Dockerfile updated for multiple processes using [overmind](https://github.com/DarthSim/overmind), based on [the setup here](https://github.com/tmm1/flyapp-mastodon)
  - files for deployment (most importantly, [fly.toml](./fly.toml))
- Fix `streaming` to allow IPv6 Redis addresses [7f26541](https://github.com/steamwings/weather.family/pull/1/commits/7f26541a87539d3738fef4d265e44ca5d64eca68)

## License

Copyright (C) Zander ("steamwings") and all contributors

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
