import { useState } from "react";
import { router } from "@inertiajs/react";

export default function TambahPersonals(props) {
    const { auth } = props;

    console.log(auth);
    const [saudaraPriaCount, setSaudaraPriaCount] = useState(0);
    const [saudaraPriaData, setSaudaraPriaData] = useState([]);
    const [namaPria, setNamaPria] = useState();
    const [namaWanita, setNamaWanita] = useState();

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
            user_id: auth.user.id,
            namaPria: namaPria,
            namaWanita: namaWanita,
            saudaraPria: saudaraPriaObject,
            lastUpdateBy: auth.user.id,
        };

        console.log(data);

        router.post("/personals", data);
    }

    return (
        <div className="m-4">
            <h1>Tambah Data Personals</h1>
            <br></br>
            <form onSubmit={submitHandler}>
                <label htmlFor="namaPria" className="block">
                    Nama Mempelai Pria
                </label>
                <input
                    type="text"
                    className="rounded-md"
                    id="namaPria"
                    placeholder=""
                    name="namaPria"
                    onChange={(namaPria) => setNamaPria(namaPria.target.value)}
                ></input>
                <label htmlFor="namaWanita" className="block">
                    Nama Mempelai Wanita
                </label>
                <input
                    type="text"
                    className="rounded-md"
                    id="namaWanita"
                    placeholder=""
                    name="namaWanita"
                    onChange={(namaWanita) =>
                        setNamaWanita(namaWanita.target.value)
                    }
                ></input>

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

                <div id="saudaraPria"></div>

                {Array.from({ length: saudaraPriaCount }).map((_, index) => (
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
                            onChange={(e) => handleSaudaraPriaChange(index, e)}
                        ></input>

                        {/* <label
                            htmlFor={`nomorSaudaraPria${index + 1}`}
                            className="block"
                        >
                            Nomor Saudara Pria {index + 1}
                        </label>
                        <input
                            type="text"
                            className="rounded-md"
                            id={`nomorSaudaraPria${index + 1}`}
                            name={`nomorSaudaraPria${index + 1}`}
                            value={saudaraPriaData[index] || ""}
                            onChange={(e) => handleSaudaraPriaChange(index, e)}
                        ></input> */}
                    </div>
                ))}

                <button
                    type="submit"
                    className="block bg-green-600 text-white text-center p-3 m-3"
                >
                    Masukan Data
                </button>
            </form>
        </div>
    );
}
