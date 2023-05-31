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
        Schema::create('teapais', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('last_update_by');
            $table->string('tanggalTeapai');
            $table->string('waktuTeapai');
            $table->string('venueTeapaiPria');
            $table->string('venueTeapaiWanita');
            $table->json('perlengkapanTeapai')->nullable();
            $table->longText('rundownAcaraTeapai');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teapais');
    }
};
