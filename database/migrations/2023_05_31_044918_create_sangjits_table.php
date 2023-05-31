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
        Schema::create('sangjits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('last_update_by');
            $table->string('tanggalSangjit');
            $table->string('waktuSangjit');
            $table->string('venueSangjitPria');
            $table->string('venueSangjitWanita');
            $table->json('itemSangjitPria')->nullable();
            $table->json('itemSangjitWanita')->nullable();
            $table->longText('rundownAcaraSangjit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sangjits');
    }
};
