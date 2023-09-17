<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class SocialController extends Controller
{
    public function redirect($social){
        return Socialite::driver($social)->redirect();
    }

    public function callback($social){
        $SocialUser = Socialite::driver($social)->user();
        $user = User::updateOrCreate([
            'social_id' => $SocialUser->id,
            'social' => $social
        ], [
            // 'name' => $SocialUser->name,
            // 'name' => (if($SocialUser->name == null){
            //     $SocialUser->name = $SocialUser->nickname;
            //     return $SocialUser->name;
            // }else {
            //     return $Socialuser->name;
            // }),
            // 'username' => $SocialUser->nickname,
            'name' => ($SocialUser->name == null) ? $SocialUser->nickname : $SocialUser->name,
            'email' => $SocialUser->email,
            'social_token' => $SocialUser->token,
        ]);
     
        Auth::login($user);
     
        return redirect('/dashboard');
    }
}
