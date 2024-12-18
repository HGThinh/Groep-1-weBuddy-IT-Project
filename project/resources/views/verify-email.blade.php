<x-app-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <h2>Verify Your Email</h2>

                    @if (session('message'))
                        <div class="alert alert-success">
                            {{ session('message') }}
                        </div>
                    @endif

                    <p>Thanks for signing up! Before getting started, could you verify your email address by clicking on
                        the link we just emailed to you?</p>

                    <form method="POST" action="{{ route('verification.send') }}">
                        @csrf
                        <button type="submit" class="btn btn-primary">
                            Resend Verification Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
