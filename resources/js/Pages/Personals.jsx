import { Link, Head, router } from "@inertiajs/react";

export default function Personals(props) {
    const { personals } = props;
    console.log(personals);

    function handleDelete(e, id) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/personals/${id}`);
        }
    }

    return (
        <div className="m-3">
            <h1 className="my-5">Halo Page Personal</h1>

            <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                href="/personals/create"
            >
                Tambah Data
            </Link>

            <div>
                {personals.map((personal, i) => {
                    const saudaraPriaObject = JSON.parse(personal.saudaraPria);

                    {
                        /* console.log(personal.user); */
                    }

                    return (
                        <div key={i} className="m-3 bg-slate-400 p-5">
                            <p>Nama Mempelai Pria {personal.namaPria}</p>
                            <p>Nama Mempelai Wanita {personal.namaWanita}</p>
                            <p>Pemilik: {personal.user.name}</p>
                            <p>
                                Last Update By: {personal.last_update_by.name}
                            </p>

                            {saudaraPriaObject != null
                                ? Object.values(saudaraPriaObject).map(
                                      (sibling, key) => (
                                          <p key={key} className="my-3">
                                              Saudara Pria {key + 1}: {sibling}
                                          </p>
                                      )
                                  )
                                : ""}
                            {/* {namaSaudara(personal.saudaraPria)} */}
                            <Link
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                href={`/personals/${personal.id}/edit`}
                            >
                                Edit
                            </Link>

                            <button
                                onClick={(event) =>
                                    handleDelete(event, personal.id)
                                }
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Hapus
                            </button>
                            {/* <Link
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                href={`/personals/${personal.id}`}
                                method="delete"
                                onClick="return confirm('Are you sure?');"
                            >
                                Hapus
                            </Link> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
