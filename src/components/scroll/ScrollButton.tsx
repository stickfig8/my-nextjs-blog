
type Props = {
    onClick: () => void;
    inner: string;
}

export default function ScrollButton({onClick, inner} : Props) {
    return (
        <button onClick={onClick} className="text-lg bold cursor-pointer hover:scale-110 transition-transform duartion-300" >
            {inner}
        </button>
    )
}