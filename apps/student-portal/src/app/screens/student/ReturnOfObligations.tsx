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
  Clock,
  AlertCircle,
  CheckCircle2,
  Info,
  Calendar,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export default function ReturnOfObligations() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
    { icon: GraduationCap, label: "Scholarships", href: "/student/scholarships" },
    { icon: FileText, label: "My Applications", href: "#" },
    { icon: Upload, label: "Document Upload", href: "#" },
    { icon: CheckSquare, label: "Obligations", href: "/student/obligations", active: true },
    { icon: User, label: "Profile", href: "#" },
  ];

  const activeObligations = [
    {
      id: 1,
      title: "Community Service - Library",
      description: "Assist in library cataloging and organization",
      completed: 4,
      required: 10,
      unit: "hrs",
      deadline: "Dec 15, 2025",
      status: "in-progress",
      daysLeft: 45,
    },
    {
      id: 2,
      title: "University Event - Orientation",
      description: "Volunteer for freshmen orientation program",
      completed: 0,
      required: 8,
      unit: "hrs",
      deadline: "Nov 30, 2025",
      status: "pending",
      daysLeft: 30,
    },
    {
      id: 3,
      title: "Department Service",
      description: "Assist in department administrative tasks",
      completed: 0,
      required: 6,
      unit: "hrs",
      deadline: "Dec 20, 2025",
      status: "not-started",
      daysLeft: 50,
    },
  ];

  const completedObligations = [
    {
      id: 4,
      title: "Campus Clean-up Drive",
      completed: 5,
      required: 5,
      unit: "hrs",
      completedDate: "Oct 15, 2025",
    },
  ];

  const overdueObligations = [
    {
      id: 5,
      title: "Tutorial Service",
      completed: 2,
      required: 5,
      unit: "hrs",
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

        {/* Return of Obligations Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  My Return of Obligations
                  <button className="p-1 hover:bg-secondary rounded-full transition-colors">
                    <Info className="w-5 h-5 text-muted-foreground" />
                  </button>
                </h1>
                <p className="text-muted-foreground">
                  Track and complete your scholarship obligations
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="bg-white border border-border">
              <TabsTrigger value="active" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Active
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Completed
              </TabsTrigger>
              <TabsTrigger value="overdue" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Overdue
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left: Summary */}
                <div className="lg:col-span-2">
                  <Card className="sticky top-8">
                    <CardHeader className="pb-3">
                      <CardTitle>TES Scholarship</CardTitle>
                      <CardDescription>Requirements Summary</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">GWA Requirement</p>
                          <p className="text-2xl font-semibold text-green-600">2.0</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Maintain at least 2.0 GWA per semester
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-foreground">Total Hours</p>
                          <p className="text-sm font-medium">4 / 24 hrs</p>
                        </div>
                        <Progress value={(4 / 24) * 100} className="h-3" />
                        <p className="text-xs text-muted-foreground">20 hours remaining</p>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-900">
                          <strong>Important:</strong> Complete all obligations before the end of
                          the semester to maintain your scholarship status.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right: Obligations List */}
                <div className="lg:col-span-3 space-y-4">
                  {activeObligations.map((obligation) => (
                    <Card key={obligation.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">{obligation.title}</CardTitle>
                            <CardDescription>{obligation.description}</CardDescription>
                          </div>
                          {obligation.status === "in-progress" ? (
                            <Badge className="bg-blue-500">In Progress</Badge>
                          ) : obligation.status === "pending" ? (
                            <Badge className="bg-orange-500">Pending</Badge>
                          ) : (
                            <Badge variant="outline">Not Started</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-muted-foreground">Progress</p>
                            <p className="text-sm font-medium">
                              {obligation.completed} / {obligation.required} {obligation.unit}
                            </p>
                          </div>
                          <Progress
                            value={(obligation.completed / obligation.required) * 100}
                            className="h-2"
                          />
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Deadline:</span>
                            <span className="font-medium">{obligation.deadline}</span>
                            <Badge
                              variant="outline"
                              className={
                                obligation.daysLeft <= 30
                                  ? "border-orange-500 text-orange-500"
                                  : "border-green-500 text-green-500"
                              }
                            >
                              {obligation.daysLeft} days left
                            </Badge>
                          </div>

                          <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
                            <DialogTrigger asChild>
                              <Button size="sm" className="bg-accent hover:bg-accent/90">
                                <Upload className="w-4 h-4 mr-2" />
                                Upload Proof
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Upload Proof of Completion</DialogTitle>
                                <DialogDescription>
                                  Upload documents or certificates for: {obligation.title}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-secondary transition-colors cursor-pointer">
                                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                                  <p className="text-sm font-medium text-foreground mb-1">
                                    Drag and drop your file here
                                  </p>
                                  <p className="text-xs text-muted-foreground mb-3">
                                    or click to browse
                                  </p>
                                  <Button variant="outline" size="sm">
                                    Select File
                                  </Button>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  Accepted formats: PDF, JPG, PNG (Max 5MB)
                                </p>
                                <div className="flex gap-2 pt-2">
                                  <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => setUploadModalOpen(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                                    Submit
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedObligations.map((obligation) => (
                <Card key={obligation.id} className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{obligation.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            Completed: {obligation.completedDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-700">
                          {obligation.completed} / {obligation.required} {obligation.unit}
                        </p>
                        <Badge className="bg-green-600 mt-1">Verified</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="overdue" className="space-y-4">
              {overdueObligations.map((obligation) => (
                <Card key={obligation.id} className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{obligation.title}</h4>
                          <p className="text-sm text-red-600 font-medium">
                            {obligation.daysOverdue} days overdue
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Deadline was: {obligation.deadline}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-red-700">
                          {obligation.completed} / {obligation.required} {obligation.unit}
                        </p>
                        <Button size="sm" variant="outline" className="mt-2 border-red-500 text-red-500">
                          Contact OSFA
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
