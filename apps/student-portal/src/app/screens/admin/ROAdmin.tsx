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
  Eye,
  Check,
  X,
  UserCircle2,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function ROAdmin() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: FileText, label: "Applications", href: "/admin/applications" },
    { icon: Users, label: "Scholars", href: "/admin/scholars" },
    { icon: CheckSquare, label: "Obligations", href: "/admin/obligations", active: true },
    { icon: BarChart3, label: "Reports", href: "/admin/reports" },
    { icon: Megaphone, label: "Announcements", href: "/admin/announcements" },
    { icon: UserCog, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const pendingROs = [
    {
      id: 1,
      student: "Juan Dela Cruz",
      studentId: "2025-001",
      scholarship: "TES",
      obligation: "Community Service - Library",
      document: "certificate_library.pdf",
      submitted: "Oct 28, 2025",
      department: "Library",
      hours: "10 hrs",
    },
    {
      id: 2,
      student: "Maria Santos",
      studentId: "2025-002",
      scholarship: "TDP",
      obligation: "University Event - Orientation",
      document: "orientation_certificate.pdf",
      submitted: "Oct 27, 2025",
      department: "Student Affairs",
      hours: "8 hrs",
    },
    {
      id: 3,
      student: "Ana Reyes",
      studentId: "2025-003",
      scholarship: "TES",
      obligation: "Department Service",
      document: "service_completion.pdf",
      submitted: "Oct 26, 2025",
      department: "IT Department",
      hours: "6 hrs",
    },
  ];

  const verifiedROs = [
    {
      id: 4,
      student: "Pedro Garcia",
      studentId: "2025-004",
      scholarship: "Private",
      obligation: "Campus Clean-up Drive",
      verified: "Oct 25, 2025",
      verifiedBy: "Ms. Dela Cruz",
      hours: "5 hrs",
    },
    {
      id: 5,
      student: "Elena Lopez",
      studentId: "2025-005",
      scholarship: "TES",
      obligation: "Tutorial Service",
      verified: "Oct 24, 2025",
      verifiedBy: "Mr. Santos",
      hours: "4 hrs",
    },
  ];

  const overdueROs = [
    {
      id: 6,
      student: "Carlos Mendoza",
      studentId: "2025-006",
      scholarship: "TDP",
      obligation: "Department Service",
      deadline: "Oct 20, 2025",
      daysOverdue: 5,
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
                RO Verification Queue
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

        {/* RO Admin Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Tabs */}
          <Tabs defaultValue="pending" className="space-y-6">
            <TabsList className="bg-white border border-border">
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Pending Verification ({pendingROs.length})
              </TabsTrigger>
              <TabsTrigger
                value="verified"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Verified ({verifiedROs.length})
              </TabsTrigger>
              <TabsTrigger
                value="overdue"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Overdue ({overdueROs.length})
              </TabsTrigger>
            </TabsList>

            {/* Pending Verification */}
            <TabsContent value="pending" className="space-y-4">
              <div className="mb-4 flex gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                    <SelectItem value="it">IT Department</SelectItem>
                    <SelectItem value="student-affairs">Student Affairs</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by Scholarship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Scholarships</SelectItem>
                    <SelectItem value="tes">TES</SelectItem>
                    <SelectItem value="tdp">TDP</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {pendingROs.map((ro) => (
                <Card key={ro.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <UserCircle2 className="w-7 h-7 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-semibold text-foreground text-lg">
                                {ro.student}
                              </h4>
                              <Badge variant="outline">{ro.studentId}</Badge>
                              <Badge className="bg-accent text-white">{ro.scholarship}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Obligation</p>
                                <p className="font-medium text-foreground">{ro.obligation}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Hours</p>
                                <p className="font-medium text-foreground">{ro.hours}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Submitted Document</p>
                                <p className="font-medium text-foreground">{ro.document}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Submitted Date</p>
                                <p className="font-medium text-foreground">{ro.submitted}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Department</p>
                                <p className="font-medium text-foreground">{ro.department}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        <Button size="sm" variant="outline" className="gap-2">
                          <Eye className="w-4 h-4" />
                          View Document
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                          <Check className="w-4 h-4" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 gap-2">
                          <X className="w-4 h-4" />
                          Reject
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2">
                          <UserCircle2 className="w-4 h-4" />
                          Assign to Dept Head
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Department Head View Simulation */}
              <Card className="border-2 border-dashed border-blue-300 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <UserCircle2 className="w-5 h-5" />
                    Department Head View
                  </CardTitle>
                  <CardDescription className="text-blue-700">
                    Filtered view: Pending my approval
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800 mb-4">
                    As a department head, you would only see obligations assigned to your
                    department for verification.
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
                    <Check className="w-4 h-4" />
                    Verify All
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Verified */}
            <TabsContent value="verified" className="space-y-4">
              {verifiedROs.map((ro) => (
                <Card key={ro.id} className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Student</p>
                            <p className="font-medium text-foreground">{ro.student}</p>
                            <p className="text-xs text-muted-foreground">{ro.studentId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Obligation</p>
                            <p className="font-medium text-foreground">{ro.obligation}</p>
                            <p className="text-xs text-muted-foreground">{ro.hours}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Verified</p>
                            <p className="font-medium text-foreground">{ro.verified}</p>
                            <p className="text-xs text-muted-foreground">By: {ro.verifiedBy}</p>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-600 text-white">Verified</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Overdue */}
            <TabsContent value="overdue" className="space-y-4">
              {overdueROs.map((ro) => (
                <Card key={ro.id} className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <X className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Student</p>
                            <p className="font-medium text-foreground">{ro.student}</p>
                            <p className="text-xs text-muted-foreground">{ro.studentId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Obligation</p>
                            <p className="font-medium text-foreground">{ro.obligation}</p>
                            <Badge className="bg-red-600 text-white mt-1">
                              {ro.scholarship}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Deadline</p>
                            <p className="font-medium text-red-600">{ro.deadline}</p>
                            <p className="text-xs text-red-600 font-medium">
                              {ro.daysOverdue} days overdue
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline" className="border-red-500 text-red-500">
                          Send Reminder
                        </Button>
                        <Button size="sm" variant="outline">
                          Contact Student
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
