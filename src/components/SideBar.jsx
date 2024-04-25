import { useRef, useEffect } from "react"
import { navLinks } from "../constants"

function SideBar({shown, setShown}) {
    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShown(false);
        }
    };

    useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    });

    return (
    <ul  ref={ref} className="bg-black-gradient w-fit py-4 px-8 text-center rounded-lg sm:hidden flex-col gap-3 absolute top-20 right-5 flex animate-up">
        {navLinks.map((item) => {
            return (
                <li key={`#${item.id}`} className='text-white'><a href={`#${item.id}`}>{item.title}</a></li>
            )
        })}
    </ul>
    )
}

export default SideBar
