import SortSelectButton from "../common/SortSelectButton";

type Props = {
    subCategory: string[]
}

export default function SubCategoryList({subCategory} : Props) {
    return (
        <div className="w-full h-fit flex flex-row flex-wrap gap-3 mb-6">
            {subCategory.map((t) => (
                <SortSelectButton key={t} text={t} to={t} />
            ))}
        </div>
    )
}