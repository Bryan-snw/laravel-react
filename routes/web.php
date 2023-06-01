<?php

use App\Http\Controllers\ExportPemberkatan;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\TeapaiController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResepsiController;
use App\Http\Controllers\SangjitController;
use App\Http\Controllers\PersonalsController;
use App\Http\Controllers\PemberkatanController;
use App\Models\Pemberkatan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/home', [NewsController::class, 'index'])->name('home');

Route::resource('/home', NewsController::class);

Route::resource('/personals', PersonalsController::class);

Route::resource('/resepsi', ResepsiController::class);

Route::resource('/sangjit', SangjitController::class);

Route::resource('/teapai', TeapaiController::class);

Route::resource('/pemberkatan', PemberkatanController::class);

Route::get('/pemberkatan-export', [ExportPemberkatan::class, 'export']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
