'use client';
import { usePathname } from "next/navigation";



const LinkItem = ({ text, href }: { text: string; href: string;}) => {

        const path = usePathname();
        const isCurrentPath = path.includes(href);

    return(
        <li className={`${isCurrentPath ? 'underline' : ''} text-white-100 hover:text-red-100 transition ease-in-out hover:underline`}>
            <a href={href}>{text}</a>
        </li>
    )
}


const TopNavigation = () => {
  return (
    <div className="bg-green-600 flex flex-row justify-center items-center  pt-3 pr-4 pb-3 pl-4 drop-shadow-lg">
        <ul className="flex flex-row items-center gap-4 w-full max-w-screen-lg">
            <li>
                <a href="/">
                    <img 
                        src="https://cdn.bsky.app/img/avatar/plain/did:plc:f6wrpysr4utwq444eql6vbgy/bafkreicights4zxifuf7s255berhn244o6sr3an5wepe5lj4rtobacfy6u@jpeg" 
                        className="h-10 rounded-full border-green-100 border-2" 
                    />
                </a>
            </li>
            <LinkItem text="About" href="/about" />
            <LinkItem text="Schedule" href="/schedule" />
            <LinkItem text="Contact" href="/contact" />
            <LinkItem text="Inventory" href="/inventory" />
        </ul>
    </div>
  )
}

export default TopNavigation;