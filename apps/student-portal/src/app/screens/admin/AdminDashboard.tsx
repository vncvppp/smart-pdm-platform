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
  TrendingUp,
  TrendingDown,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard", active: true },
    { icon: FileText, label: "Applications", href: "/admin/applications" },
    { icon: Users, label: "Scholars", href: "/admin/scholars" },
    { icon: CheckSquare, label: "Obligations", href: "/admin/obligations" },
    { icon: BarChart3, label: "Reports", href: "/admin/reports" },
    { icon: Megaphone, label: "Announcements", href: "/admin/announcements" },
    { icon: UserCog, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const applicationData = [
    { program: "TES", applications: 145 },
    { program: "TDP", applications: 89 },
    { program: "Private", applications: 56 },
    { program: "DOST-SEI", applications: 34 },
  ];

  const scholarsByCollege = [
    { college: "Engineering", scholars: 320, color: "#1E3A8A" },
    { college: "Education", scholars: 245, color: "#0D9488" },
    { college: "Business", scholars: 198, color: "#10B981" },
    { college: "Arts & Sciences", scholars: 287, color: "#F59E0B" },
    { college: "Technology", scholars: 230, color: "#3B82F6" },
  ];

  const recentApplications = [
    {
      id: "2025-001",
      name: "Dela Cruz, Juan",
      program: "TES",
      submitted: "Oct 20, 2025",
      status: "Documents Ready",
      statusColor: "bg-green-500",
    },
    {
      id: "2025-002",
      name: "Santos, Maria",
      program: "TDP",
      submitted: "Oct 21, 2025",
      status: "Missing Docs",
      statusColor: "bg-red-500",
    },
    {
      id: "2025-003",
      name: "Reyes, Ana",
      program: "TES",
      submitted: "Oct 19, 2025",
      status: "Under Review",
      statusColor: "bg-orange-500",
    },
    {
      id: "2025-004",
      name: "Garcia, Pedro",
      program: "Private",
      submitted: "Oct 22, 2025",
      status: "Approved",
      statusColor: "bg-blue-500",
    },
    {
      id: "2025-005",
      name: "Lopez, Elena",
      program: "TES",
      submitted: "Oct 18, 2025",
      status: "Documents Ready",
      statusColor: "bg-green-500",
    },
  ];

  const upcomingDeadlines = [
    { title: "TES Application Deadline", date: "Oct 30, 2025", daysLeft: 5, color: "red" },
    { title: "CHED Report Submission", date: "Nov 5, 2025", daysLeft: 11, color: "orange" },
    { title: "Semester RO Verification", date: "Nov 15, 2025", daysLeft: 21, color: "blue" },
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
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white border-b border-border">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                AY 2025-2026, 1st Semester
              </Button>
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

        {/* Dashboard Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground mb-2">
              Good morning, Ms. Dela Cruz
            </h1>
            <p className="text-muted-foreground">Here's your scholarship system overview</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Pending Applications</CardDescription>
                <CardTitle className="text-3xl text-orange-500 flex items-baseline gap-2">
                  24
                  <span className="text-sm font-normal text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Requires review</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Active Scholars</CardDescription>
                <CardTitle className="text-3xl text-blue-600">1,280</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Currently enrolled</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>TES Beneficiaries</CardDescription>
                <CardTitle className="text-3xl text-green-600 flex items-baseline gap-2">
                  348
                  <span className="text-sm font-normal text-muted-foreground flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    -5%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">This semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Pending RO Verifications</CardDescription>
                <CardTitle className="text-3xl text-red-500">16</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Awaiting approval</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Applications by Program</CardTitle>
                <CardDescription>Current academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={applicationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="program" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="applications" fill="#1E3A8A" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Scholars by College/Department</CardTitle>
                <CardDescription>Distribution overview</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={scholarsByCollege}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ college, percent }) =>
                        `${college} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="scholars"
                    >
                      {scholarsByCollege.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Applications */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Latest submission queue</CardDescription>
                  </div>
                  <Link to="/admin/applications">
                    <Button variant="outline" size="sm" className="gap-2">
                      View All
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.name}</TableCell>
                        <TableCell>{app.id}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{app.program}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{app.submitted}</TableCell>
                        <TableCell>
                          <Badge className={`${app.statusColor} text-white`}>{app.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Important dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${
                        deadline.color === "red"
                          ? "bg-red-50 border-red-500"
                          : deadline.color === "orange"
                          ? "bg-orange-50 border-orange-500"
                          : "bg-blue-50 border-blue-500"
                      }`}
                    >
                      <p className="font-medium text-foreground text-sm mb-1">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground mb-2">{deadline.date}</p>
                      <Badge
                        variant="outline"
                        className={`${
                          deadline.color === "red"
                            ? "border-red-500 text-red-500"
                            : deadline.color === "orange"
                            ? "border-orange-500 text-orange-500"
                            : "border-blue-500 text-blue-500"
                        } text-xs`}
                      >
                        {deadline.daysLeft} days left
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link to="/admin/applications">
                  <Button variant="outline" className="w-full h-20 flex-col gap-2">
                    <FileText className="w-6 h-6" />
                    Review Applications
                  </Button>
                </Link>
                <Link to="/admin/reports">
                  <Button variant="outline" className="w-full h-20 flex-col gap-2">
                    <BarChart3 className="w-6 h-6" />
                    Generate Report
                  </Button>
                </Link>
                <Link to="/admin/announcements">
                  <Button variant="outline" className="w-full h-20 flex-col gap-2">
                    <Megaphone className="w-6 h-6" />
                    Post Announcement
                  </Button>
                </Link>
                <Link to="/admin/scholars">
                  <Button variant="outline" className="w-full h-20 flex-col gap-2">
                    <Users className="w-6 h-6" />
                    View Scholars
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
