import { Link, Head, router } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";

export default function EditSangjit({ auth, sangjit }) {
    const itemSangjitPriaParse = JSON.parse(sangjit.itemSangjitPria);
    const itemSangjitWanitaParse = JSON.parse(sangjit.itemSangjitWanita);

    const [tanggalSangjit, setTanggalSangjit] = useState(
        sangjit.tanggalSangjit
    );
    const [waktuSangjit, setWaktuSangjit] = useState(sangjit.waktuSangjit);
    const [venueSangjitPria, setVenueSangjitPria] = useState(
        sangjit.venueSangjitPria || ""
    );
    const [venueSangjitWanita, setVenueSangjitWanita] = useState(
        sangjit.venueSangjitWanita || ""
    );
    const [itemSangjitPria, setItemSangjitPria] = useState(
        Object.values(itemSangjitPriaParse) || ""
    );
    const [itemSangjitWanita, setItemSangjitWanita] = useState(
        Object.values(itemSangjitWanitaParse) || ""
    );
    const [itemSangjitPriaCount, setItemSangjitPriaCount] = useState(
        Object.keys(itemSangjitPriaParse).length || 0
    );
    const [itemSangjitWanitaCount, setItemSangjitWanitaCount] = useState(
        Object.keys(itemSangjitWanitaParse).length || 0
    );
    const [rundownAcaraSangjit, setRundownAcaraSangjit] = useState(
        sangjit.rundownAcaraSangjit || ""
    );

    const trixInput = useRef(sangjit.rundownAcaraSangjit);

    useEffect(() => {
        const handleTrixChange = (event) => {
            console.log("trix change event fired");
            setRundownAcaraSangjit(event.target.innerHTML);
        };

        trixInput.current.addEventListener("trix-change", handleTrixChange);
    }, []);

    function TambahForm(nama) {
        if (nama === "pria") {
            setItemSangjitPriaCount((prevCount) => prevCount + 1);

            const updatedData = [...itemSangjitPria];
            updatedData.push("");
            setItemSangjitPria(updatedData);
        } else {
            setItemSangjitWanitaCount((prevCount) => prevCount + 1);

            const updatedData = [...itemSangjitWanita];
            updatedData.push("");
            setItemSangjitWanita(updatedData);
        }
    }

    function KurangForm(nama) {
        if (nama === "pria") {
            setItemSangjitPriaCount((prevCount) => prevCount - 1);

            const updatedData = [...itemSangjitPria];
            updatedData.pop();
            setItemSangjitPria(updatedData);
        } else {
            setItemSangjitWanitaCount((prevCount) => prevCount - 1);
            const updatedData = [...itemSangjitWanita];
            updatedData.pop();
            setItemSangjitWanita(updatedData);
        }
    }

    function handleItemSangjitPriaChange(index, event) {
        const updatedData = [...itemSangjitPria];
        updatedData[index] = event.target.value;
        setItemSangjitPria(updatedData);
    }

    function handleItemSangjitWanitaChange(index, event) {
        const updatedData = [...itemSangjitWanita];
        updatedData[index] = event.target.value;
        setItemSangjitWanita(updatedData);
    }

    function submitHandler(e) {
        e.preventDefault();

        const itemSangjitPriaObject = {};
        const itemSangjitWanitaObject = {};

        for (let i = 0; i < itemSangjitPria.length; i++) {
            const key = i + 1;
            itemSangjitPriaObject[key] = itemSangjitPria[i];
        }

        for (let i = 0; i < itemSangjitWanita.length; i++) {
            const key = i + 1;
            itemSangjitWanitaObject[key] = itemSangjitWanita[i];
        }

        const data = {
            user_id: sangjit.user.id,
            last_update_by: auth.user.id,
            tanggalSangjit: tanggalSangjit,
            waktuSangjit: waktuSangjit,
            venueSangjitPria: venueSangjitPria,
            venueSangjitWanita: venueSangjitWanita,
            itemSangjitPria: itemSangjitPriaObject,
            itemSangjitWanita: itemSangjitWanitaObject,
            rundownAcaraSangjit: rundownAcaraSangjit,
        };

        console.log(data);

        router.put(`/sangjit/${sangjit.id}`, data);
    }

    return (
        <div className="m-5">
            <p className="text-2xl">Isi Data Sangjit</p>

            <form
                className="my-4 p-4 rounded-lg bg-slate-200"
                onSubmit={submitHandler}
            >
                <div className="my-2">
                    <label className="mr-2" htmlFor="tanggalSangjit">
                        Tanggal Sangjit
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="date"
                        id="tanggalSangjit"
                        name="tanggalSangjit"
                        defaultValue={tanggalSangjit}
                        onChange={(e) => {
                            setTanggalSangjit(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="waktuSangjit">
                        Waktu Sangjit
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="time"
                        id="waktuSangjit"
                        name="waktuSangjit"
                        defaultValue={waktuSangjit}
                        onChange={(e) => {
                            setWaktuSangjit(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="venueSangjitPria">
                        Venue Sangjit Pria
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="venueSangjitPria"
                        name="venueSangjitPria"
                        defaultValue={venueSangjitPria}
                        onChange={(e) => {
                            setVenueSangjitPria(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label className="mr-2" htmlFor="venueSangjitWanita">
                        Venue Sangjit Wanita
                    </label>
                    <input
                        className="h-8 rounded-md"
                        type="text"
                        id="venueSangjitWanita"
                        name="venueSangjitWanita"
                        defaultValue={venueSangjitWanita}
                        onChange={(e) => {
                            setVenueSangjitWanita(e.target.value);
                        }}
                    />
                </div>

                <div className="my-8">
                    <span
                        className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => TambahForm("pria")}
                    >
                        + Form Item Pria
                    </span>

                    {itemSangjitPriaCount > 0 ? (
                        <span
                            className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                            onClick={() => KurangForm("pria")}
                        >
                            - Form Item Pria
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                {Array.from({ length: itemSangjitPriaCount }).map(
                    (_, index) => (
                        <div key={index} className="my-4">
                            <label
                                className="mr-2"
                                htmlFor={`itemSangjitPria${index + 1}`}
                            >
                                Item Sangjit Pria {index + 1}
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="text"
                                id={`itemSangjitPria${index + 1}`}
                                name={`itemSangjitPria${index + 1}`}
                                defaultValue={itemSangjitPria[index] || ""}
                                onChange={(e) =>
                                    handleItemSangjitPriaChange(index, e)
                                }
                            />
                        </div>
                    )
                )}

                <div className="my-8">
                    <span
                        className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => TambahForm("qanita")}
                    >
                        + Form Item Wanita
                    </span>

                    {itemSangjitWanitaCount > 0 ? (
                        <span
                            className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                            onClick={() => KurangForm("qanita")}
                        >
                            - Form Item Wanita
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                {Array.from({ length: itemSangjitWanitaCount }).map(
                    (_, index) => (
                        <div key={index} className="my-4">
                            <label
                                className="mr-2"
                                htmlFor={`itemSangjitWanita${index + 1}`}
                            >
                                Item Sangjit Wanita {index + 1}
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="text"
                                id={`itemSangjitWanita${index + 1}`}
                                name={`itemSangjitWanita${index + 1}`}
                                defaultValue={itemSangjitWanita[index] || ""}
                                onChange={(e) =>
                                    handleItemSangjitWanitaChange(index, e)
                                }
                            />
                        </div>
                    )
                )}

                <div className="mt-5">
                    <p className="font-black">Rundown Acara Sangjit</p>
                    <div className="mt-4 bg-slate-50 rounded-lg">
                        <input
                            type="hidden"
                            id="rundwonAcaraSangjit"
                            name="rundwonAcaraSangjit"
                            defaultValue={rundownAcaraSangjit}
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
