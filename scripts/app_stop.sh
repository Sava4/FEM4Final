#!/bin/bash

runuser -l ubuntu -c 'pm2 delete server || true'
rm -rf /var/www/FEM4Final/node_modules