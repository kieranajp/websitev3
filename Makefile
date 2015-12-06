build:
	- rm -rf public_html/dist
	jspm bundle-sfx js/main public_html/dist/compiled.js --minify
