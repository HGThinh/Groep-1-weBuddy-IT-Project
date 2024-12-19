<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Carbon;
use App\Models\User;

class TestEmailController extends Controller
{
    public function sendVerificationEmail()
    {
        $user = User::where('email', 'test0949@student.ehb.be')->first();

        if (!$user) {
            return 'User not found!';
        }

        $verificationUrl = URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(60),
            ['id' => $user->id, 'hash' => sha1($user->email)]
        );

        Mail::raw("Click here to verify your email: $verificationUrl", function ($message) use ($user) {
            $message->to($user->email)
                ->subject('Email Verification');
        });

        return 'Verification email sent!';
    }
}
