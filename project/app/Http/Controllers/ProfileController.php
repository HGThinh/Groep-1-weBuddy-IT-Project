<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response // Request: object om toegang te krijgen tot alle info over het HTTP-verzoek 
    { 
        return Inertia::render('Profile/Edit', [ //component, hetzelfde als return view('Profile/Edit') maar dan React ipv Blade
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail, //data die wordt meegegeven aan de component/view
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse // ProfileUpdateRequest: request object die de validatie regels bevat
    {
        $request->user()->fill($request->validated()); //fill: vult de attributen van de gebruiker met de (door profileupdatrequest) gevalideerde data 

        if ($request->user()->isDirty('email')) { //isDirty: checkt of de waarde van email is veranderd
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
