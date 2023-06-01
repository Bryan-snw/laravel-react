<?php

namespace App\Exports;

use App\Models\Pemberkatan;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\WithHeadings;

class PemberkatanExport implements FromCollection, WithHeadings
{

    protected $data;

    public function __construct($data)
    {
        $this->data = $data;

        // dd($data);
    }

    public function collection()
    {
        // return $this->data;


        $data = $this->data->map(function ($item) {
            $formattedData = [
                'Tanggal Pemberkatan' => $item['tanggalPemberkatan'],
                'Waktu Pemberkatan' => $item['waktuPemberkatan'],
                'Tempat Pemberkatan' => $item['tempatPemberkatan'],
                'Alamat Pemberkatan' => $item['alamatPemberkatan'],
            ];

            foreach ($item['perlengkapanPemberkatan'] as $index => $perlengkapan) {
                $key = 'Perlengkapan Pemberkatan ' . $index;
                $formattedData[$key] = $perlengkapan;
            }

            return $formattedData;
        });

        return $data;
    }

    public function headings(): array
    {
        // return [
        //     'Tanggal Pemberkatan',
        //     'Waktu Pemberkatan',
        //     'Tempat Pemberkatan',
        //     'Alamat Pemberkatan',
        //     'Perlengkapan Pemberkatan',
        // ];


        $headings = [
            'Tanggal Pemberkatan',
            'Waktu Pemberkatan',
            'Tempat Pemberkatan',
            'Alamat Pemberkatan',
        ];

        // Retrieve the first data item to get the dynamic headings
        $firstItem = $this->data->first();

        if ($firstItem && isset($firstItem['perlengkapanPemberkatan']) && is_array($firstItem['perlengkapanPemberkatan'])) {
            $perlengkapanPemberkatan = $firstItem['perlengkapanPemberkatan'];

            // Generate the dynamic headings for Perlengkapan Pemberkatan fields
            foreach ($perlengkapanPemberkatan as $key => $value) {
                $headings[] = "Perlengkapan Pemberkatan $key";
            }
        }

        return $headings;
    }
}
