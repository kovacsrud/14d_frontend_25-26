import Link from "next/link"

export default function Menu() {

    return (
        <div className="navbar bg-red-300 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Main</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/components/posts">Posts</Link></li>
                    <li><Link href="/components/servercustomers">Customers</Link></li>
                    <li><Link href="/components/income">Szűrés</Link></li>
                   
                </ul>
            </div>
        </div>
    )
}