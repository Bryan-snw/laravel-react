import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Tambah(props) {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        const data = { title, excerpt, description, author };
        console.log(data);

        router.post("/home", data);
    }

    return (
        <div className="p-4">
            <Head title="Tambah Data" />
            <h1>Tambah Data</h1>
            <form action="" method="post" onSubmit={submitHandler}>
                <label htmlFor="title" className="block">
                    Title
                </label>
                <input
                    type="text"
                    className="rounded-md"
                    id="title"
                    placeholder=""
                    name="title"
                    onChange={(title) => setTitle(title.target.value)}
                ></input>
                <label htmlFor="excerpt" className="block">
                    excerpt
                </label>
                <input
                    type="text"
                    className="rounded-md"
                    id="excerpt"
                    placeholder=""
                    name="excerpt"
                    onChange={(excerpt) => setExcerpt(excerpt.target.value)}
                ></input>
                <label htmlFor="description" className="block">
                    Description
                </label>
                <input
                    type="text"
                    className="rounded-md"
                    id="description"
                    placeholder=""
                    name="description"
                    onChange={(description) =>
                        setDescription(description.target.value)
                    }
                ></input>
                <label htmlFor="author" className="block">
                    Author
                </label>
                <input
                    type="text"
                    className="rounded-md"
                    id="author"
                    placeholder=""
                    name="author"
                    onChange={(author) => setAuthor(author.target.value)}
                ></input>
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
