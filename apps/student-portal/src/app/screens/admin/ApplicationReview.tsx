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
  Filter,
  Download,
  Check,
  X,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";
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

export default function ApplicationReview() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: FileText, label: "Applications", href: "/admin/applications", active: true },
    { icon: Users, label: "Scholars", href: "/admin/scholars" },
    { icon: CheckSquare, label: "Obligations", href: "/admin/obligations" },
    { icon: BarChart3, label: "Reports", href: "/admin/reports" },
    { icon: Megaphone, label: "Announcements", href: "/admin/announcements" },
    { icon: UserCog, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const applications = [
    {
      id: "2025-001",
      name: "Dela Cruz, Juan",
      studentId: "2025-001",
      program: "TES",
      submitted: "Oct 20, 2025",
      status: "Documents Ready",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-002",
      name: "Santos, Maria",
      studentId: "2025-002",
      program: "TDP",
      submitted: "Oct 21, 2025",
      status: "Missing Docs",
      statusColor: "bg-red-500",
    },
    {
      id: "2025-003",
      name: "Reyes, Ana",
      studentId: "2025-003",
      program: "TES",
      submitted: "Oct 19, 2025",
      status: "Under Review",
      statusColor: "bg-orange-500",
    },
    {
      id: "2025-004",
      name: "Garcia, Pedro",
      studentId: "2025-004",
      program: "Private",
      submitted: "Oct 22, 2025",
      status: "Approved",
      statusColor: "bg-blue-500",
    },
    {
      id: "2025-005",
      name: "Lopez, Elena",
      studentId: "2025-005",
      program: "TES",
      submitted: "Oct 18, 2025",
      status: "Documents Ready",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-006",
      name: "Mendoza, Carlos",
      studentId: "2025-006",
      program: "TDP",
      submitted: "Oct 23, 2025",
      status: "Under Review",
      statusColor: "bg-orange-500",
    },
    {
      id: "2025-007",
      name: "Torres, Isabella",
      studentId: "2025-007",
      program: "TES",
      submitted: "Oct 17, 2025",
      status: "Documents Ready",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-008",
      name: "Ramos, Miguel",
      studentId: "2025-008",
      program: "DOST-SEI",
      submitted: "Oct 24, 2025",
      status: "Missing Docs",
      statusColor: "bg-red-500",
    },
  ];

  const toggleSelection = (id: string) => {
    setSelectedApplications((prev) =>
      prev.includes(id) ? prev.filter((appId) => appId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedApplications.length === applications.length) {
      setSelectedApplications([]);
    } else {
      setSelectedApplications(applications.map((app) => app.id));
    }
  };

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
                Review Applications{" "}
                <span className="text-orange-500">({applications.length} pending)</span>
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

        {/* Application Review Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or Student ID..."
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
                  <SelectItem value="ready">Documents Ready</SelectItem>
                  <SelectItem value="missing">Missing Docs</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Advanced
              </Button>

              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedApplications.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
              <p className="text-sm font-medium text-blue-900">
                {selectedApplications.length} application(s) selected
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 gap-2">
                  <Check className="w-4 h-4" />
                  Approve Selected
                </Button>
                <Button size="sm" variant="outline" className="gap-2">
                  Request Changes
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  onClick={() => setSelectedApplications([])}
                >
                  Clear Selection
                </Button>
              </div>
            </div>
          )}

          {/* Applications Table */}
          <div className="bg-white rounded-lg shadow-sm border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedApplications.length === applications.length}
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="font-semibold">Student Name</TableHead>
                  <TableHead className="font-semibold">Student ID</TableHead>
                  <TableHead className="font-semibold">Program</TableHead>
                  <TableHead className="font-semibold">Submitted</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow
                    key={app.id}
                    className={`hover:bg-secondary ${
                      selectedApplications.includes(app.id) ? "bg-blue-50" : ""
                    }`}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedApplications.includes(app.id)}
                        onCheckedChange={() => toggleSelection(app.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{app.name}</TableCell>
                    <TableCell className="text-muted-foreground">{app.studentId}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{app.program}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{app.submitted}</TableCell>
                    <TableCell>
                      <Badge className={`${app.statusColor} text-white`}>{app.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Link to={`/admin/verification/${app.id}`}>
                        <Button variant="outline" size="sm">
                          VIEW
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
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
              10
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
