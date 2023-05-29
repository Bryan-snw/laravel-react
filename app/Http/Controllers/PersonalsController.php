<?php

namespace App\Http\Controllers;

use App\Models\Personals;
use Illuminate\Http\Request;
use App\Http\Requests\StorePersonalsRequest;
use App\Http\Requests\UpdatePersonalsRequest;
use Inertia\Inertia;

class PersonalsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $input = [
        //     'namaPria' => 'Jacob',
        //     'namaWanita' => 'Stefani',
        //     'saudaraPria' => [
        //         '1' => 'Joanne',
        //         '2' => 'Kora',
        //         '3' => 'Pablo'
        //     ]
        // ];
        // $item = Personals::create($input);



        return Inertia::render('Personals', [
            "personals" => Personals::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('TambahPersonals');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);

        $validatedData = $request->validate([
            'user_id' => 'required',
            'namaPria' => 'required',
            'namaWanita' => 'required',
            'saudaraPria' => '',
            'lastUpdateBy' => 'required'
        ]);

        Personals::create($validatedData);

        return redirect('/personals')->with('success', "New Post Category has been added!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Personals $personals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Personals $personals, $id)
    {
        return Inertia::render('EditPersonals', [
            "personal" => $personals->find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Personals $personals, $id)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'namaPria' => 'required',
            'namaWanita' => 'required',
            'saudaraPria' => '',
            'lastUpdateBy' => 'required'
        ]);


        Personals::where('id', $id)
            ->update($validatedData);

        return redirect('/personals')->with('success', "Post has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Personals $personals, $id)
    {
        // dd($id);

        Personals::destroy($id);

        return redirect('/personals')->with('success', "Post Category has been deleted!");
    }
}
