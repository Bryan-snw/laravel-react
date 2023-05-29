import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Edit(props) {
    const { news } = props;
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    function submitHandler(e) {
        e.preventDefault();

        const data = { title, excerpt, description, author };
        console.log(data);

        router.put(`/home/${news.id}`, data);
    }

    return (
        <div className="p-4">
            <Head title="Edit Data" />
            <h1>Edit Data</h1>
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
                    defaultValue={news.title}
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
                    defaultValue={news.excerpt}
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
                    defaultValue={news.description}
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
                    defaultValue={news.author}
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
