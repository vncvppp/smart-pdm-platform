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
  Plus,
  Edit,
  Trash2,
  Send,
  Eye,
  Calendar,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export default function AnnouncementsManagement() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: FileText, label: "Applications", href: "/admin/applications" },
    { icon: Users, label: "Scholars", href: "/admin/scholars" },
    { icon: CheckSquare, label: "Obligations", href: "/admin/obligations" },
    { icon: BarChart3, label: "Reports", href: "/admin/reports" },
    { icon: Megaphone, label: "Announcements", href: "/admin/announcements", active: true },
    { icon: UserCog, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const announcements = [
    {
      id: 1,
      title: "TES Deadline Extended",
      content:
        "The application deadline for Tertiary Education Subsidy (TES) has been extended to November 15, 2025. All qualified students are encouraged to submit their applications.",
      status: "Published",
      statusColor: "bg-green-500",
      publishedDate: "Oct 25, 2025",
      audience: "All Students",
    },
    {
      id: 2,
      title: "New Scholarship: BC Packaging",
      content:
        "We are pleased to announce a new private scholarship from BC Packaging Corporation. Available for STEM students with at least 1.75 GWA.",
      status: "Draft",
      statusColor: "bg-gray-500",
      lastEdited: "Oct 24, 2025",
      audience: "New Applicants",
    },
    {
      id: 3,
      title: "RO Submission Reminder",
      content:
        "All scholarship recipients must complete their Return of Obligations before the end of the semester. Please submit proof of completion to the OSFA.",
      status: "Published",
      statusColor: "bg-green-500",
      publishedDate: "Oct 20, 2025",
      audience: "Active Scholars",
    },
    {
      id: 4,
      title: "OSFA Office Hours Update",
      content:
        "Effective November 1, OSFA office hours will be Monday to Friday, 8:00 AM to 5:00 PM. Saturday hours are now 8:00 AM to 12:00 PM only.",
      status: "Scheduled",
      statusColor: "bg-blue-500",
      scheduledDate: "Nov 1, 2025",
      audience: "All",
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
              <h1 className="text-2xl font-semibold text-foreground">Manage Announcements</h1>
            </div>

            <div className="flex items-center gap-3">
              <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-accent hover:bg-accent/90 gap-2">
                    <Plus className="w-4 h-4" />
                    Create New
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Announcement</DialogTitle>
                    <DialogDescription>
                      Compose and publish an announcement to students
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input id="title" placeholder="Enter announcement title" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        placeholder="Write your announcement here..."
                        rows={6}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="audience">Target Audience *</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Students</SelectItem>
                            <SelectItem value="applicants">New Applicants</SelectItem>
                            <SelectItem value="scholars">Active Scholars</SelectItem>
                            <SelectItem value="tes">TES Recipients Only</SelectItem>
                            <SelectItem value="tdp">TDP Recipients Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="schedule">Schedule Publish</Label>
                        <Input id="schedule" type="date" />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setCreateDialogOpen(false)}
                      >
                        Save as Draft
                      </Button>
                      <Button className="flex-1 bg-accent hover:bg-accent/90 gap-2">
                        <Send className="w-4 h-4" />
                        Publish Now
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">Ms. Carmelita Dela Cruz</p>
                  <p className="text-xs text-muted-foreground">OSFA Director</p>
                </div>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-medium">
                  CD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Announcements Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Announcements List */}
            <div className="lg:col-span-2 space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          <Badge className={`${announcement.statusColor} text-white`}>
                            {announcement.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-2 text-sm">
                          {announcement.status === "Published" && (
                            <>
                              <Calendar className="w-3 h-3" />
                              Published: {announcement.publishedDate}
                            </>
                          )}
                          {announcement.status === "Draft" && (
                            <>
                              <Edit className="w-3 h-3" />
                              Last edited: {announcement.lastEdited}
                            </>
                          )}
                          {announcement.status === "Scheduled" && (
                            <>
                              <Calendar className="w-3 h-3" />
                              Scheduled: {announcement.scheduledDate}
                            </>
                          )}
                          <span className="mx-2">•</span>
                          Audience: {announcement.audience}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground mb-4">{announcement.content}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      {announcement.status === "Draft" && (
                        <Button
                          size="sm"
                          className="bg-accent hover:bg-accent/90 gap-2"
                        >
                          <Send className="w-4 h-4" />
                          Publish
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-red-500 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right: Preview & Guidelines */}
            <div className="space-y-6">
              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Student Portal Preview</CardTitle>
                  <CardDescription>How announcements appear</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary rounded-lg p-4 border-l-4 border-accent">
                    <p className="font-medium text-foreground text-sm mb-1">
                      TES Deadline Extended
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      The application deadline for Tertiary Education Subsidy (TES) has been
                      extended...
                    </p>
                    <p className="text-xs text-muted-foreground">Oct 25, 2025</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Published</span>
                    <span className="font-semibold text-green-600">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Drafts</span>
                    <span className="font-semibold text-gray-600">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Scheduled</span>
                    <span className="font-semibold text-blue-600">1</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-semibold text-foreground">4</span>
                  </div>
                </CardContent>
              </Card>

              {/* Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Keep titles clear and concise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Include relevant dates and deadlines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Target specific audiences when appropriate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Preview before publishing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}