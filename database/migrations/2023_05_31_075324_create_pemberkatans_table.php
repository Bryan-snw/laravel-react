<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pemberkatans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('last_update_by');
            $table->string('tanggalPemberkatan');
            $table->string('waktuPemberkatan');
            $table->string('tempatPemberkatan');
            $table->string('alamatPemberkatan');
            $table->string('namaPIC');
            $table->string('nomorPIC');
            $table->json('perlengkapanPemberkatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemberkatans');
    }
};
