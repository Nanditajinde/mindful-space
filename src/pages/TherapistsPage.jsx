import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { saveAppointment, loadAppointments } from "../firebase";
import { sendAppointmentConfirmationSMS } from "../notifications";
import { Calendar, Clock, MapPin, User, Loader2, CheckCircle, Video, Phone, Mail, Star, Award, Languages, Briefcase, Search, Filter, X } from "lucide-react";

// Enhanced Mock Data for Nearby Therapists with more details
const MOCK_THERAPISTS = [
  {
    id: "t1",
    name: "Dr. Sarah Jenkins",
    specialty: "Clinical Psychologist",
    credentials: "PhD, Licensed Psychologist",
    experience: "12 years",
    languages: ["English", "Hindi"],
    location: "Online / Video Call",
    price: "₹1500 / session",
    rating: "4.9",
    reviews: 127,
    image: "👩‍⚕️",
    bio: "Specialized in cognitive behavioral therapy with extensive experience in anxiety and depression management.",
    slots: ["10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"],
    contact: {
      phone: "+91-9876543210",
      email: "dr.sarah@mindfulspace.com"
    },
    availability: "Mon-Fri, 9AM-6PM"
  },
  {
    id: "t2",
    name: "Dr. Rahul Sharma",
    specialty: "Cognitive Behavioral Therapist",
    credentials: "MPhil, CBT Specialist",
    experience: "8 years",
    languages: ["English", "Hindi", "Marathi"],
    location: "Clinic - Downtown & Online",
    price: "₹1800 / session",
    rating: "4.8",
    reviews: 89,
    image: "👨‍⚕️",
    bio: "Expert in CBT techniques for OCD, PTSD, and generalized anxiety disorders.",
    slots: ["09:00 AM", "01:00 PM", "03:30 PM", "05:00 PM"],
    contact: {
      phone: "+91-9876543211",
      email: "dr.rahul@mindfulspace.com"
    },
    availability: "Tue-Sat, 10AM-7PM"
  },
  {
    id: "t3",
    name: "Dr. Ananya Desai",
    specialty: "Counseling Psychologist",
    credentials: "MA Psychology, Certified Counselor",
    experience: "6 years",
    languages: ["English", "Hindi", "Gujarati"],
    location: "Online / Video Call",
    price: "₹1200 / session",
    rating: "4.7",
    reviews: 156,
    image: "👩‍⚕️",
    bio: "Focuses on relationship counseling, stress management, and personal development.",
    slots: ["10:30 AM", "12:00 PM", "04:30 PM", "06:00 PM"],
    contact: {
      phone: "+91-9876543212",
      email: "dr.ananya@mindfulspace.com"
    },
    availability: "Mon-Sun, 11AM-8PM"
  },
  {
    id: "t4",
    name: "Dr. Vikram Patel",
    specialty: "Psychiatrist",
    credentials: "MD Psychiatry, MBBS",
    experience: "15 years",
    languages: ["English", "Hindi"],
    location: "Clinic - Medical Center",
    price: "₹2500 / session",
    rating: "4.9",
    reviews: 203,
    image: "👨‍⚕️",
    bio: "Board-certified psychiatrist specializing in medication management and psychotherapy.",
    slots: ["11:00 AM", "02:30 PM", "04:00 PM"],
    contact: {
      phone: "+91-9876543213",
      email: "dr.vikram@mindfulspace.com"
    },
    availability: "Mon-Fri, 10AM-5PM"
  },
  {
    id: "t5",
    name: "Dr. Priya Singh",
    specialty: "Child & Adolescent Psychologist",
    credentials: "PhD, Child Psychology",
    experience: "10 years",
    languages: ["English", "Hindi", "Punjabi"],
    location: "Online / Video Call",
    price: "₹1400 / session",
    rating: "4.8",
    reviews: 94,
    image: "👩‍⚕️",
    bio: "Specialized in child and adolescent mental health, including ADHD and learning disabilities.",
    slots: ["09:30 AM", "11:00 AM", "03:00 PM", "05:30 PM"],
    contact: {
      phone: "+91-9876543214",
      email: "dr.priya@mindfulspace.com"
    },
    availability: "Wed-Sun, 9AM-6PM"
  },
  {
    id: "t6",
    name: "Dr. Arjun Kumar",
    specialty: "Marriage & Family Therapist",
    credentials: "MS Marriage & Family Therapy",
    experience: "9 years",
    languages: ["English", "Hindi", "Tamil"],
    location: "Clinic - Family Center & Online",
    price: "₹1600 / session",
    rating: "4.6",
    reviews: 78,
    image: "👨‍⚕️",
    bio: "Helps couples and families navigate relationship challenges and communication issues.",
    slots: ["10:00 AM", "01:30 PM", "04:00 PM"],
    contact: {
      phone: "+91-9876543215",
      email: "dr.arjun@mindfulspace.com"
    },
    availability: "Mon-Sat, 10AM-6PM"
  }
];

export default function TherapistsPage({ user, trustedContact }) {
  const { t } = useLanguage();
  const [appointments, setAppointments] = useState([]);
  const [loadingAppts, setLoadingAppts] = useState(true);

  // Booking Modal State
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Search and Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique specialties and locations for filters
  const specialties = [...new Set(MOCK_THERAPISTS.map(t => t.specialty))];
  const locations = [...new Set(MOCK_THERAPISTS.map(t => t.location.includes("Online") ? "Online" : "Clinic"))];

  // Filter therapists based on search and filters
  const filteredTherapists = MOCK_THERAPISTS.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty = !filterSpecialty || therapist.specialty === filterSpecialty;
    const matchesLocation = !filterLocation ||
                           (filterLocation === "Online" && therapist.location.includes("Online")) ||
                           (filterLocation === "Clinic" && !therapist.location.includes("Online"));

    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  useEffect(() => {
    if (user) {
      fetchAppointments();
      
      // Set default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toISOString().split("T")[0]);
    }
  }, [user]);

  const fetchAppointments = async () => {
    setLoadingAppts(true);
    try {
      const data = await loadAppointments(user.uid);
      setAppointments(data);
    } catch (err) {
      console.error("Failed to load appointments", err);
    } finally {
      setLoadingAppts(false);
    }
  };

  const handleBook = async () => {
    if (!selectedDate || !selectedSlot || !selectedTherapist) return;

    setBookingLoading(true);
    try {
      const appointmentData = {
        therapistId: selectedTherapist.id,
        therapistName: selectedTherapist.name,
        therapistSpecialty: selectedTherapist.specialty,
        location: selectedTherapist.location,
        date: selectedDate,
        time: selectedSlot,
        status: "Confirmed",
        contactInfo: selectedTherapist.contact,
        price: selectedTherapist.price
      };

      await saveAppointment(user.uid, appointmentData);
      setBookingSuccess(true);

      // Send SMS confirmation to user (if they have a phone number stored)
      // Note: In a real app, you'd get the user's phone from their profile
      // For now, we'll show a success message
      console.log("Appointment booked successfully:", appointmentData);

      // Refresh appointments list
      await fetchAppointments();

      // Reset after 3 seconds
      setTimeout(() => {
        setBookingSuccess(false);
        setSelectedTherapist(null);
        setSelectedSlot("");
      }, 3000);

    } catch (err) {
      console.error("Failed to book appointment", err);
      alert("Something went wrong while booking. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="flex-1 w-full max-w-[960px] mx-auto animate-fade-in pb-12 pt-6">
      <div className="section-panel p-8 mb-8">
        <div className="section-header flex-col items-start gap-4 lg:flex-row">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] mb-4">
              <Calendar className="w-3.5 h-3.5" /> Trusted care in minutes
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight">
              Find a licensed therapist who fits your schedule.
            </h1>
            <p className="mt-4 text-[15px] text-[var(--text-secondary)] max-w-2xl leading-7">
              Browse experienced mental health professionals, compare their specialties and book your next session with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
            <div className="section-panel p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">Fast Booking</p>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">3 steps to book</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Search, select a therapist, and confirm your session in a few taps.</p>
            </div>
            <div className="section-panel p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">Flexible Care</p>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Online & clinic</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Choose live video or an in-clinic appointment depending on your needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-[var(--text-main)] mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[var(--primary)]" />
          Your Upcoming Sessions
        </h2>
        
        {loadingAppts ? (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 flex justify-center items-center h-32">
            <Loader2 className="w-6 h-6 animate-spin text-[var(--primary)]" />
          </div>
        ) : appointments.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {appointments.map((appt) => (
              <div key={appt.id} className="section-panel p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--brand-primary)] rounded-r-full"></div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] text-lg">{appt.therapistName}</h3>
                    <p className="text-xs text-[var(--text-secondary)]">{appt.therapistSpecialty}</p>
                  </div>
                  <span className="badge">{appt.status}</span>
                </div>
                
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{appt.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{appt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                    {appt.location.includes("Online") ? (
                       <Video className="w-4 h-4 text-slate-400" />
                    ) : (
                       <MapPin className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="font-medium">{appt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] border-dashed rounded-2xl p-8 text-center">
            <p className="text-[var(--text-muted)]">No upcoming appointments booked.</p>
          </div>
        )}
      </div>

      {/* Search and Filter Section */}
      <div className="section-panel p-6 mb-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">Browse therapists</p>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Search by specialty, rating or care format.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search therapists, specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[var(--surface-secondary)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-3 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              {(filterSpecialty || filterLocation) && (
                <span className="badge" />
              )}
            </button>
          </div>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in">
            <div className="section-panel p-4">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Specialty</label>
              <select
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="w-full px-3 py-2 bg-[var(--surface-secondary)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--brand-primary)]"
              >
                <option value="">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            <div className="section-panel p-4">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Location Type</label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full px-3 py-2 bg-[var(--surface-secondary)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--brand-primary)]"
              >
                <option value="">All Locations</option>
                <option value="Online">Online</option>
                <option value="Clinic">Clinic</option>
              </select>
            </div>
          </div>
        )}

        {(filterSpecialty || filterLocation) && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="pill">Specialty: {filterSpecialty || 'All'}</span>
            <span className="pill">Location: {filterLocation || 'All'}</span>
            <button
              onClick={() => {
                setFilterSpecialty("");
                setFilterLocation("");
                setSearchTerm("");
              }}
              className="ml-auto text-sm font-medium text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
      {/* Therapists Directory */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] flex items-center gap-2">
            <User className="w-5 h-5 text-[var(--brand-primary)]" />
            Available Therapists
          </h2>
          <span className="text-sm text-[var(--text-muted)]">
            {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} found
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTherapists.map((therapist) => (
            <div key={therapist.id} className="section-panel p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center text-3xl border-2 border-[var(--border-primary)]">
                  {therapist.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--text-primary)] text-lg leading-tight truncate">{therapist.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-1">{therapist.specialty}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-[var(--text-primary)]">{therapist.rating}</span>
                      <span className="text-xs text-[var(--text-muted)]">({therapist.reviews})</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-medium">{therapist.price}</p>
                </div>
              </div>

              {/* Credentials & Experience */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Award className="w-3 h-3" />
                  <span>{therapist.credentials}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Briefcase className="w-3 h-3" />
                  <span>{therapist.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Languages className="w-3 h-3" />
                  <span>{therapist.languages.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  {therapist.location.includes("Online") ? (
                    <Video className="w-3 h-3" />
                  ) : (
                    <MapPin className="w-3 h-3" />
                  )}
                  <span>{therapist.location}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-2">
                {therapist.bio}
              </p>

              {/* Availability */}
              <div className="text-xs text-[var(--text-muted)] mb-4">
                <span className="font-medium">Available:</span> {therapist.availability}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedTherapist(therapist);
                    setSelectedSlot("");
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] shadow-sm hover:shadow-md"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => window.open(`mailto:${therapist.contact.email}`, '_blank')}
                  className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 transition-colors"
                  title="Contact via email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTherapists.length === 0 && (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">No therapists found</h3>
            <p className="text-[var(--text-muted)]">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Enhanced Booking Modal */}
      {selectedTherapist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(15,23,42,0.6)", backdropFilter: "blur(4px)" }}>
          <div className="bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto">

            {bookingSuccess ? (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Appointment Confirmed!</h3>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  Your session with {selectedTherapist.name} has been successfully scheduled for {selectedDate} at {selectedSlot}.
                </p>
                <div className="bg-[var(--surface-secondary)] rounded-xl p-4 w-full max-w-sm">
                  <div className="text-center">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{selectedTherapist.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{selectedTherapist.specialty}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{selectedDate} • {selectedSlot}</p>
                    <p className="text-xs text-[var(--text-muted)]">{selectedTherapist.location}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="p-6 border-b border-[var(--border-primary)] bg-[var(--surface-secondary)]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center text-2xl border border-[var(--border-primary)]">
                        {selectedTherapist.image}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] text-lg">{selectedTherapist.name}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">{selectedTherapist.specialty}</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">{selectedTherapist.credentials}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedTherapist(null)}
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 rounded-lg hover:bg-[var(--surface-primary)] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Therapist Details */}
                  <div className="bg-[var(--surface-secondary)] rounded-xl p-4 border border-[var(--border-primary)]/50">
                    <h4 className="font-medium text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <User className="w-4 h-4 text-[var(--brand-primary)]" />
                      About {selectedTherapist.name.split(' ')[0]}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{selectedTherapist.bio}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3 h-3 text-[var(--brand-primary)]" />
                        <span className="text-[var(--text-secondary)]">{selectedTherapist.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-[var(--text-secondary)]">{selectedTherapist.rating} ({selectedTherapist.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Languages className="w-3 h-3 text-[var(--brand-primary)]" />
                        <span className="text-[var(--text-secondary)]">{selectedTherapist.languages.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedTherapist.location.includes("Online") ? (
                          <Video className="w-3 h-3 text-[var(--brand-primary)]" />
                        ) : (
                          <MapPin className="w-3 h-3 text-[var(--brand-primary)]" />
                        )}
                        <span className="text-[var(--text-secondary)]">{selectedTherapist.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Select Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/10 transition-all"
                    />
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">Available Time Slots</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedTherapist.slots.map(slot => (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${
                            selectedSlot === slot
                            ? "bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white shadow-md"
                            : "bg-[var(--surface-primary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--brand-primary)]/50 hover:bg-[var(--brand-primary)]/5"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Contact Info */}
                  <div className="bg-[var(--surface-secondary)] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[var(--text-primary)]">Session Fee</span>
                      <span className="text-lg font-bold text-[var(--brand-primary)]">{selectedTherapist.price}</span>
                    </div>
                    <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>{selectedTherapist.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        <span>{selectedTherapist.contact.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-[var(--border-primary)] flex gap-3">
                  <button
                    onClick={() => setSelectedTherapist(null)}
                    className="flex-1 py-3 rounded-xl text-sm font-medium border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBook}
                    disabled={!selectedSlot || !selectedDate || bookingLoading}
                    className="flex-1 py-3 flex justify-center items-center gap-2 rounded-xl text-sm font-medium bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
                  >
                    {bookingLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm Booking"}
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
