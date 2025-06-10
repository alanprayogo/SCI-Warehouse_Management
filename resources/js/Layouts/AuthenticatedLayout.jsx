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
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Navbar Horizontal - Fixed Height */}
            <nav className="flex-shrink-0 bg-white border-b border-gray-100">
                <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-20">
                            <Link href="/">
                                <h1 className="text-xl font-semibold text-gray-800 sm:text-2xl">
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
                    } sm:hidden border-t border-gray-200 bg-white shadow-lg`}
                >
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                className="flex items-center flex-1 min-w-0 p-2 space-x-3 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                                        <span className="text-sm font-medium text-white">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-900 truncate">
                                        {user.name}
                                    </div>
                                    <div className="text-xs text-gray-500 truncate">
                                        {user.email}
                                    </div>
                                </div>
                            </ResponsiveNavLink>
                            {/* Compact Logout Button */}
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="flex items-center justify-center w-32 h-8 text-red-600 transition-colors duration-200 border border-red-200 rounded-full bg-red-50 hover:bg-red-100 group"
                                title="Logout"
                            >
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                Logout
                            </ResponsiveNavLink>
                        </div>
                    </div>

                    {/* Navigation Menu - Grid Layout (Original Style) */}
                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-2">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("master-user")}
                                active={route().current("master-user")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Master User
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("master-warehouse")}
                                active={route().current("master-warehouse")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Master Warehouse
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("master-supplier")}
                                active={route().current("master-supplier")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Master Supplier
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("master-product")}
                                active={route().current("master-product")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Master Product
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("manage-warehouse")}
                                active={route().current("manage-warehouse")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Manage Warehouse
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("incoming-good")}
                                active={route().current("incoming-good")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Incoming Good
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("stock-movement")}
                                active={route().current("stock-movement")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Stock Movement
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("stock-log")}
                                active={route().current("stock-log")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Stock Log
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("material-request")}
                                active={route().current("material-request")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Material Request
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("outgoing-good")}
                                active={route().current("outgoing-good")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Outgoing Good
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("return-transaction")}
                                active={route().current("return-transaction")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Return Transaction
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("stock-opname")}
                                active={route().current("stock-opname")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Stock Opname
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("report")}
                                active={route().current("report")}
                                className="block w-full px-2 py-3 text-sm font-medium text-center transition-colors duration-200 rounded-lg"
                            >
                                Report
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Area - Flexible Height */}
            <div className="flex flex-1 min-h-0">
                {/* Sidebar - Hidden on mobile, visible on desktop */}
                <div className="flex-shrink-0 hidden sm:block">
                    <Sidebar />
                </div>

                {/* Main Content Area - Scrollable */}
                <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="h-full overflow-auto">
                        <div className="p-3 sm:p-6">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
