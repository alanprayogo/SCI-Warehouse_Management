import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function MasterUser() {
    // Sample data untuk datatable
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "Admin",
            status: "Active",
            created_at: "2024-01-15"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            role: "User",
            status: "Active",
            created_at: "2024-01-20"
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            role: "User",
            status: "Inactive",
            created_at: "2024-02-01"
        },
        {
            id: 4,
            name: "Alice Wilson",
            email: "alice@example.com",
            role: "Moderator",
            status: "Active",
            created_at: "2024-02-10"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");

    // Filter users berdasarkan search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort users
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        
        if (sortDirection === "asc") {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
    });

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const handleAddUser = () => {
        // Implementasi untuk menambah user baru
        // Anda bisa redirect ke form add user atau buka modal
        alert("Add User functionality - implement sesuai kebutuhan Anda");
    };

    const handleEditUser = (userId) => {
        alert(`Edit user dengan ID: ${userId}`);
    };

    const handleDeleteUser = (userId) => {
        if (confirm("Apakah Anda yakin ingin menghapus user ini?")) {
            setUsers(users.filter(user => user.id !== userId));
        }
    };

    const getStatusBadge = (status) => {
        const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
        if (status === "Active") {
            return `${baseClasses} bg-green-100 text-green-800`;
        } else {
            return `${baseClasses} bg-red-100 text-red-800`;
        }
    };

    const getSortIcon = (field) => {
        if (sortField !== field) return "↕️";
        return sortDirection === "asc" ? "↑" : "↓";
    };

    return (
        <AuthenticatedLayout>
            <Head title="Master User" />

            <div className="w-full h-full p-3 bg-white rounded-lg shadow sm:p-6">
                {/* Header Section */}
                <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between sm:mb-6">
                    <div>
                        <h1 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
                            Master User
                        </h1>
                        <p className="text-sm text-gray-600 sm:text-base">
                            Kelola data pengguna dalam sistem
                        </p>
                    </div>
                    
                    {/* Add User Button */}
                    <button
                        onClick={handleAddUser}
                        className="flex items-center justify-center w-full gap-2 px-3 py-2 text-sm font-medium text-white transition duration-200 bg-blue-600 rounded-lg sm:px-4 hover:bg-blue-700 sm:text-base sm:w-auto"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add User
                    </button>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-4 sm:mb-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1 max-w-full sm:max-w-md">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Cari user..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full py-2 pl-8 pr-4 text-sm border border-gray-300 rounded-lg sm:pl-10 sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div className="text-xs text-center text-gray-600 sm:text-sm sm:text-right">
                            Total: {filteredUsers.length} user(s)
                        </div>
                    </div>
                </div>

                {/* DataTable Container dengan Scroll */}
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                    {/* Horizontal scroll container */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200" style={{ minWidth: '700px' }}>
                            <thead className="bg-gray-50">
                                <tr>
                                    <th 
                                        onClick={() => handleSort("name")}
                                        className="px-3 sm:px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100 min-w-[140px]"
                                    >
                                        <div className="flex items-center gap-1">
                                            Name {getSortIcon("name")}
                                        </div>
                                    </th>
                                    <th 
                                        onClick={() => handleSort("email")}
                                        className="px-3 sm:px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100 min-w-[180px]"
                                    >
                                        <div className="flex items-center gap-1">
                                            Email {getSortIcon("email")}
                                        </div>
                                    </th>
                                    <th 
                                        onClick={() => handleSort("role")}
                                        className="px-3 sm:px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100 min-w-[100px]"
                                    >
                                        <div className="flex items-center gap-1">
                                            Role {getSortIcon("role")}
                                        </div>
                                    </th>
                                    <th 
                                        onClick={() => handleSort("status")}
                                        className="px-3 sm:px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100 min-w-[100px]"
                                    >
                                        <div className="flex items-center gap-1">
                                            Status {getSortIcon("status")}
                                        </div>
                                    </th>
                                    <th 
                                        onClick={() => handleSort("created_at")}
                                        className="px-3 sm:px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100 min-w-[120px]"
                                    >
                                        <div className="flex items-center gap-1">
                                            Created At {getSortIcon("created_at")}
                                        </div>
                                    </th>
                                    <th className="px-3 sm:px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase min-w-[120px]">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sortedUsers.length > 0 ? (
                                    sortedUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.name}
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">
                                                    {user.email}
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {user.role}
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                                                <span className={getStatusBadge(user.status)}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="px-3 py-4 text-sm text-gray-600 sm:px-6 whitespace-nowrap">
                                                {user.created_at}
                                            </td>
                                            <td className="px-3 py-4 text-sm font-medium sm:px-6 whitespace-nowrap">
                                                <div className="flex gap-1 sm:gap-2">
                                                    <button
                                                        onClick={() => handleEditUser(user.id)}
                                                        className="px-2 py-1 text-xs text-indigo-600 transition duration-200 rounded hover:text-indigo-900 sm:text-sm hover:bg-indigo-50"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="px-2 py-1 text-xs text-red-600 transition duration-200 rounded hover:text-red-900 sm:text-sm hover:bg-red-50"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-3 py-4 text-center text-gray-500 sm:px-6">
                                            <div className="flex flex-col items-center py-6 sm:py-8">
                                                <svg className="w-8 h-8 mb-4 text-gray-300 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <p className="mb-1 text-base font-medium text-gray-900 sm:text-lg">No users found</p>
                                                <p className="text-sm text-gray-500 sm:text-base">Try adjusting your search criteria</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination info */}
                {sortedUsers.length > 0 && (
                    <div className="mt-3 text-xs text-center text-gray-600 sm:mt-4 sm:text-sm sm:text-left">
                        Showing {sortedUsers.length} of {users.length} users
                    </div>
                )}

                {/* Scroll indicator untuk mobile */}
                <div className="mt-2 text-xs text-center text-gray-400 sm:hidden">
                    ← Scroll untuk melihat lebih banyak kolom →
                </div>
            </div>
        </AuthenticatedLayout>
    );
}