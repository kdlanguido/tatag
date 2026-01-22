import {
    Book,
    BookUser,
    Calendar,
    Home,
    IdCard,
    Notebook,
    Trophy,
    UserLock,
    Users,
} from "lucide-react"

export const logoList = [
    {
        text: "tatag",
        image: "/assets/logo.png"
    },
    {
        text: "morningsun",
        image: "/assets/morning.png"
    },
    {
        text: "katuparan",
        image: "/assets/katuparan.png"
    },
    {
        text: "este",
        image: "/assets/este.png"
    },
]

export const regionList = [
    { region: "ncr", label: "National Capital Region (NCR)" },
    { region: "car", label: "Cordillera Administrative Region (CAR)" },
    { region: "region-i", label: "Region I (Ilocos Region)" },
    { region: "region-ii", label: "Region II (Cagayan Valley)" },
    { region: "region-iii", label: "Region III (Central Luzon)" },
    { region: "region-iv-a", label: "Region IV-A (CALABARZON)" },
    { region: "region-iv-b", label: "Region IV-B (MIMAROPA)" },
    { region: "region-v", label: "Region V (Bicol Region)" },
    { region: "region-vi", label: "Region VI (Western Visayas)" },
    { region: "region-vii", label: "Region VII (Central Visayas)" },
    { region: "region-viii", label: "Region VIII (Eastern Visayas)" },
    { region: "region-ix", label: "Region IX (Zamboanga Peninsula)" },
    { region: "region-x", label: "Region X (Northern Mindanao)" },
    { region: "region-xi", label: "Region XI (Davao Region)" },
    { region: "region-xii", label: "Region XII (SOCCSKSARGEN)" },
    { region: "region-xiii", label: "Region XIII (Caraga)" },
    { region: "barmm", label: "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)" },
];


export const statusMap = {
    denied: { label: "Denied", color: "bg-red-600" },
    new: { label: "New Applicant", color: "bg-orange-500" },
    accepted: { label: "Applicant", color: "bg-yellow-500" },
    active: { label: "Active", color: "bg-green-600" }
}

export const appSidebarNav = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: Home,
            items: []

        },
        {
            title: "Training Book",
            url: "#",
            icon: Notebook,
            items: [
                {
                    title: "Orientation",
                    url: "/training/orientation",
                },
                {
                    title: "Hook Training",
                    url: "/training/hook",
                },
                {
                    title: "Top Roll Training",
                    url: "/training/toproll",
                },
                {
                    title: "Prueba De Fuerza",
                    url: "/training/pdf",
                },
                {
                    title: "Welcome Rites",
                    url: "/training/wr",
                },
            ],
        },
        {
            title: "Membership",
            url: "#",
            icon: IdCard,
            items: [
                {
                    title: "Member Information",
                    url: "/membership",
                },
                // {
                //     title: "Membership ID",
                //     url: "/membership/virtual-id",
                // },
                {
                    title: "Membership Requests",
                    url: "/membership/approvals",
                },

            ]

        },
        {
            title: "Chapters",
            url: "/chapters",
            icon: BookUser,
            items: []
        },
        {
            title: "Events",
            url: "#",
            icon: Calendar,
            items: []
        },
        {
            title: "Rankings",
            url: "#",
            icon: Trophy,
            items: []
        },
    ],
    navAdmin: [
        {
            title: "Admin Dashboard",
            url: "/admin/dashboard",
            icon: UserLock,
            items: [],
        },
        {
            title: "Manage Members",
            url: "#",
            icon: Users,
            items: [
                {
                    title: "Members Requests",
                    url: "/admin/members/approvals",
                },
            ],
        },
        {
            title: "Manage Chapters",
            url: "#",
            icon: BookUser,
            items: [
                {
                    title: "Chapter Settings",
                    url: "/admin/chapters",
                },
                {
                    title: "Applicants List",
                    url: "/admin/applicants",
                },
            ],
        },

        // {
        //     title: "Manage Trainings",
        //     url: "/admin/trainings",
        //     icon: Notebook,
        //     items: [],
        // },
    ],
}