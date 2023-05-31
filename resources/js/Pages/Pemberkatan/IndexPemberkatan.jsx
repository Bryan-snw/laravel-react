import { Link, Head, router } from "@inertiajs/react";
export default function IndexPemberkatan(props) {
    const { pemberkatan } = props;

    console.log(pemberkatan);

    function handleDelete(e, id) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/pemberkatan/${id}`);
        }
    }
    return (
        <div className="m-5">
            <p className="mb-4">Homepage Data Pemberkatan</p>
            <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                href="/pemberkatan/create"
            >
                Isi Data Pemberkatan
            </Link>
            <div className="my-5">
                {pemberkatan.length > 0
                    ? pemberkatan.map((data, key) => {
                          return (
                              <div
                                  key={key}
                                  className="my-4 bg-slate-200 rounded-md p-4"
                              >
                                  <p className="text-2xl my-2">
                                      Acara Pemberkatan {data.user.name}
                                  </p>
                                  <p>
                                      Tanggal Pemberkatan:{" "}
                                      {data.tanggalPemberkatan}
                                  </p>
                                  <p>
                                      Waktu Pemberkatan: {data.waktuPemberkatan}
                                  </p>
                                  <p>
                                      Tempat Pemberkatan:{" "}
                                      {data.tempatPemberkatan}
                                  </p>
                                  <p>
                                      Alamat Pemberkatan:{" "}
                                      {data.alamatPemberkatan}
                                  </p>
                                  <p>
                                      Last Update By: {data.last_update_by.name}
                                  </p>
                                  <div className="my-4">
                                      <Link
                                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                          href={`/pemberkatan/${data.id}`}
                                      >
                                          Lihat
                                      </Link>
                                      <Link
                                          className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                          href={`/pemberkatan/${data.id}/edit`}
                                      >
                                          Edit
                                      </Link>

                                      <span
                                          onClick={(event) =>
                                              handleDelete(event, data.id)
                                          }
                                          className="bg-red-500 cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                      >
                                          Hapus
                                      </span>
                                  </div>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
}
