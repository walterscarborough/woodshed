#!/usr/bin/env bash

set -e

function main() {
  local -r TOP_OF_GIT_REPO=$(git rev-parse --show-toplevel)

  cd "$TOP_OF_GIT_REPO"

  shellcheck scripts/*
  yarn run lint
  yarn run check-circular-dependencies
  yarn run test

  git push
}

main "$@"
