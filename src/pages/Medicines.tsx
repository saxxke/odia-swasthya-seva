import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  ShoppingCart, 
  Plus, 
  Minus,
  Pill,
  Shield,
  Truck,
  Clock,
  Star,
  Info
} from "lucide-react";
import { toast } from "sonner";

interface Medicine {
  id: number;
  name: string;
  genericName: string;
  manufacturer: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  dosage: string;
  prescriptionRequired: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  image: string;
}

const medicines: Medicine[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    genericName: "Acetaminophen",
    manufacturer: "Sun Pharma",
    price: 45,
    originalPrice: 55,
    category: "Pain Relief",
    description: "Effective pain reliever and fever reducer for adults and children",
    dosage: "500mg tablets",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.5,
    reviews: 124,
    image: "/api/placeholder/80/80",
  },
  {
    id: 2,
    name: "Omeprazole 20mg",
    genericName: "Omeprazole",
    manufacturer: "Cipla",
    price: 120,
    category: "Digestive Health",
    description: "Proton pump inhibitor for acid reflux and gastric ulcers",
    dosage: "20mg capsules",
    prescriptionRequired: true,
    inStock: true,
    rating: 4.7,
    reviews: 89,
    image: "/api/placeholder/80/80",
  },
  {
    id: 3,
    name: "Vitamin D3 1000 IU",
    genericName: "Cholecalciferol",
    manufacturer: "Himalaya",
    price: 280,
    originalPrice: 320,
    category: "Vitamins",
    description: "Essential vitamin for bone health and immune support",
    dosage: "1000 IU tablets",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.3,
    reviews: 67,
    image: "/api/placeholder/80/80",
  },
  {
    id: 4,
    name: "Metformin 500mg",
    genericName: "Metformin HCl",
    manufacturer: "Dr. Reddy's",
    price: 95,
    category: "Diabetes",
    description: "Type 2 diabetes medication to control blood sugar levels",
    dosage: "500mg tablets",
    prescriptionRequired: true,
    inStock: false,
    rating: 4.6,
    reviews: 156,
    image: "/api/placeholder/80/80",
  },
];

const categories = [
  "All Categories",
  "Pain Relief",
  "Digestive Health",
  "Vitamins",
  "Diabetes",
  "Blood Pressure",
  "Antibiotics",
  "Skin Care",
];

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const filteredMedicines = medicines.filter(medicine => {
    return (
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All Categories" || medicine.category === selectedCategory)
    );
  });

  const addToCart = (medicineId: number) => {
    setCart(prev => ({
      ...prev,
      [medicineId]: (prev[medicineId] || 0) + 1
    }));
    toast.success("Added to cart");
  };

  const removeFromCart = (medicineId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[medicineId] > 1) {
        newCart[medicineId]--;
      } else {
        delete newCart[medicineId];
      }
      return newCart;
    });
    toast.info("Removed from cart");
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const medicine = medicines.find(m => m.id === parseInt(id));
      return total + (medicine?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Medicines</h1>
          <p className="text-muted-foreground">Order medicines with assured quality and fast delivery</p>
        </div>
        {getTotalItems() > 0 && (
          <Button size="lg" className="gradient-secondary">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart ({getTotalItems()}) - ₹{getCartTotal()}
          </Button>
        )}
      </div>

      {/* Search and Filters */}
      <Card className="mb-8 health-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search medicines, health products..."
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
          </div>
        </CardContent>
      </Card>

      {/* Delivery Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <Truck className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Free Delivery</h3>
            <p className="text-xs text-muted-foreground">On orders above ₹499</p>
          </CardContent>
        </Card>
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">100% Genuine</h3>
            <p className="text-xs text-muted-foreground">Authenticated medicines</p>
          </CardContent>
        </Card>
        <Card className="health-card">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Fast Delivery</h3>
            <p className="text-xs text-muted-foreground">Same day delivery available</p>
          </CardContent>
        </Card>
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedicines.map((medicine) => (
          <Card key={medicine.id} className="health-card hover:shadow-medical transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-card-foreground line-clamp-2">
                    {medicine.name}
                  </CardTitle>
                  <CardDescription className="text-secondary font-medium">
                    {medicine.genericName} • {medicine.manufacturer}
                  </CardDescription>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center ml-3">
                  <Pill className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Rating and Reviews */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-sm font-medium ml-1">{medicine.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({medicine.reviews} reviews)</span>
                </div>

                {/* Category and Dosage */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {medicine.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{medicine.dosage}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {medicine.description}
                </p>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">₹{medicine.price}</span>
                  {medicine.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{medicine.originalPrice}
                    </span>
                  )}
                  {medicine.originalPrice && (
                    <Badge variant="secondary" className="text-xs">
                      {Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                {/* Prescription Required */}
                {medicine.prescriptionRequired && (
                  <div className="flex items-center space-x-2 p-2 bg-accent/10 rounded-lg">
                    <Info className="h-4 w-4 text-accent" />
                    <span className="text-xs text-accent font-medium">Prescription Required</span>
                  </div>
                )}

                {/* Add to Cart */}
                <div className="flex items-center justify-between pt-2">
                  {medicine.inStock ? (
                    <>
                      {cart[medicine.id] ? (
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(medicine.id)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {cart[medicine.id]}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(medicine.id)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => addToCart(medicine.id)}
                          className="flex-1"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button size="sm" variant="outline" disabled className="flex-1">
                      Out of Stock
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMedicines.length === 0 && (
        <Card className="text-center py-12 health-card">
          <CardContent>
            <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No medicines found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Medicines;