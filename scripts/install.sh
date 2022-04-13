#!/bin/bash

git pull

npm install
npm run build:prod
npm run build:en

echo "Copy app htaccess..."
cp .htaccess.app .htaccess
echo "Copy dist htaccess..."
cp .htaccess.dist dist/ks-land/.htaccess

echo "Moving to public_html..."
cp -a dist/ks-land/. ../public_html/

echo "Moving en to public_html..."
mkdir ../public_html/en
cp -a dist/ks-land-en/en ../public_html/en
