import { Link, Head, router } from "@inertiajs/react";
export default function IndexSangjit(props) {
    const { sangjit } = props;

    console.log(sangjit);

    function handleDelete(e, id) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/sangjit/${id}`);
        }
    }
    return (
        <div className="m-5">
            <p className="mb-4">Homepage Data Sangjit</p>
            <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                href="/sangjit/create"
            >
                Isi Data Sangjit
            </Link>
            <div className="my-5">
                {sangjit.length > 0
                    ? sangjit.map((data, key) => {
                          return (
                              <div
                                  key={key}
                                  className="my-4 bg-slate-200 rounded-md p-4"
                              >
                                  <p className="text-2xl my-2">
                                      Acara Sangjit {data.user.name}
                                  </p>
                                  <p>Tanggal Sangjit: {data.tanggalSangjit}</p>
                                  <p>Waktu Sangjit: {data.waktuSangjit}</p>
                                  <p>
                                      Venue Sangjit Pria:{" "}
                                      {data.venueSangjitPria}
                                  </p>
                                  <p>
                                      Venue Sangjit Wanita:{" "}
                                      {data.venueSangjitWanita}
                                  </p>
                                  <p>
                                      Last Update By: {data.last_update_by.name}
                                  </p>
                                  <div className="my-4">
                                      <Link
                                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                          href={`/sangjit/${data.id}`}
                                      >
                                          Lihat
                                      </Link>
                                      <Link
                                          className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                          href={`/sangjit/${data.id}/edit`}
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
                                          href={`sangjit-export?id=${data.id}`}
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
