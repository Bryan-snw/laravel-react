<?php

namespace App\Http\Controllers;

use App\Models\Sangjit;
use App\Http\Requests\StoreSangjitRequest;
use App\Http\Requests\UpdateSangjitRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SangjitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Sangjit/IndexSangjit', [
            'sangjit' => Sangjit::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Sangjit/TambahSangjit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',
            'tanggalSangjit' => 'required',
            'waktuSangjit' => 'required',
            'venueSangjitPria' => 'required',
            'venueSangjitWanita' => 'required',
            'itemSangjitPria' => '',
            'itemSangjitWanita' => '',
            'rundownAcaraSangjit' => 'required',
        ]);


        Sangjit::create($validatedData);

        return redirect('/sangjit')->with('success', "Post has been updated!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Sangjit $sangjit)
    {
        return Inertia::render('Sangjit/LihatSangjit', [
            'sangjit' => $sangjit
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sangjit $sangjit)
    {
        return Inertia::render('Sangjit/EditSangjit', [
            'sangjit' => $sangjit
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sangjit $sangjit)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'last_update_by' => 'required',
            'tanggalSangjit' => 'required',
            'waktuSangjit' => 'required',
            'venueSangjitPria' => 'required',
            'venueSangjitWanita' => 'required',
            'itemSangjitPria' => '',
            'itemSangjitWanita' => '',
            'rundownAcaraSangjit' => 'required',
        ]);

        Sangjit::where('id', $sangjit->id)
            ->update($validatedData);


        return redirect('/sangjit')->with('success', "Post has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sangjit $sangjit)
    {
        // hapus post
        Sangjit::destroy($sangjit->id);

        return redirect('/sangjit')->with('success', "Post has been deleted!");
    }
}
