import { Link, Head, router } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";

export default function EditPemberkatan({ auth, pemberkatan }) {
    const perlengkapanPemberkatanParse = JSON.parse(
        pemberkatan.perlengkapanPemberkatan
    );

    const [tanggalPemberkatan, setTanggalPemberkatan] = useState(
        pemberkatan.tanggalPemberkatan
    );
    const [waktuPemberkatan, setWaktuPemberkatan] = useState(
        pemberkatan.waktuPemberkatan
    );
    const [tempatPemberkatan, setTempatPemberkatan] = useState(
        pemberkatan.tempatPemberkatan
    );
    const [alamatPemberkatan, setAlamatPemberkatan] = useState(
        pemberkatan.alamatPemberkatan
    );
    const [namaPIC, setNamaPIC] = useState(pemberkatan.namaPIC);
    const [nomorPIC, setNomorPIC] = useState(pemberkatan.nomorPIC);
    const [perlengkapanPemberkatan, setPerlengkapanPemberkatan] = useState(
        Object.values(perlengkapanPemberkatanParse) || ""
    );
    const [perlengkapanPemberkatanCount, setPerlengkapanPemberkatanCount] =
        useState(Object.keys(perlengkapanPemberkatanParse).length || 0);

    function TambahForm() {
        setPerlengkapanPemberkatanCount((prevCount) => prevCount + 1);

        const updatedData = [...perlengkapanPemberkatan];
        updatedData.push("");
        setPerlengkapanPemberkatan(updatedData);
    }

    function KurangForm() {
        setPerlengkapanPemberkatanCount((prevCount) => prevCount - 1);

        const updatedData = [...perlengkapanPemberkatan];
        updatedData.pop();
        setPerlengkapanPemberkatan(updatedData);
    }

    function handlePerlengkapanTeapaiChange(index, event) {
        const updatedData = [...perlengkapanPemberkatan];
        updatedData[index] = event.target.value;
        setPerlengkapanPemberkatan(updatedData);
    }

    function submitHandler(e) {
        e.preventDefault();

        const perlengkapanPemberkatanObject = {};

        for (let i = 0; i < perlengkapanPemberkatan.length; i++) {
            const key = i + 1;
            perlengkapanPemberkatanObject[key] = perlengkapanPemberkatan[i];
        }

        const data = {
            user_id: pemberkatan.user.id,
            last_update_by: auth.user.id,
            tanggalPemberkatan: tanggalPemberkatan,
            waktuPemberkatan: waktuPemberkatan,
            tempatPemberkatan: tempatPemberkatan,
            alamatPemberkatan: alamatPemberkatan,
            namaPIC: namaPIC,
            nomorPIC: nomorPIC,
            perlengkapanPemberkatan: perlengkapanPemberkatanObject,
        };

        console.log(data);

        router.put(`/pemberkatan/${pemberkatan.id}`, data);
    }

    return (
        <div className="m-5">
            <p className="text-2xl">Isi Data Pemberkatan</p>

            <form
                className="my-4 p-4 rounded-lg bg-slate-200"
                onSubmit={submitHandler}
            >
                <div className="my-2">
                    <label className="mr-2" htmlFor="tanggalPemberkatan">
                        Tanggal Pemberkatan
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="date"
                        id="tanggalPemberkatan"
                        name="tanggalPemberkatan"
                        defaultValue={tanggalPemberkatan}
                        onChange={(e) => {
                            setTanggalPemberkatan(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="waktuPemberkatan">
                        Waktu Pemberkatan
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="time"
                        id="waktuPemberkatan"
                        name="waktuPemberkatan"
                        defaultValue={waktuPemberkatan}
                        onChange={(e) => {
                            setWaktuPemberkatan(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="tempatPemberkatan">
                        Tempat Pemberkatan
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="tempatPemberkatan"
                        name="tempatPemberkatan"
                        defaultValue={tempatPemberkatan}
                        onChange={(e) => {
                            setTempatPemberkatan(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="alamatPemberkatan">
                        Alamat Pemberkatan
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="alamatPemberkatan"
                        name="alamatPemberkatan"
                        defaultValue={alamatPemberkatan}
                        onChange={(e) => {
                            setAlamatPemberkatan(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="namaPIC">
                        Nama Person In Charge
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="namaPIC"
                        name="namaPIC"
                        defaultValue={namaPIC}
                        onChange={(e) => {
                            setNamaPIC(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="nomorPIC">
                        Nomor Person In Charge
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="number"
                        id="nomorPIC"
                        name="nomorPIC"
                        defaultValue={nomorPIC}
                        onChange={(e) => {
                            setNomorPIC(e.target.value);
                        }}
                    />
                </div>

                <div className="my-8">
                    <span
                        className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => TambahForm()}
                    >
                        + Form Perlengkapan
                    </span>

                    {perlengkapanPemberkatanCount > 0 ? (
                        <span
                            className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                            onClick={() => KurangForm()}
                        >
                            - Form Perlengkapan
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                {Array.from({ length: perlengkapanPemberkatanCount }).map(
                    (_, index) => (
                        <div key={index} className="my-4">
                            <label
                                className="mr-2"
                                htmlFor={`perlengkapanPemberkatan${index + 1}`}
                            >
                                Perlengkapan Pemberkatan {index + 1}
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="text"
                                id={`perlengkapanPemberkatan${index + 1}`}
                                name={`perlengkapanPemberkatan${index + 1}`}
                                defaultValue={perlengkapanPemberkatan[index]}
                                onChange={(e) =>
                                    handlePerlengkapanTeapaiChange(index, e)
                                }
                            />
                        </div>
                    )
                )}

                <button
                    type="submit"
                    className="block bg-green-600 text-white text-center p-3 mt-8 rounded-md"
                >
                    Simpan Data
                </button>
            </form>
        </div>
    );
}
