export default function LihatSangjit({ sangjit }) {
    const itemSangjitPriaParse = JSON.parse(sangjit.itemSangjitPria);
    const itemSangjitWanitaParse = JSON.parse(sangjit.itemSangjitWanita);

    return (
        <div className="m-5">
            <div className="my-4 bg-slate-200 rounded-md p-4">
                <p className="text-2xl my-2">
                    Acara Sangjit {sangjit.user.name}
                </p>
                <p>Tanggal Sangjit: {sangjit.tanggalSangjit}</p>
                <p>Waktu Sangjit: {sangjit.waktuSangjit}</p>
                <div className="my-4">
                    <p>Venue Sangjit Pria: {sangjit.venueSangjitPria}</p>
                    {itemSangjitPriaParse != null
                        ? Object.values(itemSangjitPriaParse).map(
                              (sibling, key) => (
                                  <p key={key} className="my-1">
                                      Item Sangjit Pria {key + 1}: {sibling}
                                  </p>
                              )
                          )
                        : ""}
                </div>

                <div className="my-4">
                    <p>Venue Sangjit Wanita: {sangjit.venueSangjitWanita}</p>
                    {itemSangjitWanitaParse != null
                        ? Object.values(itemSangjitWanitaParse).map(
                              (sibling, key) => (
                                  <p key={key} className="my-1">
                                      Item Sangjit Wanita {key + 1}: {sibling}
                                  </p>
                              )
                          )
                        : ""}
                </div>
                <div className="my-5">
                    <p className="mb-2 font-black">Rundown Acara Resepsi</p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: sangjit.rundownAcaraSangjit,
                        }}
                    ></p>
                </div>
                <p>Last Update By: {sangjit.last_update_by.name}</p>
            </div>
        </div>
    );
}
