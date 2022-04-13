#!/bin/bash

git pull

npm install
npm run build:prod

echo "Copy app htaccess..."
cp .htaccess.app .htaccess
echo "Copy dist htaccess..."
cp .htaccess.dist dist/ks-land

echo "Moving to public_html..."
cp dist/ks-land ../public_html
