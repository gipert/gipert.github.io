#!/usr/bin/env bash

rsync -av -e "ssh -A pertoldi@gate.pd.infn.it ssh" dist/ pertoldi@lx.pd.infn.it:/userswww/pertoldi/
