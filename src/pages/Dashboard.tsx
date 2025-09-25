import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Activity, 
  Calendar, 
  Pill, 
  Stethoscope, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Shield,
  Syringe
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "normal", icon: Heart },
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: Activity },
    { label: "Weight", value: "68 kg", status: "stable", icon: TrendingUp },
  ];

  const upcomingAppointments = [
    { 
      doctor: "Dr. Priya Sharma", 
      specialty: "Cardiologist", 
      date: "2024-01-15", 
      time: "10:00 AM",
      type: "Online"
    },
    { 
      doctor: "Dr. Rajesh Kumar", 
      specialty: "General Physician", 
      date: "2024-01-18", 
      time: "2:30 PM",
      type: "Offline"
    },
  ];

  const medications = [
    { name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", remaining: 15 },
    { name: "Calcium", dosage: "500mg", frequency: "Twice daily", remaining: 8 },
  ];

  const recentReports = [
    { test: "Complete Blood Count", date: "2024-01-10", status: "Normal" },
    { test: "Lipid Profile", date: "2024-01-08", status: "Review Required" },
    { test: "Thyroid Function", date: "2024-01-05", status: "Normal" },
  ];

  const vaccinationChecklist = [
    { 
      vaccine: "COVID-19 Booster", 
      dueDate: "2024-02-01", 
      status: "due", 
      description: "Annual COVID-19 vaccination"
    },
    { 
      vaccine: "Influenza", 
      dueDate: "2024-01-20", 
      status: "overdue", 
      description: "Seasonal flu vaccination"
    },
    { 
      vaccine: "Hepatitis B", 
      dueDate: "2024-06-15", 
      status: "completed", 
      description: "3-dose series completed"
    },
    { 
      vaccine: "Tetanus", 
      dueDate: "2026-03-10", 
      status: "upcoming", 
      description: "10-year booster"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Health Dashboard</h1>
        <p className="text-muted-foreground">Monitor your health journey with comprehensive tracking</p>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {healthMetrics.map((metric, index) => (
          <Card key={index} className="health-card hover:shadow-medical">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <metric.icon className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <Badge 
                variant={metric.status === "normal" ? "secondary" : "outline"}
                className="mt-2"
              >
                {metric.status === "normal" ? (
                  <CheckCircle className="h-3 w-3 mr-1" />
                ) : (
                  <AlertCircle className="h-3 w-3 mr-1" />
                )}
                {metric.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Upcoming Appointments</span>
            </CardTitle>
            <CardDescription>Your scheduled medical consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <h4 className="font-semibold text-card-foreground">{appointment.doctor}</h4>
                    <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-3 w-3 text-secondary" />
                      <span className="text-sm">{appointment.date} at {appointment.time}</span>
                    </div>
                  </div>
                  <Badge variant={appointment.type === "Online" ? "secondary" : "outline"}>
                    {appointment.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/doctors">Book New Appointment</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Current Medications */}
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Pill className="h-5 w-5 text-primary" />
              <span>Current Medications</span>
            </CardTitle>
            <CardDescription>Track your medication schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {medications.map((med, index) => (
                <div key={index} className="p-3 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-card-foreground">{med.name}</h4>
                    <Badge variant="outline">{med.remaining} left</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {med.dosage} - {med.frequency}
                  </p>
                  <Progress 
                    value={(med.remaining / 30) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {med.remaining} days remaining
                  </p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/medicines">Order Refills</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Vaccination Checklist */}
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Vaccination Checklist</span>
            </CardTitle>
            <CardDescription>Stay protected with timely vaccinations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {vaccinationChecklist.map((vaccine, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <Syringe className="h-4 w-4 text-secondary" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">{vaccine.vaccine}</h4>
                      <p className="text-xs text-muted-foreground">{vaccine.description}</p>
                      <p className="text-sm text-muted-foreground">Due: {vaccine.dueDate}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      vaccine.status === "completed" ? "secondary" : 
                      vaccine.status === "overdue" ? "destructive" : 
                      vaccine.status === "due" ? "default" : "outline"
                    }
                  >
                    {vaccine.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {vaccine.status === "overdue" && <AlertCircle className="h-3 w-3 mr-1" />}
                    {vaccine.status === "due" && <Clock className="h-3 w-3 mr-1" />}
                    {vaccine.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/checkups">Schedule Vaccination</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Test Reports */}
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              <span>Recent Test Reports</span>
            </CardTitle>
            <CardDescription>Your latest medical test results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <h4 className="font-semibold text-card-foreground">{report.test}</h4>
                    <p className="text-sm text-muted-foreground">{report.date}</p>
                  </div>
                  <Badge 
                    variant={report.status === "Normal" ? "secondary" : "destructive"}
                  >
                    {report.status === "Normal" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {report.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/checkups">Book Health Checkup</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;