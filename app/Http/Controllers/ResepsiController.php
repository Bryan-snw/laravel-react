<?php

namespace App\Http\Controllers;

use App\Models\Resepsi;
use App\Http\Requests\StoreResepsiRequest;
use App\Http\Requests\UpdateResepsiRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResepsiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Resepsi/Index', [
            "resepsi" => Resepsi::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Resepsi/TambahResepsi');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // ddd($request);
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',

            'tanggalResepsi' => 'required',
            'venueResepsi' => 'required',
            'waktuResepsi' => 'required',

            'vendorMUABride' => 'required',
            'itemMUABride' => 'required',

            'vendorHairDo' => 'required',
            'itemHairDo' => 'required',

            'vendorGownBride' => 'required',
            'itemGownBride' => 'required',

            'vendorSuitGroom' => 'required',
            'itemSuitGroom' => 'required',

            'vendorMc' => 'required',
            'itemMc' => 'required',

            'vendorDecoration' => 'required',
            'itemDecoration' => 'required',

            'vendorPhotography' => 'required',
            'itemPhotography' => 'required',

            'vendorLighting' => 'required',
            'itemLighting' => 'required',

            'vendorEntertaintment' => 'required',
            'itemEntertaintment' => 'required',

            'vendorSoundSystem' => 'required',
            'itemSoundSystem' => 'required',

            'vendorPhotoBooth' => 'required',
            'itemPhotoBooth' => 'required',

            'vendorInvitation' => 'required',
            'itemInvitation' => 'required',

            'vendorSouvenir' => 'required',
            'itemSouvenir' => 'required',

            'namaRegisPriaPIC' => '',
            'nomorRegisPriaPIC' => '',

            'namaRegisWanitaPIC' => '',
            'nomorRegisWanitaPIC' => '',

            'namaHongbaoPriaPIC' => 'required',
            'nomorHongbaoPriaPIC' => 'required',

            'namaHongbaoWanitaPIC' => 'required',
            'nomorHongbaoWanitaPIC' => 'required',

            'namaFamilyPriaPIC' => 'required',
            'nomorFamilyPriaPIC' => 'required',
            'namaFamilyWanitaPIC' => 'required',
            'nomorFamilyWanitaPIC' => 'required',

            'rundownAcaraResepsi' => '',
        ]);


        Resepsi::create($validatedData);

        return redirect('/resepsi')->with('success', "New Post Category has been added!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Resepsi $resepsi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resepsi $resepsi)
    {
        return Inertia::render('Resepsi/Edit', [
            'resepsi' => $resepsi
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resepsi $resepsi)
    {

        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',

            'tanggalResepsi' => 'required',
            'venueResepsi' => 'required',
            'waktuResepsi' => 'required',

            'vendorMUABride' => 'required',
            'itemMUABride' => 'required',

            'vendorHairDo' => 'required',
            'itemHairDo' => 'required',

            'vendorGownBride' => 'required',
            'itemGownBride' => 'required',

            'vendorSuitGroom' => 'required',
            'itemSuitGroom' => 'required',

            'vendorMc' => 'required',
            'itemMc' => 'required',

            'vendorDecoration' => 'required',
            'itemDecoration' => 'required',

            'vendorPhotography' => 'required',
            'itemPhotography' => 'required',

            'vendorLighting' => 'required',
            'itemLighting' => 'required',

            'vendorEntertaintment' => 'required',
            'itemEntertaintment' => 'required',

            'vendorSoundSystem' => 'required',
            'itemSoundSystem' => 'required',

            'vendorPhotoBooth' => 'required',
            'itemPhotoBooth' => 'required',

            'vendorInvitation' => 'required',
            'itemInvitation' => 'required',

            'vendorSouvenir' => 'required',
            'itemSouvenir' => 'required',

            'namaRegisPriaPIC' => '',
            'nomorRegisPriaPIC' => '',

            'namaRegisWanitaPIC' => '',
            'nomorRegisWanitaPIC' => '',

            'namaHongbaoPriaPIC' => 'required',
            'nomorHongbaoPriaPIC' => 'required',

            'namaHongbaoWanitaPIC' => 'required',
            'nomorHongbaoWanitaPIC' => 'required',

            'namaFamilyPriaPIC' => 'required',
            'nomorFamilyPriaPIC' => 'required',
            'namaFamilyWanitaPIC' => 'required',
            'nomorFamilyWanitaPIC' => 'required',

            'rundownAcaraResepsi' => '',
        ]);

        Resepsi::where('id', $resepsi->id)
            ->update($validatedData);
        // Personals::where('id', $id)
        //     ->update($validatedData);

        return redirect('/resepsi')->with('success', "Post has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resepsi $resepsi)
    {
        // hapus post
        Resepsi::destroy($resepsi->id);

        return redirect('/resepsi')->with('success', "Post has been deleted!");
    }
}
