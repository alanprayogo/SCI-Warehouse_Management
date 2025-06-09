<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::where('role_name', 'Admin')->first();

        if ($adminRole) {
            User::firstOrCreate(
                ['email' => 'admin@example.com'],
                [
                    'role_id' => $adminRole->id,
                    'name' => 'Admin User',
                    'username' => 'admin',
                    'email_verified_at' => now(),
                    'password' => Hash::make('password'), // ganti dengan yang aman
                    'remember_token' => null,
                ]
            );
        }
    }
}
