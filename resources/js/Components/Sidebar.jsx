// resources/js/Components/Sidebar.jsx
import { Home, User, Warehouse, Factory, Package, ClipboardList, Truck, Ship, Combine, Logs, Mail, ClipboardCheck, Undo2, ChartPie, UserLock, ChartBarStacked } from "lucide-react";

export default function Sidebar() {
    const menuItems = [
        {
            label: "Dashboard",
            route: "dashboard",
            icon: <Home className="w-4 h-4" />,
        },
        {
            label: "Master User",
            route: "master-user",
            icon: <User className="w-4 h-4" />,
        },
        {
            label: "Master Warehouse",
            route: "master-warehouse",
            icon: <Warehouse className="w-4 h-4" />,
        },
        {
            label: "Master Supplier",
            route: "master-supplier",
            icon: <Factory className="w-4 h-4" />,
        },
        {
            label: "Master Product",
            route: "master-product",
            icon: <Package className="w-4 h-4" />,
        },
        {
            label: "Manage Warehouse",
            route: "manage-warehouse",
            icon: <ClipboardList className="w-4 h-4" />,
        },
        {
            label: "Incoming Good",
            route: "incoming-good",
            icon: <Truck className="w-4 h-4" />,
        },
        {
            label: "Stock Movement",
            route: "stock-movement",
            icon: <Combine className="w-4 h-4" />,
        },
        {
            label: "Stock Log",
            route: "stock-log",
            icon: <Logs className="w-4 h-4" />,
        },
        {
            label: "Material Request",
            route: "material-request",
            icon: <Mail className="w-4 h-4" />,
        },
        {
            label: "Outgoing Good",
            route: "outgoing-good",
            icon: <Ship className="w-4 h-4" />,
        },
        {
            label: "Return Transaction",
            route: "return-transaction",
            icon: <Undo2 className="w-4 h-4" />,
        },
        {
            label: "Stock Opname",
            route: "stock-opname",
            icon: <ClipboardCheck className="w-4 h-4" />,
        },
        {
            label: "Report",
            route: "report",
            icon: <ChartPie className="w-4 h-4" />,
        },
    ];

    return (
        <aside className="flex-col hidden h-screen bg-white border-r shadow-sm md:flex">
            <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                {menuItems.map((item) => (
                    <a
                        key={item.route}
                        href={route(item.route)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                            route().current(item.route)
                                ? "bg-blue-100 text-blue-700 font-semibold"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        {item.icon}
                        {item.label}
                    </a>
                ))}
            </nav>
        </aside>
    );
}
