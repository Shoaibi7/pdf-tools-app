<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MergePDFController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/',[HomeController::class,'index']);

Route::get('merge_pdf',[MergePDFController::class,'index'])->name('merge_pdf');
Route::get('split_pdf',fn()=>'split_pdf page')->name('split_pdf');
Route::get('pdf_to_jpg',fn()=>'pdf_to_jpg page')->name('pdf_to_jpg');
Route::get('jpg_to_pdf',fn()=>'jpg_to_pdf page')->name('jpg_to_pdf');
Route::get('rotate_pdf',fn()=>'rotate_pdf page')->name('rotate_pdf');
Route::get('compress_pdf',fn()=>'compress_pdf page')->name('compress_pdf');
Route::get('word_to_pdf',fn()=>'word_to_pdf page')->name('word_to_pdf');
Route::get('powerpoint_to_pdf',fn()=>'powerpoint_to_pdf page')->name('powerpoint_to_pdf');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
