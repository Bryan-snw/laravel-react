<?php

namespace App\Http\Controllers;

use App\Models\Sangjit;
use Illuminate\Http\Request;
use App\Exports\SangjitExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportSangjit extends Controller
{
    public function export(Request $request)
    {
        // Mengambil id yang dikirimkan
        $id = $request->query('id');

        // Mencarri data sangjit sesuai id
        $sangjit = Sangjit::find($id);

        // mengambil nama user pemilik data
        $user = $sangjit->user;


        $data = collect([
            [
                'tanggalSangjit' => $sangjit->tanggalSangjit,
                'waktuSangjit' => $sangjit->waktuSangjit,
                'venueSangjitPria' => $sangjit->venueSangjitPria,
                'itemSangjitPria' => $sangjit->itemSangjitPria,
                'venueSangjitWanita' => $sangjit->venueSangjitWanita,
                'itemSangjitWanita' => $sangjit->itemSangjitWanita,
                'rundownAcaraSangjit' => strip_tags($sangjit->rundownAcaraSangjit),
            ]
        ]);

        return Excel::download(new SangjitExport($data), $user->name . '_pemberkatan.xlsx');
    }
}
