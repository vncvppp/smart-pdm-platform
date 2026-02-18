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
  Filter,
  ChevronDown,
  Clock,
  DollarSign,
  Building2,
  FileCheck,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";

export default function ScholarshipList() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
    { icon: GraduationCap, label: "Scholarships", href: "/student/scholarships", active: true },
    { icon: FileText, label: "My Applications", href: "#" },
    { icon: Upload, label: "Document Upload", href: "#" },
    { icon: CheckSquare, label: "Obligations", href: "/student/obligations" },
    { icon: User, label: "Profile", href: "#" },
  ];

  const scholarships = [
    {
      id: "tes",
      title: "Tertiary Education Subsidy (TES)",
      provider: "CHED-UNIFAST",
      type: "Government",
      amount: "₱40,000 per academic year",
      benefits: "Tuition, stipend, book allowance",
      deadline: "Oct 30, 2025",
      status: "OPEN",
      statusColor: "bg-accent",
      requirements: ["COR", "Grade Form", "Indigency"],
    },
    {
      id: "tdp",
      title: "Tulong Dunong Program (TDP)",
      provider: "PDM Scholarship",
      type: "Government",
      amount: "Full tuition coverage",
      benefits: "Tuition fees, examination fees",
      deadline: "Nov 15, 2025",
      status: "OPEN",
      statusColor: "bg-accent",
      requirements: ["COR", "Grade Form", "Application Form"],
    },
    {
      id: "bc-packaging",
      title: "BC Packaging Scholarship",
      provider: "BC Packaging Corporation",
      type: "Private",
      amount: "₱25,000 per semester",
      benefits: "Tuition assistance, book allowance",
      deadline: "Nov 30, 2025",
      status: "NEW",
      statusColor: "bg-green-500",
      requirements: ["COR", "Essay", "Interview"],
    },
    {
      id: "dost-sei",
      title: "DOST-SEI Merit Scholarship",
      provider: "Department of Science and Technology",
      type: "Government",
      amount: "Full tuition + monthly allowance",
      benefits: "Full tuition, ₱7,000 monthly stipend",
      deadline: "Dec 15, 2025",
      status: "OPEN",
      statusColor: "bg-accent",
      requirements: ["COR", "Grade Form", "Entrance Exam"],
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

        {/* Scholarship List Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-2">Available Scholarships</h1>
              <p className="text-muted-foreground">Browse and apply for scholarship opportunities</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="outline" className="gap-2">
                Sort by <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <div className="w-64 flex-shrink-0">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Categories</h4>
                    <div className="space-y-2">
                      {["All", "Government", "Private"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedCategories([...selectedCategories, category]);
                              } else {
                                setSelectedCategories(
                                  selectedCategories.filter((c) => c !== category)
                                );
                              }
                            }}
                          />
                          <label
                            htmlFor={category}
                            className="text-sm font-normal cursor-pointer text-foreground"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Provider</h4>
                    <div className="space-y-2">
                      {["CHED", "UNIFAST", "Private"].map((provider) => (
                        <div key={provider} className="flex items-center space-x-2">
                          <Checkbox id={provider} />
                          <label
                            htmlFor={provider}
                            className="text-sm font-normal cursor-pointer text-foreground"
                          >
                            {provider}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Status</h4>
                    <div className="space-y-2">
                      {["Open", "Closed", "Coming Soon"].map((status) => (
                        <div key={status} className="flex items-center space-x-2">
                          <Checkbox id={status} />
                          <label
                            htmlFor={status}
                            className="text-sm font-normal cursor-pointer text-foreground"
                          >
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Scholarship Cards Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {scholarships.map((scholarship) => (
                  <Card key={scholarship.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${scholarship.statusColor} text-white`}>
                          {scholarship.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{scholarship.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {scholarship.provider} • {scholarship.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-medium text-foreground">
                            {scholarship.amount}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <FileCheck className="w-4 h-4 mt-0.5" />
                          <span>{scholarship.benefits}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span className="text-foreground">
                            Deadline: <span className="font-medium">{scholarship.deadline}</span>
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Requirements:</p>
                        <div className="flex flex-wrap gap-2">
                          {scholarship.requirements.map((req) => (
                            <Badge key={req} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" className="flex-1">
                          VIEW DETAILS
                        </Button>
                        <Link to={`/student/apply/${scholarship.id}`} className="flex-1">
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            APPLY NOW
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
