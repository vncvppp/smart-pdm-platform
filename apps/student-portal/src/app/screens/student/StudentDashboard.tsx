import { Link } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  FileText,
  Upload,
  CheckSquare,
  User,
  LogOut,
  Search,
  Bell,
  ChevronRight,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

export default function StudentDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard", active: true },
    { icon: GraduationCap, label: "Scholarships", href: "/student/scholarships" },
    { icon: FileText, label: "My Applications", href: "#" },
    { icon: Upload, label: "Document Upload", href: "#" },
    { icon: CheckSquare, label: "Obligations", href: "/student/obligations" },
    { icon: User, label: "Profile", href: "#" },
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
          <Link to="/student/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-primary">SMART-PDM</h1>
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
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search scholarships, documents..."
                  className="pl-10 h-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">Maria Santos</p>
                  <p className="text-xs text-muted-foreground">Student</p>
                </div>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-medium">
                  MS
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Welcome Card */}
          <Card className="mb-8 bg-gradient-to-r from-primary to-blue-700 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Welcome back, Maria!</CardTitle>
              <CardDescription className="text-blue-100">
                Your TES application is 60% complete
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Progress value={60} className="h-3 bg-blue-900" />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-blue-100">3 out of 5 steps completed</p>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-blue-50"
                  >
                    Continue Application <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Active Applications</CardDescription>
                <CardTitle className="text-3xl text-primary">2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  In progress
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Upcoming Deadlines</CardDescription>
                <CardTitle className="text-3xl text-orange-500">3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Next: Oct 30, 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Pending Obligations</CardDescription>
                <CardTitle className="text-3xl text-red-500">1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* My Active Scholarships */}
            <Card>
              <CardHeader>
                <CardTitle>My Active Scholarships</CardTitle>
                <CardDescription>Currently enrolled programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Tertiary Education Subsidy
                        </p>
                        <p className="text-sm text-muted-foreground">CHED-UNIFAST</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Tulong Dunong Program
                        </p>
                        <p className="text-sm text-muted-foreground">PDM Scholarship</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Announcements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>Latest updates from OSFA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <p className="font-medium text-foreground text-sm">
                      TES Deadline Extended
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Application deadline has been extended to November 15, 2025.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Oct 25, 2025</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <p className="font-medium text-foreground text-sm">
                      New Scholarship: BC Packaging
                    </p>
                    <p className="text-sm text-muted-foreground">
                      New private scholarship available for qualified students.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Oct 20, 2025</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <p className="font-medium text-foreground text-sm">
                      RO Submission Reminder
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Complete your Return of Obligations before the deadline.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Oct 18, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Deadlines Calendar */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Mark your calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-500 text-white rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="w-5 h-5 mb-1" />
                    <p className="text-xs font-medium">Oct 30</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">TES Application Deadline</p>
                    <p className="text-sm text-muted-foreground">
                      Submit all required documents before 5:00 PM
                    </p>
                  </div>
                  <Badge variant="outline" className="border-red-500 text-red-500">
                    5 days left
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500 text-white rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="w-5 h-5 mb-1" />
                    <p className="text-xs font-medium">Nov 15</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Community Service Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Complete 10 hours of community service
                    </p>
                  </div>
                  <Badge variant="outline" className="border-orange-500 text-orange-500">
                    21 days left
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="w-5 h-5 mb-1" />
                    <p className="text-xs font-medium">Dec 20</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Semester GWA Submission</p>
                    <p className="text-sm text-muted-foreground">
                      Submit your grade report for verification
                    </p>
                  </div>
                  <Badge variant="outline" className="border-blue-500 text-blue-500">
                    56 days left
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
