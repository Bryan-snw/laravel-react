<?php

namespace App\Http\Controllers;

use App\Models\Teapai;
use App\Http\Requests\StoreTeapaiRequest;
use App\Http\Requests\UpdateTeapaiRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeapaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Teapai/IndexTeapai', [
            'teapai' => Teapai::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Teapai/TambahTeapai');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',
            'tanggalTeapai' => 'required',
            'waktuTeapai' => 'required',
            'venueTeapaiPria' => 'required',
            'venueTeapaiWanita' => 'required',
            'perlengkapanTeapai' => '',
            'rundownAcaraTeapai' => 'required',
        ]);


        Teapai::create($validatedData);

        return redirect('/teapai')->with('success', "Post has been updated!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Teapai $teapai)
    {
        return Inertia::render('Teapai/LihatTeapai', [
            'teapai' => $teapai
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teapai $teapai)
    {
        return Inertia::render('Teapai/EditTeapai', [
            'teapai' => $teapai
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teapai $teapai)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',
            'tanggalTeapai' => 'required',
            'waktuTeapai' => 'required',
            'venueTeapaiPria' => 'required',
            'venueTeapaiWanita' => 'required',
            'perlengkapanTeapai' => '',
            'rundownAcaraTeapai' => 'required',
        ]);

        Teapai::where('id', $teapai->id)
            ->update($validatedData);


        return redirect('/teapai')->with('success', "Post has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teapai $teapai)
    {
        // hapus post
        Teapai::destroy($teapai->id);

        return redirect('/teapai')->with('success', "Post has been deleted!");
    }
}
