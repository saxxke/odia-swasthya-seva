import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  Video, 
  Clock,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone
} from "lucide-react";
import { toast } from "sonner";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  location: string;
  languages: string[];
  availableSlots: string[];
  consultationFee: number;
  image: string;
  onlineAvailable: boolean;
  offlineAvailable: boolean;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: 12,
    rating: 4.8,
    location: "Delhi",
    languages: ["Hindi", "English", "Punjabi"],
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    consultationFee: 800,
    image: "/api/placeholder/120/120",
    onlineAvailable: true,
    offlineAvailable: true,
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialty: "General Physician",
    experience: 8,
    rating: 4.6,
    location: "Mumbai",
    languages: ["Hindi", "English", "Marathi"],
    availableSlots: ["9:00 AM", "11:00 AM", "5:00 PM"],
    consultationFee: 500,
    image: "/api/placeholder/120/120",
    onlineAvailable: true,
    offlineAvailable: true,
  },
  {
    id: 3,
    name: "Dr. Anita Gupta",
    specialty: "Dermatologist",
    experience: 15,
    rating: 4.9,
    location: "Bangalore",
    languages: ["English", "Hindi", "Kannada"],
    availableSlots: ["11:00 AM", "3:00 PM", "6:00 PM"],
    consultationFee: 700,
    image: "/api/placeholder/120/120",
    onlineAvailable: true,
    offlineAvailable: false,
  },
  {
    id: 4,
    name: "Dr. Suresh Patel",
    specialty: "Orthopedic",
    experience: 20,
    rating: 4.7,
    location: "Ahmedabad",
    languages: ["Hindi", "Gujarati", "English"],
    availableSlots: ["10:00 AM", "1:00 PM", "4:00 PM"],
    consultationFee: 900,
    image: "/api/placeholder/120/120",
    onlineAvailable: false,
    offlineAvailable: true,
  },
];

const specialties = [
  "All Specialties",
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Orthopedic",
  "Pediatrician",
  "Gynecologist",
  "Neurologist",
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredDoctors = doctors.filter(doctor => {
    return (
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpecialty === "All Specialties" || doctor.specialty === selectedSpecialty) &&
      (selectedLocation === "All Locations" || doctor.location === selectedLocation)
    );
  });

  const handleBookAppointment = (doctor: Doctor, slot: string, type: "online" | "offline") => {
    toast.success(`Appointment booked with ${doctor.name} for ${slot} (${type})`);
  };

  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty) {
      case "Cardiologist": return Heart;
      case "Neurologist": return Brain;
      case "Ophthalmologist": return Eye;
      case "Orthopedic": return Bone;
      default: return Stethoscope;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Find Doctors</h1>
        <p className="text-muted-foreground">Book appointments with qualified healthcare professionals</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8 health-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
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
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Doctors List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDoctors.map((doctor) => {
          const SpecialtyIcon = getSpecialtyIcon(doctor.specialty);
          return (
            <Card key={doctor.id} className="health-card hover:shadow-medical transition-smooth">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <SpecialtyIcon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-card-foreground">{doctor.name}</CardTitle>
                    <CardDescription className="text-secondary font-medium">
                      {doctor.specialty}
                    </CardDescription>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {doctor.experience} years exp.
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">{doctor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Languages */}
                  <div>
                    <p className="text-sm font-medium mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Fee */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Consultation Fee:</span>
                    <span className="text-lg font-bold text-primary">₹{doctor.consultationFee}</span>
                  </div>

                  {/* Available Slots */}
                  <div>
                    <p className="text-sm font-medium mb-2">Available Today:</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.availableSlots.slice(0, 3).map((slot) => (
                        <Badge key={slot} variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {slot}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Booking Buttons */}
                  <div className="flex space-x-2 pt-2">
                    {doctor.onlineAvailable && (
                      <Button
                        className="flex-1"
                        onClick={() => handleBookAppointment(doctor, doctor.availableSlots[0], "online")}
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Online
                      </Button>
                    )}
                    {doctor.offlineAvailable && (
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleBookAppointment(doctor, doctor.availableSlots[0], "offline")}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Visit Clinic
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredDoctors.length === 0 && (
        <Card className="text-center py-12 health-card">
          <CardContent>
            <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No doctors found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Doctors;