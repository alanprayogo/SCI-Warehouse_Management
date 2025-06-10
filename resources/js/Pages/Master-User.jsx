import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Master User" />

            <div className="w-full h-full p-6 text-gray-900 bg-white rounded-lg shadow">
                Master User Page
            </div>
        </AuthenticatedLayout>
    );
}
