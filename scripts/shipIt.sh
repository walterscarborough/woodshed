#!/usr/bin/env bash

function main() {
  yarn run lint
  yarn run test

  git push
}

main "$@"
