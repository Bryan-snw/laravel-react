import { Link, Head, router } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";

export default function EditSangjit({ auth, teapai }) {
    const perlengkapanTeapaiParse = JSON.parse(teapai.perlengkapanTeapai);

    const [tanggalTeapai, setTanggalTeapai] = useState(teapai.tanggalTeapai);
    const [waktuTeapai, setWaktuTeapai] = useState(teapai.waktuTeapai);
    const [venueTeapaiPria, setVenueTeapaiPria] = useState(
        teapai.venueTeapaiPria || ""
    );
    const [venueTeapaiWanita, setVenueTeapaiWanita] = useState(
        teapai.venueTeapaiPria || ""
    );
    const [perlengkapanTeapai, setPerlengkapanTeapai] = useState(
        Object.values(perlengkapanTeapaiParse) || ""
    );
    const [perlengkapanTeapaiCount, setPerlengkapanTeapaiCount] = useState(
        Object.keys(perlengkapanTeapaiParse).length || 0
    );
    const [rundownAcaraTeapai, setRundownAcaraTeapai] = useState(
        teapai.rundownAcaraTeapai || ""
    );

    const trixInput = useRef(teapai.rundownAcaraTeapai || "");

    useEffect(() => {
        const handleTrixChange = (event) => {
            console.log("trix change event fired");
            setRundownAcaraTeapai(event.target.innerHTML);
        };

        trixInput.current.addEventListener("trix-change", handleTrixChange);
    }, []);

    function TambahForm() {
        setPerlengkapanTeapaiCount((prevCount) => prevCount + 1);

        const updatedData = [...perlengkapanTeapai];
        updatedData.push("");
        setPerlengkapanTeapai(updatedData);
    }

    function KurangForm() {
        setPerlengkapanTeapaiCount((prevCount) => prevCount - 1);

        const updatedData = [...perlengkapanTeapai];
        updatedData.pop();
        setPerlengkapanTeapai(updatedData);
    }

    function handlePerlengkapanTeapaiChange(index, event) {
        const updatedData = [...perlengkapanTeapai];
        updatedData[index] = event.target.value;
        setPerlengkapanTeapai(updatedData);
    }

    function submitHandler(e) {
        e.preventDefault();

        const perlengkapanTeapaiObject = {};

        for (let i = 0; i < perlengkapanTeapai.length; i++) {
            const key = i + 1;
            perlengkapanTeapaiObject[key] = perlengkapanTeapai[i];
        }

        const data = {
            user_id: teapai.user.id,
            last_update_by: auth.user.id,
            tanggalTeapai: tanggalTeapai,
            waktuTeapai: waktuTeapai,
            venueTeapaiPria: venueTeapaiPria,
            venueTeapaiWanita: venueTeapaiWanita,
            perlengkapanTeapai: perlengkapanTeapaiObject,
            rundownAcaraTeapai: rundownAcaraTeapai,
        };

        console.log(data);

        router.put(`/teapai/${teapai.id}`, data);
    }

    return (
        <div className="m-5">
            <p className="text-2xl">Isi Data Teapai</p>

            <form
                className="my-4 p-4 rounded-lg bg-slate-200"
                onSubmit={submitHandler}
            >
                <div className="my-2">
                    <label className="mr-2" htmlFor="tanggalTeapai">
                        Tanggal Teapai
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="date"
                        id="tanggalTeapai"
                        name="tanggalTeapai"
                        defaultValue={tanggalTeapai}
                        onChange={(e) => {
                            setTanggalTeapai(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="waktuTeapai">
                        Waktu Teapai
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="time"
                        id="waktuTeapai"
                        name="waktuTeapai"
                        defaultValue={waktuTeapai}
                        onChange={(e) => {
                            setWaktuTeapai(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="venueTeapaiPria">
                        Venue Teapai Pria
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="venueTeapaiPria"
                        name="venueTeapaiPria"
                        defaultValue={venueTeapaiPria}
                        onChange={(e) => {
                            setVenueTeapaiPria(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="venueTeapaiWanita">
                        Venue Teapai Wanita
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="venueTeapaiWanita"
                        name="venueTeapaiWanita"
                        defaultValue={venueTeapaiWanita}
                        onChange={(e) => {
                            setVenueTeapaiWanita(e.target.value);
                        }}
                    />
                </div>

                <div className="my-8">
                    <span
                        className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => TambahForm()}
                    >
                        + Form Perlengkapan Teapai
                    </span>

                    {perlengkapanTeapaiCount > 0 ? (
                        <span
                            className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                            onClick={() => KurangForm()}
                        >
                            - Form Perlengkapan Teapai
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                {Array.from({ length: perlengkapanTeapaiCount }).map(
                    (_, index) => (
                        <div key={index} className="my-4">
                            <label
                                className="mr-2"
                                htmlFor={`perlengkapanTeapai${index + 1}`}
                            >
                                Perlengkapan Teapai {index + 1}
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="text"
                                id={`perlengkapanTeapai${index + 1}`}
                                name={`perlengkapanTeapai${index + 1}`}
                                defaultValue={perlengkapanTeapai[index]}
                                onChange={(e) =>
                                    handlePerlengkapanTeapaiChange(index, e)
                                }
                            />
                        </div>
                    )
                )}

                <div className="mt-5">
                    <p className="font-black">Rundown Acara Teapai</p>
                    <div className="mt-4 bg-slate-50 rounded-lg">
                        <input
                            type="hidden"
                            id="rundwonAcaraSangjit"
                            name="rundwonAcaraSangjit"
                            defaultValue={rundownAcaraTeapai}
                        />
                        <trix-editor
                            ref={trixInput}
                            input="rundwonAcaraSangjit"
                        ></trix-editor>
                    </div>
                </div>
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
