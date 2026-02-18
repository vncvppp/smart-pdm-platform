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
  Download,
  FileSpreadsheet,
  FileType,
  Printer,
  Eye,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export default function ReportGeneration() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedReport, setSelectedReport] = useState("tes-beneficiary");
  const [academicYear, setAcademicYear] = useState("2025-2026");
  const [semester, setSemester] = useState("1st");
  const [format, setFormat] = useState("pdf");

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: FileText, label: "Applications", href: "/admin/applications" },
    { icon: Users, label: "Scholars", href: "/admin/scholars" },
    { icon: CheckSquare, label: "Obligations", href: "/admin/obligations" },
    { icon: BarChart3, label: "Reports", href: "/admin/reports", active: true },
    { icon: Megaphone, label: "Announcements", href: "/admin/announcements" },
    { icon: UserCog, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const reportTypes = [
    {
      id: "tes-beneficiary",
      title: "TES Beneficiary Report",
      description: "CHED format compliance report",
      icon: FileText,
    },
    {
      id: "tdp-scholars",
      title: "TDP Scholars Report",
      description: "Tulong Dunong Program listing",
      icon: Users,
    },
    {
      id: "master-list",
      title: "Master List of Scholars",
      description: "Complete scholar directory",
      icon: FileSpreadsheet,
    },
    {
      id: "ro-compliance",
      title: "RO Compliance Report",
      description: "Return of obligations status",
      icon: CheckSquare,
    },
    {
      id: "custom",
      title: "Custom Report Builder",
      description: "Build your own report",
      icon: Settings,
    },
  ];

  const recentReports = [
    {
      name: "TES_Beneficiary_AY2025_1stSem.pdf",
      generated: "Oct 24, 2025, 3:45 PM",
      size: "2.4 MB",
    },
    {
      name: "Master_List_Scholars_Oct2025.xlsx",
      generated: "Oct 20, 2025, 10:30 AM",
      size: "1.8 MB",
    },
    {
      name: "RO_Compliance_Report_Sept2025.pdf",
      generated: "Oct 15, 2025, 2:15 PM",
      size: "850 KB",
    },
  ];

  const samplePreviewData = [
    { studentId: "2025-001", name: "Dela Cruz, Juan", course: "BSIT", year: "2", gwa: "1.85" },
    { studentId: "2025-002", name: "Santos, Maria", course: "BSBA", year: "3", gwa: "1.92" },
    { studentId: "2025-003", name: "Reyes, Ana", course: "BSED", year: "1", gwa: "1.78" },
    { studentId: "2025-004", name: "Garcia, Pedro", course: "BSCS", year: "4", gwa: "1.88" },
    { studentId: "2025-005", name: "Lopez, Elena", course: "BSIT", year: "2", gwa: "1.95" },
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
              <h1 className="text-2xl font-semibold text-foreground">Generate Reports</h1>
              <p className="text-sm text-muted-foreground">CHED/UniFAST Compliance</p>
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

        {/* Report Generation Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Report Types */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Report Types</CardTitle>
                  <CardDescription>Select a report to generate</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedReport} onValueChange={setSelectedReport}>
                    <div className="space-y-3">
                      {reportTypes.map((report) => (
                        <div
                          key={report.id}
                          className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                            selectedReport === report.id
                              ? "border-primary bg-blue-50"
                              : "border-border hover:bg-secondary"
                          }`}
                          onClick={() => setSelectedReport(report.id)}
                        >
                          <RadioGroupItem value={report.id} id={report.id} />
                          <div className="flex-1">
                            <label
                              htmlFor={report.id}
                              className="font-medium text-foreground cursor-pointer flex items-center gap-2"
                            >
                              <report.icon className="w-4 h-4" />
                              {report.title}
                            </label>
                            <p className="text-sm text-muted-foreground mt-1">
                              {report.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Previously generated</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentReports.map((report, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-gray-200 transition-colors"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{report.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {report.generated} • {report.size}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Configuration & Preview */}
            <div className="lg:col-span-3 space-y-6">
              {/* Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Report Configuration</CardTitle>
                  <CardDescription>Customize your report parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Academic Year</Label>
                      <Select value={academicYear} onValueChange={setAcademicYear}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025-2026">2025-2026</SelectItem>
                          <SelectItem value="2024-2025">2024-2025</SelectItem>
                          <SelectItem value="2023-2024">2023-2024</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Semester</Label>
                      <Select value={semester} onValueChange={setSemester}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Semester</SelectItem>
                          <SelectItem value="2nd">2nd Semester</SelectItem>
                          <SelectItem value="summer">Summer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Program Filter</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Programs</SelectItem>
                          <SelectItem value="tes">TES Only</SelectItem>
                          <SelectItem value="tdp">TDP Only</SelectItem>
                          <SelectItem value="private">Private Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Date Range</Label>
                      <Select defaultValue="current">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">Current Period</SelectItem>
                          <SelectItem value="ytd">Year to Date</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Export Format</Label>
                    <RadioGroup
                      value={format}
                      onValueChange={setFormat}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pdf" id="pdf" />
                        <Label htmlFor="pdf" className="font-normal cursor-pointer flex items-center gap-2">
                          <FileType className="w-4 h-4" />
                          PDF
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excel" id="excel" />
                        <Label htmlFor="excel" className="font-normal cursor-pointer flex items-center gap-2">
                          <FileSpreadsheet className="w-4 h-4" />
                          Excel
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="csv" id="csv" />
                        <Label htmlFor="csv" className="font-normal cursor-pointer flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          CSV
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Report Preview</CardTitle>
                      <CardDescription>Sample data layout</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Full Preview
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary">
                          <TableHead className="font-semibold">Student ID</TableHead>
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="font-semibold">Course</TableHead>
                          <TableHead className="font-semibold">Year</TableHead>
                          <TableHead className="font-semibold">GWA</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {samplePreviewData.map((row) => (
                          <TableRow key={row.studentId}>
                            <TableCell className="font-medium">{row.studentId}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.course}</TableCell>
                            <TableCell>{row.year}</TableCell>
                            <TableCell className="text-green-600 font-medium">
                              {row.gwa}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    Showing 5 of 348 records
                  </p>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 h-12 gap-2">
                  <Download className="w-5 h-5" />
                  GENERATE REPORT
                </Button>
                <Button variant="outline" className="h-12 gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  EXPORT
                </Button>
                <Button variant="outline" className="h-12 gap-2">
                  <Printer className="w-5 h-5" />
                  PRINT
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
