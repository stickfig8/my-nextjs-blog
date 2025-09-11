type Props = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export default function Pagenation({page, setPage, totalPages} : Props) {
    return (
        <div className="flex justify-center gap-1 text-lg mt-3">
            <button
                disabled={page === 0}
                onClick={() => setPage((page - 1))}
                className="px-3 py-1 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
                {"<"}
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
            <button
                key={i}
                onClick={() => setPage(i)}
                className={`px-3 py-1 cursor-pointer ${page === i ? "underline" : ""}`}
            >
                {i + 1}
            </button>
            ))}

            <button
                disabled={page >= totalPages - 1}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
                {">"}
            </button>
        </div>
    )
}