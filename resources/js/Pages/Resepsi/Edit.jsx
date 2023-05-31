import { Link, Head, router } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";

export default function edit({ auth, resepsi }) {
    const namaRegisPriaPICParse = JSON.parse(resepsi.namaRegisPriaPIC);
    const namaRegisWanitaPICParse = JSON.parse(resepsi.namaRegisWanitaPIC);
    const nomorRegisPriaPICParse = JSON.parse(resepsi.nomorRegisPriaPIC);
    const nomorRegisWanitaPICParse = JSON.parse(resepsi.nomorRegisWanitaPIC);

    console.log(resepsi);

    const [isShown, setIsShown] = useState(true);

    const [RegisPriaCount, setRegisPriaCount] = useState(
        Object.keys(namaRegisPriaPICParse).length || 0
    );
    const [RegisWanitaCount, setRegisWanitaCount] = useState(
        Object.keys(namaRegisWanitaPICParse).length || 0
    );

    const [namaRegisPriaPIC, setNamaRegisPriaPIC] = useState(
        Object.values(namaRegisPriaPICParse) || ""
    );
    const [nomorRegisPriaPIC, setNomorRegisPriaPIC] = useState(
        Object.values(nomorRegisPriaPICParse) || ""
    );
    const [namaRegisWanitaPIC, setNamaRegisWanitaPIC] = useState(
        Object.values(namaRegisWanitaPICParse) || ""
    );
    const [nomorRegisWanitaPIC, setNomorRegisWanitaPIC] = useState(
        Object.values(nomorRegisWanitaPICParse) || ""
    );

    const [tanggalResepsi, setTanggalResepsi] = useState(
        resepsi.tanggalResepsi || ""
    );
    const [venueResepsi, setVenueResepsi] = useState(
        resepsi.venueResepsi || ""
    );
    const [waktuResepsi, setWaktuResepsi] = useState(
        resepsi.waktuResepsi || ""
    );
    const [vendorMUABride, setVendorMUABride] = useState(
        resepsi.vendorMUABride || ""
    );
    const [itemMUABride, setItemMUABride] = useState(
        resepsi.itemMUABride || ""
    );
    const [vendorHairDo, setVendorHairDo] = useState(
        resepsi.vendorHairDo || ""
    );
    const [itemHairDo, setItemHairDo] = useState(resepsi.itemHairDo || "");
    const [vendorGownBride, setVendorGownBride] = useState(
        resepsi.vendorGownBride || ""
    );
    const [itemGownBride, setItemGownBride] = useState(
        resepsi.itemGownBride || ""
    );
    const [vendorSuitGroom, setVendorSuitGroom] = useState(
        resepsi.vendorSuitGroom || ""
    );
    const [itemSuitGroom, setItemSuitGroom] = useState(
        resepsi.itemSuitGroom || ""
    );
    const [vendorMc, setVendorMc] = useState(resepsi.vendorMc || "");
    const [itemMc, setItemMc] = useState(resepsi.itemMc || "");
    const [vendorDecoration, setVendorDecoration] = useState(
        resepsi.vendorDecoration || ""
    );
    const [itemDecoration, setItemDecoration] = useState(
        resepsi.itemDecoration || ""
    );
    const [vendorPhotography, setVendorPhotography] = useState(
        resepsi.vendorPhotography || ""
    );
    const [itemPhotography, setItemPhotography] = useState(
        resepsi.itemPhotography || ""
    );
    const [vendorLighting, setVendorLighting] = useState(
        resepsi.vendorLighting || ""
    );
    const [itemLighting, setItemLighting] = useState(
        resepsi.itemLighting || ""
    );
    const [vendorEntertaintment, setVendorEntertaintment] = useState(
        resepsi.vendorEntertaintment || ""
    );
    const [itemEntertaintment, setItemEntertaintment] = useState(
        resepsi.itemEntertaintment || ""
    );
    const [vendorSoundSystem, setVendorSoundSystem] = useState(
        resepsi.vendorSoundSystem || ""
    );
    const [itemSoundSystem, setItemSoundSystem] = useState(
        resepsi.itemSoundSystem || ""
    );
    const [vendorPhotoBooth, setVendorPhotoBooth] = useState(
        resepsi.vendorPhotoBooth || ""
    );
    const [itemPhotoBooth, setItemPhotoBooth] = useState(
        resepsi.itemPhotoBooth || ""
    );
    const [vendorInvitation, setVendorInvitation] = useState(
        resepsi.vendorInvitation || ""
    );
    const [itemInvitation, setItemInvitation] = useState(
        resepsi.itemInvitation || ""
    );
    const [vendorSouvenir, setVendorSouvenir] = useState(
        resepsi.vendorSouvenir || ""
    );
    const [itemSouvenir, setItemSouvenir] = useState(
        resepsi.itemSouvenir || ""
    );
    const [namaHongbaoPriaPIC, setNamaHongbaoPriaPIC] = useState(
        resepsi.namaHongbaoPriaPIC || ""
    );
    const [nomorHongbaoPriaPIC, setNomorHongbaoPriaPIC] = useState(
        resepsi.nomorHongbaoPriaPIC || ""
    );
    const [namaHongbaoWanitaPIC, setNamaHongbaoWanitaPIC] = useState(
        resepsi.namaHongbaoWanitaPIC || ""
    );
    const [nomorHongbaoWanitaPIC, setNomorHongbaoWanitaPIC] = useState(
        resepsi.nomorHongbaoWanitaPIC || ""
    );
    const [namaFamilyPriaPIC, setNamaFamilyPriaPIC] = useState(
        resepsi.namaFamilyPriaPIC || ""
    );
    const [nomorFamilyPriaPIC, setNomorFamilyPriaPIC] = useState(
        resepsi.nomorFamilyPriaPIC || ""
    );
    const [namaFamilyWanitaPIC, setNamaFamilyWanitaPIC] = useState(
        resepsi.namaFamilyWanitaPIC || ""
    );
    const [nomorFamilyWanitaPIC, setNomorFamilyWanitaPIC] = useState(
        resepsi.nomorFamilyWanitaPIC || ""
    );

    const [rundownAcaraResepsi, setRundownAcaraResepsi] = useState(
        resepsi.rundownAcaraResepsi || ""
    );

    const trixInput = useRef("");

    useEffect(() => {
        const handleTrixChange = (event) => {
            console.log("trix change event fired");
            setRundownAcaraResepsi(event.target.innerHTML);
        };

        trixInput.current.addEventListener("trix-change", handleTrixChange);
    }, []);

    function TambahForm(namaForm) {
        if (namaForm === "pria") {
            setRegisPriaCount((prevCount) => prevCount + 1);

            const updatedData = [...namaRegisPriaPIC];
            updatedData.push("");
            setNamaRegisPriaPIC(updatedData);

            const updatedData1 = [...nomorRegisPriaPIC];
            updatedData1.push("");
            setNomorRegisPriaPIC(updatedData1);
        } else {
            setRegisWanitaCount((prevCount) => prevCount + 1);

            const updatedData = [...namaRegisWanitaPIC];
            updatedData.push("");
            setNamaRegisWanitaPIC(updatedData);

            const updatedData1 = [...nomorRegisWanitaPIC];
            updatedData1.push("");
            setNomorRegisWanitaPIC(updatedData1);
        }
    }

    function KurangForm(namaForm) {
        if (namaForm === "pria") {
            setRegisPriaCount((prevCount) => prevCount - 1);

            const updatedData = [...namaRegisPriaPIC];
            updatedData.pop();
            setNamaRegisPriaPIC(updatedData);

            const updatedData1 = [...nomorRegisPriaPIC];
            updatedData1.pop();
            setNomorRegisPriaPIC(updatedData1);
        } else {
            setRegisWanitaCount((prevCount) => prevCount - 1);

            const updatedData = [...namaRegisWanitaPIC];
            updatedData.pop();
            setNamaRegisWanitaPIC(updatedData);

            const updatedData1 = [...nomorRegisWanitaPIC];
            updatedData1.pop();
            setNomorRegisWanitaPIC(updatedData1);
        }
    }

    function handleNamaRegisPriaChange(index, event) {
        const updatedData = [...namaRegisPriaPIC];
        updatedData[index] = event.target.value;
        setNamaRegisPriaPIC(updatedData);
    }

    function handleNomorRegisPriaChange(index, event) {
        const updatedData = [...nomorRegisPriaPIC];
        updatedData[index] = event.target.value;
        setNomorRegisPriaPIC(updatedData);
    }

    function handleNamaRegisWanitaChange(index, event) {
        const updatedData = [...namaRegisWanitaPIC];
        updatedData[index] = event.target.value;
        setNamaRegisWanitaPIC(updatedData);
    }

    function handleNomorRegisWanitaChange(index, event) {
        const updatedData = [...nomorRegisWanitaPIC];
        updatedData[index] = event.target.value;
        setNomorRegisWanitaPIC(updatedData);
    }

    function hide() {
        document.getElementById("detail").style.display = "none";
        setIsShown(false);
    }

    function show() {
        document.getElementById("detail").style.display = "grid";
        setIsShown(true);
    }

    function submitHandler(e) {
        e.preventDefault();

        // console.log(document.getElementById("rundwonAcaraResepsi").value);

        const namaRegisPriaObject = {};
        const nomorRegisPriaObject = {};

        const namaRegisWanitaObject = {};
        const nomorRegisWanitaObject = {};

        for (let i = 0; i < namaRegisPriaPIC.length; i++) {
            const key = i + 1;
            namaRegisPriaObject[key] = namaRegisPriaPIC[i];
            nomorRegisPriaObject[key] = nomorRegisPriaPIC[i];
        }

        for (let i = 0; i < namaRegisWanitaPIC.length; i++) {
            const key = i + 1;
            namaRegisWanitaObject[key] = namaRegisWanitaPIC[i];
            nomorRegisWanitaObject[key] = nomorRegisWanitaPIC[i];
        }

        const data = {
            user_id: resepsi.user_id,
            last_update_by: auth.user.id,
            tanggalResepsi: tanggalResepsi,
            venueResepsi: venueResepsi,
            waktuResepsi: waktuResepsi,

            vendorMUABride: vendorMUABride,
            itemMUABride: itemMUABride,

            vendorHairDo: vendorHairDo,
            itemHairDo: itemHairDo,

            vendorGownBride: vendorGownBride,
            itemGownBride: itemGownBride,

            vendorSuitGroom: vendorSuitGroom,
            itemSuitGroom: itemSuitGroom,

            vendorMc: vendorMc,
            itemMc: itemMc,

            vendorDecoration: vendorDecoration,
            itemDecoration: itemDecoration,

            vendorPhotography: vendorPhotography,
            itemPhotography: itemPhotography,

            vendorLighting: vendorLighting,
            itemLighting: itemLighting,

            vendorEntertaintment: vendorEntertaintment,
            itemEntertaintment: itemEntertaintment,

            vendorSoundSystem: vendorSoundSystem,
            itemSoundSystem: itemSoundSystem,

            vendorPhotoBooth: vendorPhotoBooth,
            itemPhotoBooth: itemPhotoBooth,

            vendorInvitation: vendorInvitation,
            itemInvitation: itemInvitation,

            vendorSouvenir: vendorSouvenir,
            itemSouvenir: itemSouvenir,

            namaRegisPriaPIC: namaRegisPriaObject,
            nomorRegisPriaPIC: nomorRegisPriaObject,
            namaRegisWanitaPIC: namaRegisWanitaObject,
            nomorRegisWanitaPIC: nomorRegisWanitaObject,

            namaHongbaoPriaPIC: namaHongbaoPriaPIC,
            nomorHongbaoPriaPIC: nomorHongbaoPriaPIC,

            namaHongbaoWanitaPIC: namaHongbaoWanitaPIC,
            nomorHongbaoWanitaPIC: nomorHongbaoWanitaPIC,

            namaFamilyPriaPIC: namaFamilyPriaPIC,
            nomorFamilyPriaPIC: nomorFamilyPriaPIC,

            namaFamilyWanitaPIC: namaFamilyWanitaPIC,
            nomorFamilyWanitaPIC: nomorFamilyWanitaPIC,

            rundownAcaraResepsi: rundownAcaraResepsi,
        };

        console.log(data);

        router.put(`/resepsi/${resepsi.id}`, data);
    }
    return (
        <div className="m-5">
            <h1 className="text-2xl my-3">Edit Data Resepsi</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <div className="my-2">
                            <label className="mr-2" htmlFor="tanggalResepsi">
                                Tanggal Resepsi
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="date"
                                name="tanggalResepsi"
                                id="tanggalResepsi"
                                defaultValue={tanggalResepsi}
                                onChange={(e) => {
                                    setTanggalResepsi(e.currentTarget.value);
                                }}
                            ></input>
                        </div>
                        <div className="my-2">
                            <label className="mr-2" htmlFor="venueResepsi">
                                Venue Resepsi
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="text"
                                name="venueResepsi"
                                id="venueResepsi"
                                defaultValue={venueResepsi}
                                onChange={(e) => {
                                    setVenueResepsi(e.currentTarget.value);
                                }}
                            ></input>
                        </div>
                        <div className="my-2">
                            <label className="mr-2" htmlFor="waktuResepsi">
                                Waktu Resepsi
                            </label>
                            <input
                                className="h-8 rounded-md"
                                type="time"
                                name="waktuResepsi"
                                id="waktuResepsi"
                                defaultValue={waktuResepsi}
                                onChange={(e) => {
                                    setWaktuResepsi(e.currentTarget.value);
                                }}
                            ></input>
                        </div>
                        <div className="my-2">
                            {isShown ? (
                                <div
                                    onClick={hide}
                                    className="cursor-pointer text-center bg-red-300 hover:bg-red-400 text-red-800 font-bold my-4 py-2 px-4 rounded-sm"
                                >
                                    Sembunyikan
                                </div>
                            ) : (
                                <div
                                    onClick={show}
                                    className="cursor-pointer text-center bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold my-4 py-2 px-4 rounded-sm"
                                >
                                    Show
                                </div>
                            )}

                            <h1 className="my-2">Details</h1>
                            <div className="grid grid-cols-2 gap-4" id="detail">
                                <p className="col-span-2 font-black">
                                    MUA Bride
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorMUABride"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorMUABride"
                                        id="vendorMUABride"
                                        defaultValue={vendorMUABride}
                                        onChange={(e) => {
                                            setVendorMUABride(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemMUABride"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemMUABride"
                                        id="itemMUABride"
                                        defaultValue={itemMUABride}
                                        onChange={(e) =>
                                            setItemMUABride(e.target.value)
                                        }
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">Hair Do</p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorHairDo"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorHairDo"
                                        id="vendorHairDo"
                                        defaultValue={vendorHairDo}
                                        onChange={(e) => {
                                            setVendorHairDo(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemHairDo"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemHairDo"
                                        id="itemHairDo"
                                        defaultValue={itemHairDo}
                                        onChange={(e) => {
                                            setItemHairDo(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Gown Bride
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorGownBride"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorGownBride"
                                        id="vendorGownBride"
                                        defaultValue={vendorGownBride}
                                        onChange={(e) => {
                                            setVendorGownBride(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemGownBride"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemGownBride"
                                        id="itemGownBride"
                                        defaultValue={itemGownBride}
                                        onChange={(e) => {
                                            setItemGownBride(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Suit Groom
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorSuitGroom"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorSuitGroom"
                                        id="vendorSuitGroom"
                                        defaultValue={vendorSuitGroom}
                                        onChange={(e) => {
                                            setVendorSuitGroom(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemSuitGroom"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemSuitGroom"
                                        id="itemSuitGroom"
                                        defaultValue={itemSuitGroom}
                                        onChange={(e) => {
                                            setItemSuitGroom(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">MC</p>
                                <div>
                                    <label className="mr-2" htmlFor="vendorMc">
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorMc"
                                        id="vendorMc"
                                        defaultValue={vendorMc}
                                        onChange={(e) => {
                                            setVendorMc(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label className="mr-2" htmlFor="itemMc">
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemMc"
                                        id="itemMc"
                                        defaultValue={itemMc}
                                        onChange={(e) => {
                                            setItemMc(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Decoration
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorDecoration"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorDecoration"
                                        id="vendorDecoration"
                                        defaultValue={vendorDecoration}
                                        onChange={(e) => {
                                            setVendorDecoration(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemDecoration"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemDecoration"
                                        id="itemDecoration"
                                        defaultValue={itemDecoration}
                                        onChange={(e) => {
                                            setItemDecoration(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Photography
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorPhotography"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorPhotography"
                                        id="vendorPhotography"
                                        defaultValue={vendorPhotography}
                                        onChange={(e) => {
                                            setVendorPhotography(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemPhotography"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemPhotography"
                                        id="itemPhotography"
                                        defaultValue={itemPhotography}
                                        onChange={(e) => {
                                            setItemPhotography(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Lighting
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorLighting"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorLighting"
                                        id="vendorLighting"
                                        defaultValue={vendorLighting}
                                        onChange={(e) => {
                                            setVendorLighting(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemLighting"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemLighting"
                                        id="itemLighting"
                                        defaultValue={itemLighting}
                                        onChange={(e) => {
                                            setItemLighting(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Entertaitnment
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorEntertainment"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorEntertainment"
                                        id="vendorEntertainment"
                                        defaultValue={vendorEntertaintment}
                                        onChange={(e) => {
                                            setVendorEntertaintment(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemEntertainment"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemEntertainment"
                                        id="itemEntertainment"
                                        defaultValue={itemEntertaintment}
                                        onChange={(e) => {
                                            setItemEntertaintment(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Sound System
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorSoundSystem"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorSoundSystem"
                                        id="vendorSoundSystem"
                                        defaultValue={vendorSoundSystem}
                                        onChange={(e) => {
                                            setVendorSoundSystem(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemSoundSystem"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemSoundSystem"
                                        id="itemSoundSystem"
                                        defaultValue={itemSoundSystem}
                                        onChange={(e) => {
                                            setItemSoundSystem(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Photo Booth
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorPhotoBooth"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorPhotoBooth"
                                        id="vendorPhotoBooth"
                                        defaultValue={vendorPhotoBooth}
                                        onChange={(e) => {
                                            setVendorPhotoBooth(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemPhotoBooth"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemPhotoBooth"
                                        id="itemPhotoBooth"
                                        defaultValue={itemPhotoBooth}
                                        onChange={(e) => {
                                            setItemPhotoBooth(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Invitation
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorInvitation"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorInvitation"
                                        id="vendorInvitation"
                                        defaultValue={vendorInvitation}
                                        onChange={(e) => {
                                            setVendorInvitation(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemInvitation"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemInvitation"
                                        id="itemInvitation"
                                        defaultValue={itemInvitation}
                                        onChange={(e) => {
                                            setItemInvitation(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Souvenir
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="vendorSouvenir"
                                    >
                                        Nama Vendor
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="vendorSouvenir"
                                        id="vendorSouvenir"
                                        defaultValue={vendorSouvenir}
                                        onChange={(e) => {
                                            setVendorSouvenir(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="itemSouvenir"
                                    >
                                        Item
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="itemSouvenir"
                                        id="itemSouvenir"
                                        defaultValue={itemSouvenir}
                                        onChange={(e) => {
                                            setItemSouvenir(e.target.value);
                                        }}
                                    ></input>
                                </div>

                                <div className="my-8 col-span-2">
                                    <span
                                        className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                                        onClick={() => TambahForm("pria")}
                                    >
                                        + Form Regis Pria
                                    </span>

                                    {RegisPriaCount > 0 ? (
                                        <span
                                            className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                                            onClick={() => KurangForm("pria")}
                                        >
                                            - Form Regis Pria
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                {Array.from({ length: RegisPriaCount }).map(
                                    (_, index) => (
                                        <div className="col-span-2" key={index}>
                                            <p className="font-black mb-2">
                                                Person In Charge Registrasi Pria{" "}
                                                {index + 1}
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="mr-2"
                                                        htmlFor={`namaRegisPriaPIC${
                                                            index + 1
                                                        }`}
                                                    >
                                                        Nama
                                                    </label>
                                                    <input
                                                        className="h-8 rounded-md"
                                                        type="text"
                                                        name={`namaRegisPriaPIC${
                                                            index + 1
                                                        }`}
                                                        id={`namaRegisPriaPIC${
                                                            index + 1
                                                        }`}
                                                        value={
                                                            namaRegisPriaPIC[
                                                                index
                                                            ] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleNamaRegisPriaChange(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                                <div>
                                                    <label
                                                        className="mr-2"
                                                        htmlFor={`nomorRegisPriaPIC${
                                                            index + 1
                                                        }`}
                                                    >
                                                        Nomor Hp
                                                    </label>
                                                    <input
                                                        className="h-8 rounded-md"
                                                        type="number"
                                                        name={`nomorRegisPriaPIC${
                                                            index + 1
                                                        }`}
                                                        id={`nomorRegisPriaPIC${
                                                            index + 1
                                                        }`}
                                                        value={
                                                            nomorRegisPriaPIC[
                                                                index
                                                            ] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleNomorRegisPriaChange(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}

                                <div className="py-8 col-span-2">
                                    <span
                                        className="cursor-pointer bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                                        onClick={() => TambahForm("Wanita")}
                                    >
                                        + Form Regis Wanita
                                    </span>

                                    {RegisWanitaCount > 0 ? (
                                        <span
                                            className="cursor-pointer bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                                            onClick={() => KurangForm("wanita")}
                                        >
                                            - Form Regis Wanita
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                {Array.from({ length: RegisWanitaCount }).map(
                                    (_, index) => (
                                        <div className="col-span-2" key={index}>
                                            <p className="font-black mb-2">
                                                Person In Charge Registrasi
                                                Wanita {index + 1}
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="mr-2"
                                                        htmlFor={`namaRegisWanitaPIC${
                                                            index + 1
                                                        }`}
                                                    >
                                                        Nama
                                                    </label>
                                                    <input
                                                        className="h-8 rounded-md"
                                                        type="text"
                                                        name={`namaRegisWanitaPIC${
                                                            index + 1
                                                        }`}
                                                        id={`namaRegisWanitaPIC${
                                                            index + 1
                                                        }`}
                                                        value={
                                                            namaRegisWanitaPIC[
                                                                index
                                                            ] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleNamaRegisWanitaChange(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                                <div>
                                                    <label
                                                        className="mr-2"
                                                        htmlFor={`nomorRegisWanitaPIC${
                                                            index + 1
                                                        }`}
                                                    >
                                                        Nomor Hp
                                                    </label>
                                                    <input
                                                        className="h-8 rounded-md"
                                                        type="number"
                                                        name={`nomorRegisWanitaPIC${
                                                            index + 1
                                                        }`}
                                                        id={`nomorRegisWanitaPIC${
                                                            index + 1
                                                        }`}
                                                        value={
                                                            nomorRegisWanitaPIC[
                                                                index
                                                            ] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleNomorRegisWanitaChange(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}

                                <p className="col-span-2 mt-5 font-black">
                                    Person In Charge Hongbao Pria
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="namaHongbaoPriaPIC"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="namaHongbaoPriaPIC"
                                        id="namaHongbaoPriaPIC"
                                        defaultValue={namaHongbaoPriaPIC}
                                        onChange={(e) => {
                                            setNamaHongbaoPriaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="nomorHongbaoPriaPIC"
                                    >
                                        Nomor Hp
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="number"
                                        name="nomorHongbaoPriaPIC"
                                        id="nomorHongbaoPriaPIC"
                                        defaultValue={nomorHongbaoPriaPIC}
                                        onChange={(e) => {
                                            setNomorHongbaoPriaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Person In Charge Hongbao Wanita
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="namaHongbaoWanitaPIC"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="namaHongbaoWanitaPIC"
                                        id="namaHongbaoWanitaPIC"
                                        defaultValue={namaHongbaoWanitaPIC}
                                        onChange={(e) => {
                                            setNamaHongbaoWanitaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="nomorHongbaoWanitaPIC"
                                    >
                                        Nomor Hp
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="number"
                                        name="nomorHongbaoWanitaPIC"
                                        id="nomorHongbaoWanitaPIC"
                                        defaultValue={nomorHongbaoWanitaPIC}
                                        onChange={(e) => {
                                            setNomorHongbaoWanitaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Person In Charge Family Pria
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="namaFamilyPriaPIC"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="namaFamilyPriaPIC"
                                        id="namaFamilyPriaPIC"
                                        defaultValue={namaFamilyPriaPIC}
                                        onChange={(e) => {
                                            setNamaFamilyPriaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="nomorFamilyPriaPIC"
                                    >
                                        Nomor Hp
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="number"
                                        name="nomorFamilyPriaPIC"
                                        id="nomorFamilyPriaPIC"
                                        defaultValue={nomorFamilyPriaPIC}
                                        onChange={(e) => {
                                            setNomorFamilyPriaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>

                                <p className="col-span-2 font-black">
                                    Person In Charge Family Wanita
                                </p>
                                <div>
                                    <label
                                        className="mr-2"
                                        htmlFor="namaFamilyWanitaPIC"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="text"
                                        name="namaFamilyWanitaPIC"
                                        id="namaFamilyWanitaPIC"
                                        defaultValue={namaFamilyWanitaPIC}
                                        onChange={(e) => {
                                            setNamaFamilyWanitaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                                <div>
                                    {" "}
                                    <label
                                        className="mr-2"
                                        htmlFor="nomorFamilyWanitaPIC"
                                    >
                                        Nomor Hp
                                    </label>
                                    <input
                                        className="h-8 rounded-md"
                                        type="number"
                                        name="nomorFamilyWanitaPIC"
                                        id="nomorFamilyWanitaPIC"
                                        defaultValue={nomorFamilyWanitaPIC}
                                        onChange={(e) => {
                                            setNomorFamilyWanitaPIC(
                                                e.target.value
                                            );
                                        }}
                                    ></input>
                                </div>
                            </div>

                            <div className="my-8">
                                <p className="my-5 font-black">Rundown Acara</p>
                                <div className="bg-slate-50 rounded-lg">
                                    <input
                                        type="hidden"
                                        id="rundownAcaraResepsi"
                                        name="rundownAcaraResepsi"
                                        value={rundownAcaraResepsi}
                                    />
                                    <trix-editor
                                        id="trix-rundownAcaraResepsi"
                                        input="rundownAcaraResepsi"
                                        value={rundownAcaraResepsi}
                                        ref={trixInput}
                                    ></trix-editor>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="block bg-green-600 text-white text-center p-3 mt-8 rounded-md"
                            >
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
