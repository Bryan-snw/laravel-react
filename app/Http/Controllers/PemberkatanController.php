<?php

namespace App\Http\Controllers;

use App\Models\Pemberkatan;
use App\Http\Requests\StorePemberkatanRequest;
use App\Http\Requests\UpdatePemberkatanRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemberkatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Pemberkatan/IndexPemberkatan', [
            'pemberkatan' => Pemberkatan::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pemberkatan/TambahPemberkatan');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',
            'tanggalPemberkatan' => 'required',
            'waktuPemberkatan' => 'required',
            'tempatPemberkatan' => 'required',
            'alamatPemberkatan' => 'required',
            'namaPIC' => 'required',
            'nomorPIC' => 'required',
            'perlengkapanPemberkatan' => '',
        ]);


        Pemberkatan::create($validatedData);

        return redirect('/pemberkatan')->with('success', "Post has been updated!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Pemberkatan $pemberkatan)
    {
        return Inertia::render('Pemberkatan/LihatPemberkatan', [
            'pemberkatan' => $pemberkatan
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pemberkatan $pemberkatan)
    {
        return Inertia::render('Pemberkatan/EditPemberkatan', [
            'pemberkatan' => $pemberkatan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pemberkatan $pemberkatan)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',
            'tanggalPemberkatan' => 'required',
            'waktuPemberkatan' => 'required',
            'tempatPemberkatan' => 'required',
            'alamatPemberkatan' => 'required',
            'namaPIC' => 'required',
            'nomorPIC' => 'required',
            'perlengkapanPemberkatan' => ''
        ]);

        Pemberkatan::where('id', $pemberkatan->id)
            ->update($validatedData);


        return redirect('/pemberkatan')->with('success', "Post has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pemberkatan $pemberkatan)
    {
        // hapus post
        Pemberkatan::destroy($pemberkatan->id);

        return redirect('/pemberkatan')->with('success', "Post has been deleted!");
    }
}
