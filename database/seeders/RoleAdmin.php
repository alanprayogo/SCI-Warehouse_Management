<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleAdmin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert role Admin
        $adminRole = Role::firstOrCreate(
            ['role_name' => 'Admin']
        );

        // Insert user with Admin role
        User::firstOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'role_id' => $adminRole->id,
                'name' => 'Admin User',
                'username' => 'admin', // sesuai struktur migration
                'email_verified_at' => now(),
                'password' => Hash::make('password'), // Ganti dengan password aman
                'remember_token' => null,
            ]
        );
    }
}
