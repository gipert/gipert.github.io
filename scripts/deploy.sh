#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

scripts/build.sh

rsync -av -e "ssh -A pertoldi@gate.pd.infn.it ssh" dist/ pertoldi@lx.pd.infn.it:/userswww/pertoldi/
