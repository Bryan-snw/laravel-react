<?php

namespace App\Http\Controllers;

use App\Models\Pemberkatan;
use Illuminate\Http\Request;
use App\Exports\PemberkatanExport;
use Illuminate\Http\Client\Request as ClientRequest;
use Maatwebsite\Excel\Facades\Excel;

class ExportPemberkatan extends Controller
{
    public function export(Request $request)
    {
        $id = $request->query('id');

        $pemberkatan = Pemberkatan::find($id);

        // Retrieve the associated user
        $user = $pemberkatan->user;

        // $data = Pemberkatan::select('tanggalPemberkatan', 'waktuPemberkatan', 'tempatPemberkatan', 'alamatPemberkatan', 'perlengkapanPemberkatan')->where('id', $id)->get();

        // return Excel::download(new PemberkatanExport($data), $user->name . '_pemberkatan.xlsx');

        $data = collect([
            [
                'tanggalPemberkatan' => $pemberkatan->tanggalPemberkatan,
                'waktuPemberkatan' => $pemberkatan->waktuPemberkatan,
                'tempatPemberkatan' => $pemberkatan->tempatPemberkatan,
                'alamatPemberkatan' => $pemberkatan->alamatPemberkatan,
                'perlengkapanPemberkatan' => $pemberkatan->perlengkapanPemberkatan,
            ]
        ]);

        return Excel::download(new PemberkatanExport($data), $user->name . '_pemberkatan.xlsx');
    }
}
