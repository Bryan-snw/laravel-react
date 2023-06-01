<?php

namespace App\Exports;

use App\Models\Teapai;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TeapaiExport implements FromCollection, WithHeadings
{

    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
        // dd($data);
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $data = $this->data->map(function ($item) {
            $formattedData = [
                'Tanggal Teapai' => $item['tanggalTeapai'],
                'Waktu Teapai' => $item['waktuTeapai'],
                'Venue Teapai Pria' => $item['venueTeapaiPria'],
                'Venue Teapai Wanita' => $item['venueTeapaiWanita'],
            ];

            foreach ($item['perlengkapanTeapai'] as $index => $perlengkapan) {
                $key = 'Perlengkapan Teapai ' . $index;
                $formattedData[$key] = $perlengkapan;
            }


            $formattedData['Rundown Acara Teapai'] = $item['rundownAcaraTeapai'];

            return $formattedData;
        });

        return $data;
    }

    public function headings(): array
    {

        $headings = [
            'Tanggal Teapai',
            'Waktu Teapai',
            'Venue Teapai Pria',
            'Venue Teapai Wanita',
        ];

        // Retrieve the first data item to get the dynamic headings
        $firstItem = $this->data->first();

        if ($firstItem && isset($firstItem['perlengkapanTeapai']) && is_array($firstItem['perlengkapanTeapai'])) {
            $perlengkapanTeapai = $firstItem['perlengkapanTeapai'];

            // Generate the dynamic headings for Perlengkapan Pemberkatan fields
            foreach ($perlengkapanTeapai as $key => $value) {
                $headings[] = "Perlengkapan Teapai $key";
            }
        }

        $headings[] = "Rundown Acara Sangjit";

        return $headings;
    }
}
