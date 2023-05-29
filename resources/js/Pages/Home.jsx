import { Link, Head } from "@inertiajs/react";

export default function Home(props) {
    const { title, message, news } = props;
    return (
        <div className="min-h-screen 00 p-3">
            <Head title={title} />
            <h1 className="text-2xl m-4">{message}</h1>
            <Link
                role="button"
                className="bg-blue-700 text-white p-3 m-3"
                href="/home/create"
            >
                Tambah Data
            </Link>
            {news ? (
                news.map((data, i) => {
                    return (
                        <div key={i} className=" m-3">
                            <p>Title: {data.title}</p>
                            <p>Excerpt: {data.excerpt}</p>
                            <p>Description: {data.description}</p>
                            <p>Author: {data.author}</p>
                            <Link
                                className="block bg-green-700 text-white p-2 m-3"
                                href={`/home/${data.id}/edit`}
                            >
                                Edit
                            </Link>
                            <Link
                                className="block bg-green-700 text-white p-2 m-3"
                                href="/home/delete"
                            >
                                Hapus
                            </Link>
                        </div>
                    );
                })
            ) : (
                <p>Data Belum ada</p>
            )}
        </div>
    );
}
