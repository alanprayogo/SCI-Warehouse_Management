import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Stock Log Page" />

            <div className="w-full h-full p-6 text-gray-900 bg-white rounded-lg shadow">
                Stock Log Page
            </div>
        </AuthenticatedLayout>
    );
}
