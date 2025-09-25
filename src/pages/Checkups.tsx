import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Calendar, 
  Clock,
  MapPin,
  Shield,
  TestTube,
  Activity,
  Heart,
  Droplets,
  Eye,
  Star,
  Users
} from "lucide-react";
import { toast } from "sonner";

interface HealthPackage {
  id: number;
  name: string;
  description: string;
  tests: string[];
  price: number;
  originalPrice?: number;
  duration: string;
  preparationRequired: boolean;
  category: string;
  rating: number;
  bookings: number;
  idealFor: string[];
  icon: string;
}

const healthPackages: HealthPackage[] = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    description: "Comprehensive blood analysis to check overall health and detect various disorders",
    tests: ["Hemoglobin", "WBC Count", "Platelet Count", "RBC Count", "Hematocrit"],
    price: 350,
    originalPrice: 450,
    duration: "2-4 hours",
    preparationRequired: false,
    category: "Blood Tests",
    rating: 4.8,
    bookings: 1520,
    idealFor: ["General Health", "Anemia", "Infection"],
    icon: "droplets",
  },
  {
    id: 2,
    name: "Lipid Profile",
    description: "Cholesterol and triglyceride levels assessment for heart health",
    tests: ["Total Cholesterol", "HDL", "LDL", "Triglycerides", "VLDL"],
    price: 520,
    originalPrice: 650,
    duration: "12 hours fasting",
    preparationRequired: true,
    category: "Heart Health",
    rating: 4.7,
    bookings: 980,
    idealFor: ["Heart Disease Risk", "Diabetes", "High BP"],
    icon: "heart",
  },
  {
    id: 3,
    name: "Thyroid Function Test",
    description: "Complete thyroid hormone levels and function assessment",
    tests: ["TSH", "T3", "T4", "Free T3", "Free T4"],
    price: 650,
    duration: "Morning preferred",
    preparationRequired: false,
    category: "Hormones",
    rating: 4.6,
    bookings: 756,
    idealFor: ["Weight Issues", "Fatigue", "Hair Loss"],
    icon: "activity",
  },
  {
    id: 4,
    name: "Diabetes Screening",
    description: "Comprehensive diabetes detection and monitoring package",
    tests: ["Fasting Glucose", "HbA1c", "Post-meal Glucose", "Insulin Level"],
    price: 780,
    originalPrice: 920,
    duration: "12 hours fasting",
    preparationRequired: true,
    category: "Diabetes",
    rating: 4.9,
    bookings: 1340,
    idealFor: ["Pre-diabetes", "Family History", "Obesity"],
    icon: "test-tube",
  },
  {
    id: 5,
    name: "Full Body Checkup",
    description: "Comprehensive health assessment with 50+ tests and consultations",
    tests: ["CBC", "Lipid Profile", "Liver Function", "Kidney Function", "ECG", "X-Ray"],
    price: 2500,
    originalPrice: 3200,
    duration: "Half day",
    preparationRequired: true,
    category: "Comprehensive",
    rating: 4.8,
    bookings: 2100,
    idealFor: ["Annual Checkup", "40+ Age", "Health Monitoring"],
    icon: "shield",
  },
  {
    id: 6,
    name: "Eye Examination",
    description: "Complete eye health assessment and vision testing",
    tests: ["Vision Test", "Glaucoma Test", "Retinal Exam", "Color Vision", "Pressure Test"],
    price: 450,
    duration: "1-2 hours",
    preparationRequired: false,
    category: "Eye Care",
    rating: 4.5,
    bookings: 670,
    idealFor: ["Vision Problems", "Eye Strain", "Regular Checkup"],
    icon: "eye",
  },
];

const categories = [
  "All Categories",
  "Blood Tests",
  "Heart Health",
  "Hormones",
  "Diabetes",
  "Comprehensive",
  "Eye Care",
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "droplets": return Droplets;
    case "heart": return Heart;
    case "activity": return Activity;
    case "test-tube": return TestTube;
    case "shield": return Shield;
    case "eye": return Eye;
    default: return TestTube;
  }
};

const Checkups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredPackages = healthPackages.filter(pkg => {
    return (
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All Categories" || pkg.category === selectedCategory)
    );
  });

  const handleBookTest = (pkg: HealthPackage) => {
    toast.success(`${pkg.name} booked successfully! You will receive confirmation shortly.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Health Checkups</h1>
        <p className="text-muted-foreground">Book comprehensive health tests and screenings</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8 health-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search health tests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Locations">All Locations</SelectItem>
                <SelectItem value="Home Collection">Home Collection</SelectItem>
                <SelectItem value="Lab Visit">Lab Visit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Service Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Home Collection</h3>
            <p className="text-xs text-muted-foreground">Free sample pickup</p>
          </CardContent>
        </Card>
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">NABL Certified</h3>
            <p className="text-xs text-muted-foreground">Accurate results</p>
          </CardContent>
        </Card>
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Quick Reports</h3>
            <p className="text-xs text-muted-foreground">Same day results</p>
          </CardContent>
        </Card>
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Expert Guidance</h3>
            <p className="text-xs text-muted-foreground">Free consultation</p>
          </CardContent>
        </Card>
      </div>

      {/* Health Packages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPackages.map((pkg) => {
          const IconComponent = getIcon(pkg.icon);
          return (
            <Card key={pkg.id} className="health-card hover:shadow-medical transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-card-foreground">{pkg.name}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        {pkg.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">{pkg.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Rating and Bookings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm font-medium ml-1">{pkg.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({pkg.bookings} bookings)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Tests Included */}
                  <div>
                    <p className="text-sm font-medium mb-2">Tests Included:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.tests.slice(0, 4).map((test) => (
                        <Badge key={test} variant="secondary" className="text-xs">
                          {test}
                        </Badge>
                      ))}
                      {pkg.tests.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{pkg.tests.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <p className="text-sm font-medium mb-2">Ideal for:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.idealFor.map((condition) => (
                        <Badge key={condition} variant="outline" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Preparation */}
                  {pkg.preparationRequired && (
                    <div className="flex items-center space-x-2 p-2 bg-accent/10 rounded-lg">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-xs text-accent font-medium">
                        Preparation required: {pkg.duration}
                      </span>
                    </div>
                  )}

                  {/* Price and Booking */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">₹{pkg.price}</span>
                        {pkg.originalPrice && (
                          <>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{pkg.originalPrice}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>
                    <Button onClick={() => handleBookTest(pkg)} size="lg">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredPackages.length === 0 && (
        <Card className="text-center py-12 health-card">
          <CardContent>
            <TestTube className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No health packages found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Checkups;