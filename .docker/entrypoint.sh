#!/bin/sh
set -e

yarn install

echo "run in DEV mode"
yarn start:dev
