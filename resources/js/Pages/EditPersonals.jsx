import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

export default function EditPersonals(props) {
    const { personal, auth } = props;

    console.log(auth);
    const [saudaraPriaCount, setSaudaraPriaCount] = useState(0);
    const [saudaraPriaData, setSaudaraPriaData] = useState([]);
    const [namaPria, setNamaPria] = useState();
    const [namaWanita, setNamaWanita] = useState();

    const saudaraPriaParse = JSON.parse(personal.saudaraPria);

    useEffect(() => {
        setNamaPria(personal.namaPria);
        setNamaWanita(personal.namaWanita);
        setSaudaraPriaData(Object.values(saudaraPriaParse));
        setSaudaraPriaCount(Object.keys(saudaraPriaParse).length);
    }, [personal]);

    function handleTambahFormPria() {
        setSaudaraPriaCount((prevCount) => prevCount + 1);
    }

    function handleKurangFormPria() {
        setSaudaraPriaCount((prevCount) => prevCount - 1);

        const updatedData = [...saudaraPriaData];
        updatedData.pop();
        setSaudaraPriaData(updatedData);
    }

    function handleSaudaraPriaChange(index, event) {
        const updatedData = [...saudaraPriaData];
        updatedData[index] = event.target.value;
        setSaudaraPriaData(updatedData);
    }

    function submitHandler(e) {
        e.preventDefault();

        const saudaraPriaObject = {};

        for (let i = 0; i < saudaraPriaData.length; i++) {
            const key = i + 1;
            saudaraPriaObject[key] = saudaraPriaData[i];
        }

        const data = {
            user_id: personal.user_id,
            lastUpdateBy: auth.user.id,
            namaPria: namaPria,
            namaWanita: namaWanita,
            saudaraPria: saudaraPriaObject,
        };

        console.log(data);

        router.put(`/personals/${personal.id}`, data);

        // Lakukan pengiriman data atau pemrosesan lainnya
    }

    return (
        <div className="m-4">
            <h1>Edit Data</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="namaPria" className="block">
                            Nama Mempelai Pria
                        </label>
                        <input
                            type="text"
                            className="rounded-md"
                            id="namaPria"
                            placeholder=""
                            name="namaPria"
                            defaultValue={personal.namaPria}
                            onChange={(namaPria) =>
                                setNamaPria(namaPria.target.value)
                            }
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="namaWanita" className="block">
                            Nama Mempelai Wanita
                        </label>
                        <input
                            type="text"
                            className="rounded-md"
                            id="namaWanita"
                            placeholder=""
                            name="namaWanita"
                            defaultValue={personal.namaWanita}
                            onChange={(namaWanita) =>
                                setNamaWanita(namaWanita.target.value)
                            }
                        ></input>
                    </div>

                    <div className="py-8">
                        <span
                            className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                            onClick={handleTambahFormPria}
                        >
                            Tambah Form Saudara Pria
                        </span>

                        {saudaraPriaCount > 0 ? (
                            <span
                                className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                                onClick={handleKurangFormPria}
                            >
                                Kurangi Form Saudara Pria
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <div>
                        <div id="saudaraPria"></div>

                        {Array.from({ length: saudaraPriaCount }).map(
                            (_, index) => (
                                <div className="block" key={index}>
                                    <label
                                        htmlFor={`namaSaudaraPria${index + 1}`}
                                        className="block"
                                    >
                                        Nama Saudara Pria {index + 1}
                                    </label>
                                    {/* Input dinamis untuk setiap saudara pria */}
                                    <input
                                        type="text"
                                        className="rounded-md"
                                        id={`namaSaudaraPria${index + 1}`}
                                        name={`namaSaudaraPria${index + 1}`}
                                        value={saudaraPriaData[index] || ""}
                                        onChange={(e) =>
                                            handleSaudaraPriaChange(index, e)
                                        }
                                    ></input>
                                </div>
                            )
                        )}
                    </div>

                    <button
                        type="submit"
                        className="block bg-green-600 text-white text-center p-3 m-3"
                    >
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </div>
    );
}
