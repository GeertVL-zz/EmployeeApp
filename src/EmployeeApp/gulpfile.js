﻿/// <binding AfterBuild='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
    scriptSrc: './scripts/',
    npmSrc: './node_modules/',
    rootTarget: './wwwroot/',
    libTarget: './wwwroot/libs/'
};

var libsToMove = [
    paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
    paths.npmSrc + '/systemjs/dist/system.js',
    paths.npmSrc + '/systemjs/dist/system-polyfills.js',
    paths.npmSrc + '/rxjs/bundles/Rx.js',
    paths.npmSrc + '/reflect-metadata/Reflect.js',
    paths.npmSrc + '/angular2/bundles/angular2.dev.js',
    paths.npmSrc + '/zone.js/dist/zone.js',
    paths.npmSrc + '/es6-shim/es6-shim.min.js',
    paths.npmSrc + '/angular2/bundles/router.dev.js',
    paths.npmSrc + '/angular2/bundles/http.dev.js'
];

gulp.task('default', ['moveToLibs', 'copyResources'], function() {

});

gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});

gulp.task('copyResources', function() {
    return gulp.src(paths.scriptSrc + '*.{css,html}').pipe(gulp.dest(paths.rootTarget));
});