#!/bin/bash

set -e
runuser -l ubuntu -c 'cd /var/www/FEM4Final && npm ci'