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
        Schema::create('resepsis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('last_update_by');

            $table->string('tanggalResepsi');
            $table->string('venueResepsi');
            $table->string('waktuResepsi');

            $table->string('vendorMUABride');
            $table->text('itemMUABride');

            $table->string('vendorHairDo');
            $table->text('itemHairDo');

            $table->string('vendorGownBride');
            $table->text('itemGownBride');

            $table->string('vendorSuitGroom');
            $table->text('itemSuitGroom');

            $table->string('vendorMc');
            $table->text('itemMc');

            $table->string('vendorDecoration');
            $table->text('itemDecoration');

            $table->string('vendorPhotography');
            $table->text('itemPhotography');

            $table->string('vendorLighting');
            $table->text('itemLighting');

            $table->string('vendorEntertaintment');
            $table->text('itemEntertaintment');

            $table->string('vendorSoundSystem');
            $table->text('itemSoundSystem');

            $table->string('vendorPhotoBooth');
            $table->text('itemPhotoBooth');

            $table->string('vendorInvitation');
            $table->text('itemInvitation');

            $table->string('vendorSouvenir');
            $table->text('itemSouvenir');

            $table->json('namaRegisPriaPIC')->nullable();
            $table->json('nomorRegisPriaPIC')->nullable();

            $table->json('namaRegisWanitaPIC')->nullable();
            $table->json('nomorRegisWanitaPIC')->nullable();

            $table->string('namaHongbaoPriaPIC');
            $table->integer('nomorHongbaoPriaPIC');

            $table->string('namaHongbaoWanitaPIC');
            $table->integer('nomorHongbaoWanitaPIC');

            $table->string('namaFamilyPriaPIC');
            $table->integer('nomorFamilyPriaPIC');
            $table->string('namaFamilyWanitaPIC');
            $table->integer('nomorFamilyWanitaPIC');

            $table->longText('rundownAcaraResepsi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resepsis');
    }
};
