<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/training/note', function () {
    return Inertia::render('Training/Note');
});

Route::get('/training/interval', function () {
    return Inertia::render('Training/Interval');
});

Route::get('/training/chord', function () {
    return Inertia::render('Training/Chord');
});

Route::get('/training/scale', function () {
    return Inertia::render('Training/Scale');
});

Route::get('/training/triads', function () {
    return Inertia::render('Training/Triads');
});