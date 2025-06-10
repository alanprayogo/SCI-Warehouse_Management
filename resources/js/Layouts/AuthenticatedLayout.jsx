import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Sidebar from "@/Components/Sidebar";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar Horizontal */}
            <nav className="bg-white border-b border-gray-100">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-20">
                            <Link href="/">
                                <h1 className="mb-4 text-2xl font-semibold text-gray-800">
                                    SIMSCI
                                </h1>
                            </Link>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Hamburger for mobile */}
                        <div className="flex items-center -me-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (prev) => !prev
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:bg-gray-100 hover:text-gray-500"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`${
                        showingNavigationDropdown ? "block" : "hidden"
                    } sm:hidden`}
                >
                    <div className="flex items-center justify-between pb-1 border-b border-gray-200 item">
                        <ResponsiveNavLink href={route("profile.edit")}>
                            <div className="">
                                <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>
                        </ResponsiveNavLink>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Logout
                            </ResponsiveNavLink>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("master-user")}
                            active={route().current("master-user")}
                        >
                            Master User
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("master-warehouse")}
                            active={route().current("master-warehouse")}
                        >
                            Master Warehouse
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("master-supplier")}
                            active={route().current("master-supplier")}
                        >
                            Master Supplier
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("master-product")}
                            active={route().current("master-product")}
                        >
                            Master Product
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("manage-warehouse")}
                            active={route().current("manage-warehouse")}
                        >
                            Manage Warehouse
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("incoming-good")}
                            active={route().current("incoming-good")}
                        >
                            Incoming Good
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("stock-movement")}
                            active={route().current("stock-movement")}
                        >
                            Stock Movement
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("stock-log")}
                            active={route().current("stock-log")}
                        >
                            Stock Log
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("material-request")}
                            active={route().current("material-request")}
                        >
                            Material Request
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("outgoing-good")}
                            active={route().current("outgoing-good")}
                        >
                            Outgoing Good
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("return-transaction")}
                            active={route().current("return-transaction")}
                        >
                            Return Transaction
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("stock-opname")}
                            active={route().current("stock-opname")}
                        >
                            Stock Opname
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="w-full"
                            href={route("report")}
                            active={route().current("report")}
                        >
                            Report
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {/* Sidebar + Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <div className="flex-1 p-6">
                    {/* <main className="p-6 bg-white rounded-lg shadow">
                        
                    </main> */}
                    {children}
                </div>
            </div>
        </div>
    );
}
