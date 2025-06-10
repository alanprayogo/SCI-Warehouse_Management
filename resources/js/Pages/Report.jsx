import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Report" />

            <div className="w-full h-full p-6 text-gray-900 bg-white rounded-lg shadow">
                Report Page
            </div>
        </AuthenticatedLayout>
    );
}
