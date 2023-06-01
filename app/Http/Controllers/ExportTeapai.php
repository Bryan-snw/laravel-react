<?php

namespace App\Http\Controllers;

use App\Models\Teapai;
use Illuminate\Http\Request;
use App\Exports\TeapaiExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportTeapai extends Controller
{
    public function export(Request $request)
    {
        // Mengambil id yang dikirimkan
        $id = $request->query('id');

        // Mencarri data teapai sesuai id
        $teapai = Teapai::find($id);

        // mengambil nama user pemilik data
        $user = $teapai->user;


        $data = collect([
            [
                'tanggalTeapai' => $teapai->tanggalTeapai,
                'waktuTeapai' => $teapai->waktuTeapai,
                'venueTeapaiPria' => $teapai->venueTeapaiPria,
                'venueTeapaiWanita' => $teapai->venueTeapaiWanita,
                'perlengkapanTeapai' => $teapai->perlengkapanTeapai,
                'rundownAcaraTeapai' => strip_tags($teapai->rundownAcaraTeapai),
            ]
        ]);

        return Excel::download(new TeapaiExport($data), $user->name . '_pemberkatan.xlsx');
    }
}
