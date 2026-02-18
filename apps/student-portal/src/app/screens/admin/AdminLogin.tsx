import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { GraduationCap, Shield } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [staffId, setStaffId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-primary">SMART-PDM Admin</h1>
              <p className="text-xs text-muted-foreground">Scholarship Management System</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Pambayang Dalubhasaan ng Marilao</p>
            <p className="text-xs text-muted-foreground">Office of Student Financial Assistance</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* OSFA Staff Badge */}
            <div className="flex justify-center mb-6">
              <Badge className="bg-primary text-white px-4 py-2 gap-2 text-sm">
                <Shield className="w-4 h-4" />
                OSFA Staff Access Only
              </Badge>
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-2">Staff Login</h2>
              <p className="text-muted-foreground">Sign in to the admin portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="staffId">Staff ID *</Label>
                <Input
                  id="staffId"
                  placeholder="OSFA-2025-001"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="staff@pup.edu.ph"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-normal cursor-pointer text-foreground"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-accent hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90">
                LOGIN
              </Button>

              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-900">
                  <strong>Security Note:</strong> Authorized personnel only. Unauthorized access is
                  prohibited and will be reported.
                </p>
              </div>

              <div className="text-center text-sm pt-4">
                <Link to="/" className="text-accent font-medium hover:underline">
                  ← Back to Student Portal
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Office of Student Financial Assistance (OSFA) • Contact: osfa@pup.edu.ph • (02) 1234-5678
          </p>
        </div>
      </footer>
    </div>
  );
}
