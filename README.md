In this repository I've tried to stick as close as possible to the default values for either dependency, but please note that I'm using a beta version of webpacker (this shouldn't impact this bug).

To reproduce, clone the repository, run `bundle` and `yarn` and start the webpack-dev-server: `bin/webpack-dev-server`.

The expected result would be for Tailwind to compile once and start watching, but instead it now keeps recompiling in an infinite loop.
