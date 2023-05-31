export default function LihatTeapai({ teapai }) {
    const perlengkapanTeapaiParse = JSON.parse(teapai.perlengkapanTeapai);

    return (
        <div className="m-5">
            <div className="my-4 bg-slate-200 rounded-md p-4">
                <p className="text-2xl my-2">Acara Teapai {teapai.user.name}</p>
                <p>Tanggal Teapai: {teapai.tanggalTeapai}</p>
                <p>Waktu Teapai: {teapai.waktuTeapai}</p>
                <p>Venue Teapai Pria: {teapai.venueTeapaiPria}</p>
                <p>Venue Teapai Wanita: {teapai.venueTeapaiWanita}</p>
                <p>Last Update By: {teapai.last_update_by.name}</p>

                <div className="my-4">
                    <p>Perlengkapan Teapai</p>
                    {perlengkapanTeapaiParse != null
                        ? Object.values(perlengkapanTeapaiParse).map(
                              (item, key) => (
                                  <p key={key} className="my-1">
                                      Perlengkapan Teapai {key + 1}: {item}
                                  </p>
                              )
                          )
                        : ""}
                </div>

                <div className="my-5">
                    <p className="mb-2 font-black">Rundown Acara Teapai</p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: teapai.rundownAcaraTeapai,
                        }}
                    ></p>
                </div>
                <p>Last Update By: {teapai.last_update_by.name}</p>
            </div>
        </div>
    );
}
