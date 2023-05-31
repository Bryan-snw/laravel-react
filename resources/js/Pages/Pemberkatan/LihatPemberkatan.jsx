export default function LihatPemberkatan({ pemberkatan }) {
    const perlengkapanPemberkatanParse = JSON.parse(
        pemberkatan.perlengkapanPemberkatan
    );

    return (
        <div className="m-5">
            <div className="my-4 bg-slate-200 rounded-md p-4">
                <p className="text-2xl my-2 font-black">
                    Acara Pemberkatan Nikah {pemberkatan.user.name}
                </p>
                <p>Tanggal Pemberkatan: {pemberkatan.tanggalPemberkatan}</p>
                <p>Waktu Pemberkatan: {pemberkatan.waktuPemberkatan}</p>
                <p>Tempat Pemberkatan: {pemberkatan.tempatPemberkatan}</p>
                <p>Alamat Pemberkatan: {pemberkatan.alamatPemberkatan}</p>

                <div className="my-4">
                    <p>Perlengkapan Pemberkatan</p>
                    {perlengkapanPemberkatanParse != null
                        ? Object.values(perlengkapanPemberkatanParse).map(
                              (item, key) => (
                                  <p key={key} className="my-1">
                                      Perlengkapan Pemberkatan {key + 1}: {item}
                                  </p>
                              )
                          )
                        : ""}
                </div>

                <p>Last Update By: {pemberkatan.last_update_by.name}</p>
            </div>
        </div>
    );
}
