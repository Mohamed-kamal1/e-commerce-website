export function Aside() {
    const categories = [
        "Woman’s Fashion",
        "Men’s Fashion",
        "Electronics",
        "Home & Living",
        "Health & Beauty",
        "Baby & Toys",
        "Books & Stationery",
        "Automotive",
        "Outdoor & Sports",
        "Others"
    ];
    return (
        <>
            <aside
                className="hidden md:flex flex-col flex-none gap-3 w-1/6"
            >
                {
                    categories.map((category, index) => (
                        <a
                            style={{
                            }}
                            className="text-sm hover:text-neutral-500"
                            key={index} href="">
                            {category}
                        </a>
                    ))
                }
            </aside>

        </>
    )
}