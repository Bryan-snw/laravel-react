<?php

namespace App\Exports;

use App\Models\Sangjit;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SangjitExport implements FromCollection, WithHeadings
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
        // return $this->data;

        $data = $this->data->map(function ($item) {
            $formattedData = [
                'Tanggal Sangjit' => $item['tanggalSangjit'],
                'Waktu Sangjit' => $item['waktuSangjit'],
                'Venue Sangjit Pria' => $item['venueSangjitPria'],
            ];

            foreach ($item['itemSangjitPria'] as $index => $itemPria) {
                $key = 'Item Sangjit Pria ' . $index;
                $formattedData[$key] = $itemPria;
            }

            $formattedData['Venue Sangjit Wanita'] = $item['venueSangjitWanita'];

            foreach ($item['itemSangjitWanita'] as $index => $itemWanita) {
                $key = 'Item Sangjit Wanita ' . $index;
                $formattedData[$key] = $itemWanita;
            }

            $formattedData['Rundown Acara Sangjit'] = $item['rundownAcaraSangjit'];

            return $formattedData;
        });

        return $data;
    }

    public function headings(): array
    {
        // return [
        //     'Tanggal Sangjit',
        //     'Waktu Sangjit',
        //     'Venue Sangjit Pria',
        //     'Item Sangjit Pria',
        //     'Venue Sangjit Wanita',
        //     'Item Sangjit Wanita',
        //     'Rundown Acara Resepsi',
        // ];


        $headings = [
            'Tanggal Sangjit',
            'Waktu Sangjit',
            'Venue Sangjit Pria',
        ];

        // Retrieve the first data item to get the dynamic headings
        $firstItem = $this->data->first();

        if ($firstItem && isset($firstItem['itemSangjitPria']) && is_array($firstItem['itemSangjitPria'])) {
            $itemSangjitPria = $firstItem['itemSangjitPria'];

            // Generate the dynamic headings for Perlengkapan Pemberkatan fields
            foreach ($itemSangjitPria as $key => $value) {
                $headings[] = "Item Sangjit Pria $key";
            }
        }

        $headings[] = "Venue Sangjit Wanita";

        if ($firstItem && isset($firstItem['itemSangjitWanita']) && is_array($firstItem['itemSangjitWanita'])) {
            $itemSangjitWanita = $firstItem['itemSangjitWanita'];

            // Generate the dynamic headings for Perlengkapan Pemberkatan fields
            foreach ($itemSangjitWanita as $key => $value) {
                $headings[] = "Item Sangjit Wanita $key";
            }
        }

        $headings[] = "Rundown Acara Sangjit";

        return $headings;
    }
}
