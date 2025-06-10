import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Outgoing Goods" />

            <div className="w-full h-full p-6 text-gray-900 bg-white rounded-lg shadow">
                Outgoing Good Page
            </div>
        </AuthenticatedLayout>
    );
}
