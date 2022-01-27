const mix = require('laravel-mix')
mix.js('resources/JS/app.js', 'Public/JS/app.js').sass('resources/SCSS/app.scss','Public/CSS/app.css')