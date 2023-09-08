    <?php

    use App\Http\Controllers\ProfileController;
    use App\Http\Controllers\ChirpController;
    use App\Http\Controllers\ProfessorController;
    use App\Http\Controllers\VacantController;
    use Illuminate\Foundation\Application;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });

    Route::get('/Test', function(){
        return Inertia::render('Welcome2');
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

   Route::resource('vacants', VacantController::class)
    ->only(['index', 'store', 'edit', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

 
    Route::resource('chirps', ChirpController::class)
        ->only(['index', 'store', 'update', 'destroy', 'like'])
        ->middleware(['auth', 'verified']);

    Route::resource('professors', ProfessorController::class)
        ->only(['index', 'store', 'update', 'destroy'])
        ->middleware(['auth', 'verified']);

    // Route::resource('jobs', VacantController::class)
    //     ->only(['index', 'store', 'update', 'destroy'])
        // ->middleware(['auth', 'verified']);
        
    require __DIR__.'/auth.php';
