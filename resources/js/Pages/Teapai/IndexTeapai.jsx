import { Link, Head, router } from "@inertiajs/react";
export default function IndexTeapai(props) {
    const { teapai } = props;

    console.log(teapai);

    function handleDelete(e, id) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/teapai/${id}`);
        }
    }
    return (
        <div className="m-5">
            <p className="mb-4">Homepage Data Teapai</p>
            <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                href="/teapai/create"
            >
                Isi Data Teapai
            </Link>
            <div className="my-5">
                {teapai.length > 0
                    ? teapai.map((data, key) => {
                          return (
                              <div
                                  key={key}
                                  className="my-4 bg-slate-200 rounded-md p-4"
                              >
                                  <p className="text-2xl my-2">
                                      Acara Teapai {data.user.name}
                                  </p>
                                  <p>Tanggal Teapai: {data.tanggalTeapai}</p>
                                  <p>Waktu Teapai: {data.waktuTeapai}</p>
                                  <p>
                                      Venue Teapai Pria: {data.venueTeapaiPria}
                                  </p>
                                  <p>
                                      Venue Teapai Wanita:{" "}
                                      {data.venueTeapaiWanita}
                                  </p>
                                  <p>
                                      Last Update By: {data.last_update_by.name}
                                  </p>
                                  <div className="my-4">
                                      <Link
                                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                          href={`/teapai/${data.id}`}
                                      >
                                          Lihat
                                      </Link>
                                      <Link
                                          className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                          href={`/teapai/${data.id}/edit`}
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

                                      <a
                                          className="mx-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded "
                                          href={`teapai-export?id=${data.id}`}
                                      >
                                          Export
                                      </a>
                                  </div>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
}
