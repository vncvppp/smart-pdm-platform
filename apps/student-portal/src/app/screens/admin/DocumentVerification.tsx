import { Link, useParams } from "react-router";
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
  ArrowLeft,
  Check,
  X,
  AlertCircle,
  FileCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Textarea } from "../../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function DocumentVerification() {
  const { applicationId } = useParams();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("cor");
  const [comment, setComment] = useState("");

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

  const documents = [
    { id: "cor", label: "COR", status: "verified", file: "cor_delacruz.pdf" },
    { id: "grades", label: "Grade Form", status: "verified", file: "grades_delacruz.pdf" },
    { id: "indigency", label: "Indigency", status: "pending", file: "indigency_delacruz.pdf" },
    { id: "id", label: "Valid ID", status: "verified", file: "id_delacruz.pdf" },
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
            <div className="flex items-center gap-4">
              <Link to="/admin/applications">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Applications
                </Button>
              </Link>
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

        {/* Document Verification Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
            {/* Left: Application Summary */}
            <div className="lg:col-span-2 space-y-6">
              {/* Student Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Details</CardTitle>
                  <CardDescription>Student ID: {applicationId}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Student Photo/Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                      JD
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Juan Dela Cruz</h3>
                      <p className="text-muted-foreground">Student ID: 2025-00001</p>
                      <Badge className="bg-accent text-white mt-2">TES Scholarship</Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">juan.delacruz@pup.edu.ph</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">09123456789</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span className="text-foreground">
                        123 Main St, Barangay San Jose, Marilao, Bulacan
                      </span>
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Course</p>
                        <p className="text-sm font-medium text-foreground">
                          BS Information Technology
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Year Level</p>
                        <p className="text-sm font-medium text-foreground">2nd Year</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">LRN</p>
                        <p className="text-sm font-medium text-foreground">123456789012</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">GWA</p>
                        <p className="text-sm font-medium text-green-600">1.85</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Document Checklist */}
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                  <CardDescription>Verification status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => setSelectedDocument(doc.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                          selectedDocument === doc.id
                            ? "border-primary bg-blue-50"
                            : "border-border hover:bg-secondary"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {doc.status === "verified" ? (
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Check className="w-5 h-5 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <AlertCircle className="w-5 h-5 text-orange-600" />
                            </div>
                          )}
                          <div className="text-left">
                            <p className="font-medium text-foreground text-sm">{doc.label}</p>
                            <p className="text-xs text-muted-foreground">{doc.file}</p>
                          </div>
                        </div>
                        {doc.status === "verified" ? (
                          <Badge className="bg-green-500 text-white text-xs">Verified</Badge>
                        ) : (
                          <Badge className="bg-orange-500 text-white text-xs">Pending</Badge>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Document Viewer */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Document Viewer</CardTitle>
                      <CardDescription>
                        {documents.find((d) => d.id === selectedDocument)?.label}
                      </CardDescription>
                    </div>
                    <Tabs defaultValue={selectedDocument} className="w-auto">
                      <TabsList>
                        {documents.map((doc) => (
                          <TabsTrigger
                            key={doc.id}
                            value={doc.id}
                            onClick={() => setSelectedDocument(doc.id)}
                            className="text-xs"
                          >
                            {doc.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Document Preview */}
                  <div className="flex-1 bg-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-6 min-h-[400px]">
                    <div className="text-center">
                      <FileCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium text-foreground mb-2">
                        {documents.find((d) => d.id === selectedDocument)?.file}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PDF Document Preview (Simulated)
                      </p>
                    </div>
                  </div>

                  {/* Verification Actions */}
                  <div className="space-y-4 p-6 bg-secondary rounded-lg">
                    <h4 className="font-medium text-foreground">Verification Actions</h4>

                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">
                        Add note to student (optional)
                      </label>
                      <Textarea
                        placeholder="Enter comments or feedback..."
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2">
                        <Check className="w-4 h-4" />
                        Mark as Verified
                      </Button>
                      <Button variant="outline" className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Request Re-upload
                      </Button>
                      <Button variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50 gap-2">
                        <X className="w-4 h-4" />
                        Flag for Review
                      </Button>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between pt-6 border-t border-border mt-6">
                    <Button variant="outline">Previous Application</Button>
                    <Button className="bg-primary hover:bg-primary/90">
                      Save & Next Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
