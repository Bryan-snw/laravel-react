import { Link, Head, router } from "@inertiajs/react";
import { data } from "autoprefixer";
export default function Index(props) {
    const { resepsi } = props;

    function handleDelete(e, id) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/resepsi/${id}`);
        }
    }
    return (
        <div className="m-5">
            <h1 className="text-2xl my-3">Data Resepsi</h1>

            <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                href="/resepsi/create"
            >
                Isi Data Resepsi
            </Link>

            <div>
                {resepsi.map((data, key) => {
                    console.log(data);
                    return (
                        <div key={key} className="my-5">
                            <p>Tanggal {data.tanggalResepsi}</p>
                            <p>Venue {data.venueResepsi}</p>
                            <p>Waktu {data.waktuResepsi}</p>
                            <p>Milik {data.user.name}</p>
                            <p>Last Update By {data.last_update_by.name}</p>
                            <Link
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                href={`/resepsi/${data.id}/edit`}
                            >
                                Edit
                            </Link>

                            <button
                                onClick={(event) =>
                                    handleDelete(event, data.id)
                                }
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Hapus
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
