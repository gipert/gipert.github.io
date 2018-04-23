#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

NODE_ENV="production" node_modules/.bin/webpack --progress --hide-modules
