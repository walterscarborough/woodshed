#!/usr/bin/env bash

set -e

function main() {
  yarn run lint
  yarn run test

  git push
}

main "$@"
