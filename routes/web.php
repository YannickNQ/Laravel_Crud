    <?php

    use App\Http\Controllers\ProfileController;
    use App\Http\Controllers\ChirpController;
    use App\Http\Controllers\ProfessorController;
    use App\Http\Controllers\VacantController;
    use Illuminate\Foundation\Application;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;
    use Laravel\Socialite\Facades\Socialite;
    use App\Models\User;
    use Illuminate\Support\Facades\Auth;


    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });


    Route::get('/google-auth/redirect', function () {
        return Socialite::driver('google')->redirect();
    });
     
    Route::get('/google-auth/callback', function () {
        $user_google = Socialite::driver('google')->stateless()->user();
        $user = User::updateOrCreate([
            'google_id' => $user_google -> id,
        ], [
            'name' => $user_google -> name,
            'email' =>$user_google -> email,
        ]);

        Auth::login($user);

        return redirect('/dashboard');
        // dd($user);
        // $user->token
    });

    Route::get('/facebook-auth/redirect', function () {
        return Socialite::driver('facebook')->redirect();
    });
     
    Route::get('/facebook-auth/callback', function () {
        $user_facebook = Socialite::driver('facebook')->stateless()->user();
        $user = User::updateOrCreate([
            'facebook_id' => $user_facebook -> id,
        ], [
            'name' => $user_facebook -> name,
            'email' =>$user_facebook -> email,
        ]);

        Auth::login($user);

        return redirect('/dashboard');
        // dd($user);
        // $user->token
    });


    Route::get('/mydashboard', function () {
        return Inertia::render('MyDashboard');
    })->middleware(['auth', 'verified'])->name('mydashboard');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

   Route::resource('vacants', VacantController::class)
    ->only(['index', 'store', 'edit', 'update', 'destroy', 'show'])
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
