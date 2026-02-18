import { Link } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  CheckSquare,
  BarChart3,
  Megaphone,
  UserCog,
  Settings,
  LogOut,
  GraduationCap,
  Search,
  Download,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function ScholarMonitoring() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: FileText, label: "Applications", href: "/admin/applications" },
    { icon: Users, label: "Scholars", href: "/admin/scholars", active: true },
    { icon: CheckSquare, label: "Obligations", href: "/admin/obligations" },
    { icon: BarChart3, label: "Reports", href: "/admin/reports" },
    { icon: Megaphone, label: "Announcements", href: "/admin/announcements" },
    { icon: UserCog, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const scholars = [
    {
      id: "2025-001",
      name: "Dela Cruz, Juan",
      scholarship: "TES",
      gwa: 1.85,
      status: "Active",
      roProgress: "75%",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-002",
      name: "Santos, Maria",
      scholarship: "TDP",
      gwa: 1.92,
      status: "Active",
      roProgress: "60%",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-003",
      name: "Reyes, Ana",
      scholarship: "TES",
      gwa: 1.78,
      status: "Active",
      roProgress: "90%",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-004",
      name: "Garcia, Pedro",
      scholarship: "Private",
      gwa: 2.15,
      status: "Warning",
      roProgress: "40%",
      statusColor: "bg-red-500",
    },
    {
      id: "2025-005",
      name: "Lopez, Elena",
      scholarship: "TES",
      gwa: 1.95,
      status: "Active",
      roProgress: "85%",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-006",
      name: "Mendoza, Carlos",
      scholarship: "TDP",
      gwa: 2.05,
      status: "Active",
      roProgress: "50%",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-007",
      name: "Torres, Isabella",
      scholarship: "DOST-SEI",
      gwa: 1.68,
      status: "Active",
      roProgress: "100%",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-008",
      name: "Ramos, Miguel",
      scholarship: "TES",
      gwa: 2.25,
      status: "At Risk",
      roProgress: "30%",
      statusColor: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-border transition-all duration-300 ${
          sidebarCollapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >
        <div className="p-6 border-b border-border">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-primary">SMART-PDM</h1>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            )}
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-red-50 w-full transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white border-b border-border">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Active Scholars <span className="text-accent">- 1,280</span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Ms. Carmelita Dela Cruz</p>
                <p className="text-xs text-muted-foreground">OSFA Director</p>
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-medium">
                CD
              </div>
            </div>
          </div>
        </header>

        {/* Scholar Monitoring Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by ID, name, or scholarship..."
                  className="pl-10 h-10"
                />
              </div>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="tes">TES</SelectItem>
                  <SelectItem value="tdp">TDP</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="dost">DOST-SEI</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="at-risk">At Risk</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export Master List
              </Button>
            </div>
          </div>

          {/* Alert Banner for At-Risk Scholars */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-orange-900">
                2 scholars are at risk due to low GWA or incomplete obligations
              </p>
              <p className="text-xs text-orange-700 mt-1">
                Immediate action required to maintain scholarship eligibility
              </p>
            </div>
            <Button size="sm" variant="outline" className="border-orange-500 text-orange-500">
              View Details
            </Button>
          </div>

          {/* Scholars Table */}
          <div className="bg-white rounded-lg shadow-sm border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="font-semibold">Student ID</TableHead>
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Scholarship</TableHead>
                  <TableHead className="font-semibold">GWA</TableHead>
                  <TableHead className="font-semibold">RO Progress</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scholars.map((scholar) => (
                  <TableRow
                    key={scholar.id}
                    className={`hover:bg-secondary ${
                      scholar.gwa > 2.0 ? "bg-red-50" : ""
                    }`}
                  >
                    <TableCell className="font-medium">{scholar.id}</TableCell>
                    <TableCell>{scholar.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{scholar.scholarship}</Badge>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          scholar.gwa > 2.0
                            ? "text-red-600"
                            : scholar.gwa < 1.9
                            ? "text-green-600"
                            : "text-foreground"
                        }`}
                      >
                        {scholar.gwa.toFixed(2)}
                        {scholar.gwa > 2.0 && (
                          <AlertCircle className="w-4 h-4 inline ml-1 text-red-600" />
                        )}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              parseInt(scholar.roProgress) >= 75
                                ? "bg-green-500"
                                : parseInt(scholar.roProgress) >= 50
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            }`}
                            style={{ width: scholar.roProgress }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {scholar.roProgress}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${scholar.statusColor} text-white`}>
                        {scholar.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="gap-1">
                        View Profile
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-muted-foreground">
              Showing 8 of 1,280 scholars
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button size="sm" className="bg-primary">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                ...
              </Button>
              <Button variant="outline" size="sm">
                160
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
