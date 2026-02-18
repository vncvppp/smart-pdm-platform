import { Link, useParams } from "react-router";
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
  ArrowLeft,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";

export default function ApplicationForm() {
  const { scholarshipId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
    { icon: GraduationCap, label: "Scholarships", href: "/student/scholarships" },
    { icon: FileText, label: "My Applications", href: "#", active: true },
    { icon: Upload, label: "Document Upload", href: "#" },
    { icon: CheckSquare, label: "Obligations", href: "/student/obligations" },
    { icon: User, label: "Profile", href: "#" },
  ];

  const steps = [
    { number: 1, label: "Personal Info" },
    { number: 2, label: "Academic" },
    { number: 3, label: "Documents" },
    { number: 4, label: "Review" },
  ];

  const documents = [
    { id: 1, name: "Certificate of Registration (COR)", uploaded: false, required: true },
    { id: 2, name: "Grade Form (Previous Semester)", uploaded: false, required: true },
    { id: 3, name: "Certificate of Indigency", uploaded: false, required: true },
    { id: 4, name: "Valid ID", uploaded: false, required: true },
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
              <Link to="/student/scholarships">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Scholarships
                </Button>
              </Link>
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

        {/* Application Form Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-foreground mb-2">
                Apply for TES Scholarship
              </h1>
              <p className="text-muted-foreground">
                Complete all steps to submit your application
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                          currentStep > step.number
                            ? "bg-green-500 text-white"
                            : currentStep === step.number
                            ? "bg-primary text-white"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.number ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <p
                        className={`text-sm mt-2 font-medium ${
                          currentStep === step.number
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 mx-4 rounded ${
                          currentStep > step.number ? "bg-green-500" : "bg-secondary"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / 4) * 100} className="h-2" />
            </div>

            {/* Step Content */}
            <Card>
              <CardContent className="p-8">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Juan" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Dela Cruz" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="middleName">Middle Name</Label>
                        <Input id="middleName" placeholder="Santos" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID *</Label>
                        <Input id="studentId" placeholder="2025-00001" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthdate">Birthdate *</Label>
                        <Input id="birthdate" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact">Contact Number *</Label>
                        <Input id="contact" placeholder="09123456789" required />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="student@pup.edu.ph" required />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="address">Complete Address *</Label>
                        <Textarea
                          id="address"
                          placeholder="Street, Barangay, City, Province"
                          rows={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Academic Information
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="course">Course/Program *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bsit">BS Information Technology</SelectItem>
                            <SelectItem value="bscs">BS Computer Science</SelectItem>
                            <SelectItem value="bsba">BS Business Administration</SelectItem>
                            <SelectItem value="bsed">BS Education</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yearLevel">Year Level *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lrn">Learner Reference Number (LRN) *</Label>
                        <Input id="lrn" placeholder="123456789012" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gwa">General Weighted Average (GWA)</Label>
                        <Input id="gwa" placeholder="1.75" type="number" step="0.01" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="lastSchool">Last School Attended *</Label>
                        <Input
                          id="lastSchool"
                          placeholder="Name of previous school"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Document Upload
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Please upload all required documents. Accepted formats: PDF, JPG, PNG (Max
                      5MB each)
                    </p>
                    <div className="space-y-4">
                      {documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            {doc.uploaded ? (
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <Upload className="w-5 h-5 text-orange-600" />
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-foreground">
                                {doc.name}
                                {doc.required && (
                                  <span className="text-destructive ml-1">*</span>
                                )}
                              </p>
                              {doc.uploaded ? (
                                <p className="text-sm text-green-600">Uploaded successfully</p>
                              ) : (
                                <p className="text-sm text-muted-foreground">Not uploaded yet</p>
                              )}
                            </div>
                          </div>
                          <Button
                            variant={doc.uploaded ? "outline" : "default"}
                            size="sm"
                            className="gap-2"
                          >
                            <Upload className="w-4 h-4" />
                            {doc.uploaded ? "Replace" : "Upload"}
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900">
                        <strong>Note:</strong> All required documents must be uploaded before
                        proceeding to the next step. Make sure all documents are clear and readable.
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Review & Submit
                    </h3>

                    {/* Summary Cards */}
                    <div className="space-y-4">
                      <Card className="bg-secondary">
                        <CardHeader>
                          <CardTitle className="text-lg">Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Full Name</p>
                            <p className="font-medium">Maria Santos Reyes</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Student ID</p>
                            <p className="font-medium">2025-00123</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Email</p>
                            <p className="font-medium">maria.santos@pup.edu.ph</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Contact</p>
                            <p className="font-medium">09123456789</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary">
                        <CardHeader>
                          <CardTitle className="text-lg">Academic Information</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Course</p>
                            <p className="font-medium">BS Information Technology</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Year Level</p>
                            <p className="font-medium">2nd Year</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">LRN</p>
                            <p className="font-medium">123456789012</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">GWA</p>
                            <p className="font-medium">1.85</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary">
                        <CardHeader>
                          <CardTitle className="text-lg">Uploaded Documents</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {documents.map((doc) => (
                              <div key={doc.id} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <p className="text-sm">{doc.name}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Agreement */}
                    <div className="space-y-4 p-6 border border-border rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" required />
                        <label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                          I hereby certify that all the information provided in this application
                          is true and correct. I understand that any false information may result
                          in the rejection of my application or cancellation of my scholarship.
                        </label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="privacy" required />
                        <label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                          I consent to the collection and processing of my personal data in
                          accordance with the Data Privacy Act of 2012.
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex gap-3">
                    <Button variant="outline">SAVE DRAFT</Button>
                    {currentStep < 4 ? (
                      <Button
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      >
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                        <Check className="w-4 h-4 mr-2" />
                        SUBMIT APPLICATION
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
