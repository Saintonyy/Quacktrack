import { useState, useCallback, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { 
  Menu, 
  Bell, 
  Trophy, 
  Users, 
  LandPlot, 
  Medal, 
  PlayCircle, 
  Quote, 
  MessageSquare, 
  LayoutGrid, 
  Package, 
  Briefcase, 
  Calendar,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ArrowLeft,
  Timer,
  Sparkles,
  Award,
  Clapperboard,
  Zap,
  TrendingUp,
  CreditCard,
  Info,
  CalendarClock,
  Mail,
  CloudSun,
  Send,
  Dumbbell,
  User,
  X,
  Headset,
  CalendarPlus,
  RotateCcw,
  Eye,
  FilterX,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col gap-2 mb-10">
    <div className="flex items-center gap-4">
      <div className="h-8 w-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(255,199,0,0.5)]"></div>
      <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">{title}</h2>
    </div>
    {subtitle && (
      <p className="text-white/40 text-sm max-w-xs ml-5">
        {subtitle}
      </p>
    )}
  </div>
);

const PackageCard = ({ pkg }: { pkg: any }) => {
  const Icon = pkg.icon;
  const featured = pkg.featured;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative bg-surface-low p-8 rounded-[2rem] neo-extrusion border ${featured ? 'border-primary shadow-[0_0_30px_rgba(255,199,0,0.15)]' : 'border-white/5'} flex flex-col h-full overflow-hidden`}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-black uppercase px-6 py-1.5 rounded-b-xl shadow-lg z-10">
          Más Popular
        </div>
      )}
      
      {Icon && (
        <div className="absolute top-6 right-6 opacity-10">
          <Icon className="w-16 h-16 text-white" />
        </div>
      )}

      <div className="mb-8 mt-4">
        <h3 className="font-headline text-xl font-black uppercase tracking-tight text-white leading-tight">
          {pkg.title.split(' · ').map((part: string, i: number) => (
            <span key={i} className="block">
              {part}
              {i === 0 && pkg.title.includes(' · ') && <span className="mx-1 opacity-40">•</span>}
            </span>
          ))}
        </h3>
      </div>

      <ul className="space-y-5 mb-10 flex-grow">
        {pkg.bullets.map((bullet: string, j: number) => (
          <li key={j} className="flex items-start gap-4 text-xs font-bold uppercase tracking-wide text-white/80 leading-snug">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-0.5 shadow-[0_0_8px_rgba(255,199,0,0.6)]" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button className={`w-full py-5 rounded-2xl font-headline font-black uppercase text-sm tracking-widest transition-all active:scale-95 ${featured ? 'bg-primary text-background shadow-[0_10px_25px_rgba(255,199,0,0.3)]' : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'}`}>
          {pkg.button}
        </button>
      </div>
    </motion.div>
  );
};

// --- Views ---

const PortfolioView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const highlights = [
    {
      id: 1,
      title: "Final Copa Oro 2025",
      category: "Torneo VIP",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      date: "Oct 2025",
      players: ["Carlos R.", "Miguel A.", "Juan P.", "Luis T.", "Andrés G."],
      stats: { goals: 4, assists: 3, saves: 12 },
      links: ["Ver Partido Completo", "Highlights HD"]
    },
    {
      id: 2,
      title: "Liga Inter-Clubes",
      category: "Ligas",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
      date: "Sep 2025",
      players: ["Roberto M.", "Diego S.", "Fernando L.", "Oscar B."],
      stats: { goals: 2, assists: 1, saves: 8 },
      links: ["Resumen de Goles"]
    },
    {
      id: 3,
      title: "Clínica Real Madrid",
      category: "Evento Especial",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
      date: "Ago 2025",
      players: ["Juveniles Sub-17"],
      stats: { drills: 15, participants: 120 },
      links: ["Galería de Fotos", "Entrevistas"]
    },
    {
      id: 4,
      title: "Torneo Nocturno 7x7",
      category: "Ligas",
      image: "https://images.unsplash.com/photo-1529900948632-58674ba19306?q=80&w=800&auto=format&fit=crop",
      date: "Jul 2025",
      players: ["Equipo A", "Equipo B"],
      stats: { matches: 24, goalsTotal: 86 },
      links: ["Tabla de Posiciones"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="px-6 py-12"
    >
      <SectionHeader 
        title="Portafolio" 
        subtitle="Momentos capturados con precisión cinematográfica y pasión deportiva." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((item) => (
          <motion.div 
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            className={`group relative rounded-[2.5rem] overflow-hidden neo-extrusion border border-white/5 cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,199,0,0.15)] hover:border-primary/30 ${expandedId === item.id ? 'md:col-span-2 h-auto' : 'h-[300px]'}`}
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
          >
            <div className={`relative w-full ${expandedId === item.id ? 'h-[300px]' : 'h-full'}`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">{item.category}</span>
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-white mb-1">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-bold">{item.date}</span>
                  <motion.div 
                    animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                    className="bg-primary/20 backdrop-blur-md p-3 rounded-full border border-primary/30"
                  >
                    <PlayCircle className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-surface-low p-8 border-t border-white/5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">Jugadores Destacados</h4>
                      <ul className="space-y-2">
                        {item.players.map((p, idx) => (
                          <li key={idx} className="text-sm text-white/60 flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">Estadísticas Clave</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(item.stats).map(([key, val]) => (
                          <div key={key} className="bg-background/40 p-3 rounded-xl border border-white/5">
                            <p className="text-[10px] text-white/40 uppercase font-bold">{key}</p>
                            <p className="text-xl font-black text-white">{val}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">Recursos</h4>
                      <div className="space-y-3">
                        {item.links.map((link, idx) => (
                          <button key={idx} className="w-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-black uppercase py-3 px-4 rounded-xl border border-primary/20 transition-colors flex items-center justify-between group">
                            {link}
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="bg-surface-low neo-extrusion px-8 py-4 rounded-2xl font-headline font-black uppercase text-xs tracking-widest text-white/60 hover:text-primary transition-colors">
          Ver más en YouTube
        </button>
      </div>
    </motion.div>
  );
};

const CitasView = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(14);
  const [selectedSlot, setSelectedSlot] = useState<'mañana' | 'tarde' | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  
  // Form validation state
  const [formValues, setFormValues] = useState({
    team: '',
    location: '',
    name: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({
    team: '',
    location: '',
    name: '',
    email: '',
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'team':
        if (!value.trim()) error = 'El nombre del equipo es obligatorio.';
        else if (value.length < 3) error = 'El nombre debe tener al menos 3 caracteres.';
        break;
      case 'location':
        if (!value.trim()) error = 'La sede es obligatoria.';
        else if (value.length < 5) error = 'La sede debe ser más descriptiva.';
        break;
      case 'name':
        if (!value.trim()) error = 'Tu nombre es obligatorio.';
        else if (value.length < 3) error = 'El nombre debe tener al menos 3 caracteres.';
        break;
      case 'email':
        if (!value.trim()) error = 'El correo es obligatorio.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Ingresa un correo válido.';
        break;
    }
    setFormErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };
  
  // Date range filter state
  const [filterStart, setFilterStart] = useState<string>('2026-03-01');
  const [filterEnd, setFilterEnd] = useState<string>('2026-03-31');
  
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  
  const [requests, setRequests] = useState([
    { id: 1, date: '2026-03-05', slot: 'mañana', type: 'Partido', team: 'Galgos FC', status: 'Confirmado', color: '#34A853', location: 'Campo Central', notes: 'Uniforme blanco reglamentario.', contact: 'Carlos R.', phone: '+52 55 1234 5678' },
    { id: 2, date: '2026-03-12', slot: 'tarde', type: 'Torneo', team: 'Liga Premier', status: 'Pendiente', color: '#FBBC05', location: 'Estadio Ciudad', notes: 'Traer balones oficiales.', contact: 'Miguel A.', phone: '+52 55 8765 4321' },
    { id: 3, date: '2026-03-20', slot: 'mañana', type: 'Evento', team: 'Copa Oro', status: 'Confirmado', color: '#34A853', location: 'Sede Sur', notes: 'Inauguración con invitados especiales.', contact: 'Juan P.', phone: '+52 55 1122 3344' },
    { id: 4, date: '2026-03-24', slot: 'tarde', type: 'Partido', team: 'Rojos CDMX', status: 'Cancelado', color: '#EA4335', location: 'Campo 4', notes: 'Reprogramado por clima.', contact: 'Luis T.', phone: '+52 55 5566 7788' },
    { id: 5, date: '2026-03-28', slot: 'mañana', type: 'Clínica', team: 'Real Madrid Jr', status: 'Confirmado', color: '#34A853', location: 'Instalaciones Club', notes: 'Sesión técnica intensiva.', contact: 'Andrés G.', phone: '+52 55 9900 1122' },
  ]);

  const filteredRequests = requests.filter(req => {
    return req.date >= filterStart && req.date <= filterEnd;
  });
  
  const calendarDays = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    const dateStr = `2026-03-${day.toString().padStart(2, '0')}`;
    const dayRequests = requests.filter(r => r.date === dateStr);
    
    let status = 'available';
    if (dayRequests.length >= 2) status = 'busy';
    else if (dayRequests.length === 1) status = 'limited';
    
    // Some hardcoded 'nd' for visual variety
    if (day === 10 || day === 11) status = 'nd';
    
    return { day, status };
  });

  const resetFilters = () => {
    setFilterStart('2026-03-01');
    setFilterEnd('2026-03-31');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submit
    const isTeamValid = validateField('team', formValues.team);
    const isLocationValid = validateField('location', formValues.location);
    const isNameValid = validateField('name', formValues.name);
    const isEmailValid = validateField('email', formValues.email);

    if (!isTeamValid || !isLocationValid || !isNameValid || !isEmailValid) {
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const newRequest = {
      id: Date.now(),
      date: `2026-03-${selectedDate?.toString().padStart(2, '0')}`,
      slot: selectedSlot || 'mañana',
      type: formData.get('type') as string,
      team: formValues.team,
      status: 'Pendiente',
      color: '#FBBC05',
      location: formValues.location,
      notes: formData.get('notes') as string,
      contact: formValues.name,
      phone: formData.get('whatsapp') as string,
    };
    setRequests(prev => [...prev, newRequest]);
    setIsFormOpen(false);
    setIsSuccessOpen(true);
    
    // Reset form state
    setFormValues({ team: '', location: '', name: '', email: '' });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'available': return 'bg-[#34A853]';
      case 'limited': return 'bg-[#FBBC05]';
      case 'busy': return 'bg-[#EA4335]';
      case 'nd': return 'bg-[#5F6368]';
      default: return 'bg-[#444444]';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'available': return 'Disponible';
      case 'limited': return 'Limitado';
      case 'busy': return 'Ocupado';
      case 'nd': return 'No disponible (logística)';
      default: return 'N/D';
    }
  };

  const getFormattedDate = (day: number | null) => {
    if (!day) return '';
    const date = new Date(2026, 2, day); // March is 2 (0-indexed)
    return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-white font-sans pb-24"
    >
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-4xl font-black uppercase tracking-tighter mb-2">Disponibilidad de fechas</h1>
            <p className="text-white/40 text-sm max-w-2xl">
              Máximo <span className="text-white font-bold">2 juegos por día</span> (mañana / tarde). Dos juegos el mismo día solo si la <span className="text-white font-bold">logística lo permite</span>.
            </p>
          </div>
          
          <div className="bg-surface-low p-4 rounded-2xl border border-white/5 neo-extrusion flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex flex-col gap-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-2">Desde</label>
              <input 
                type="date" 
                value={filterStart}
                onChange={(e) => setFilterStart(e.target.value)}
                className="bg-background/40 border border-white/5 rounded-xl px-3 py-2 text-xs font-bold text-white/60 outline-none focus:border-primary/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-2">Hasta</label>
              <input 
                type="date" 
                value={filterEnd}
                onChange={(e) => setFilterEnd(e.target.value)}
                className="bg-background/40 border border-white/5 rounded-xl px-3 py-2 text-xs font-bold text-white/60 outline-none focus:border-primary/30 transition-colors"
              />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={resetFilters}
                className="bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
                title="Restablecer filtros"
              >
                <RotateCcw className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
              </button>
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                <CalendarClock className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calendar Section */}
          <div className="lg:col-span-2 bg-surface-low rounded-[2rem] p-8 neo-extrusion border border-white/5">
            <div className="flex items-center justify-between mb-8">
              <button className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="font-headline text-xl font-black uppercase tracking-tight">marzo de 2026</h2>
              <button className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {['available', 'limited', 'busy', 'nd'].map(status => (
                <div key={status} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{getStatusText(status)}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {days.map(d => (
                <span key={d} className="text-[10px] font-black text-white/20 uppercase tracking-widest py-2">{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {/* Empty slots for Feb end */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              
              {calendarDays.map((item, i) => {
                const isSelected = selectedDate === item.day;
                return (
                  <button 
                    key={i}
                    onClick={() => setSelectedDate(item.day)}
                    className={`relative aspect-square rounded-xl flex items-center justify-center text-sm font-black transition-all border ${
                      isSelected 
                        ? 'bg-primary text-background border-primary shadow-[0_0_20px_rgba(255,199,0,0.3)]' 
                        : 'bg-white/5 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {item.day}
                    <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${getStatusColor(item.status)}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            <div className="bg-surface-low rounded-[2rem] p-8 neo-extrusion border border-white/5">
              {selectedDate ? (
                <>
                  <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-2">{getFormattedDate(selectedDate)}</h3>
                  <p className="text-white/40 text-xs mb-6 uppercase tracking-widest font-bold">Estado del día: <span className="text-[#34A853]">Disponible</span>. Selecciona un slot.</p>
                  
                  <div className="space-y-4 mb-8">
                    <button 
                      onClick={() => setSelectedSlot('mañana')}
                      className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center justify-between group ${selectedSlot === 'mañana' ? 'bg-primary/10 border-primary' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                    >
                      <div>
                        <p className="font-black uppercase tracking-tight">Mañana</p>
                        <p className="text-[10px] text-white/40 font-bold uppercase">(aprox. 09:00–13:00)</p>
                      </div>
                      <span className="text-[10px] font-black text-[#34A853] uppercase tracking-widest">Disponible</span>
                    </button>

                    <button 
                      onClick={() => setSelectedSlot('tarde')}
                      className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center justify-between group ${selectedSlot === 'tarde' ? 'bg-primary/10 border-primary' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                    >
                      <div>
                        <p className="font-black uppercase tracking-tight">Tarde</p>
                        <p className="text-[10px] text-white/40 font-bold uppercase">(aprox. 14:00–18:00)</p>
                      </div>
                      <span className="text-[10px] font-black text-[#34A853] uppercase tracking-widest">Disponible</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-12 text-center">
                  <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-2">Selecciona un día</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Elige un día del calendario para ver disponibilidad.</p>
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-4">Reglas rápidas</h4>
                <ul className="space-y-3">
                  <li className="text-[11px] font-bold text-white/60 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
                    Una solicitud puede ser <span className="text-white">pre-reserva</span> (pendiente de confirmación).
                  </li>
                  <li className="text-[11px] font-bold text-white/60 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
                    La confirmación final se hace por WhatsApp/correo.
                  </li>
                  <li className="text-[11px] font-bold text-white/60 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
                    Clima y disponibilidad técnica pueden afectar la operación.
                  </li>
                </ul>
              </div>

              <button 
                disabled={!selectedDate || !selectedSlot}
                onClick={() => setIsFormOpen(true)}
                className={`w-full py-5 rounded-2xl font-headline font-black uppercase text-sm tracking-widest transition-all ${selectedDate && selectedSlot ? 'bg-primary text-background shadow-[0_10px_25px_rgba(255,199,0,0.3)] active:scale-95' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
              >
                Solicitar / pre-reservar
              </button>
            </div>
          </div>
        </div>

        {/* Requests List Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-2xl font-black uppercase tracking-tighter">Solicitudes en el período</h2>
            <span className="bg-primary/10 text-primary text-[10px] font-black uppercase px-4 py-1.5 rounded-full border border-primary/20">
              {filteredRequests.length} Resultados
            </span>
          </div>

          {filteredRequests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRequests.map((req) => (
                <motion.div 
                  key={req.id}
                  whileHover={{ y: -5 }}
                  className="bg-surface-low p-6 rounded-[2rem] neo-extrusion border border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent -mr-8 -mt-8 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{req.date}</p>
                      <h3 className="font-headline text-lg font-black uppercase tracking-tight">{req.team}</h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 mb-2">
                        {req.slot}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: req.color }} />
                        <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: req.color }}>{req.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-bold text-white/50">{req.type}</span>
                    <button 
                      onClick={() => setSelectedRequest(req)}
                      className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Detalles <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-surface-low rounded-[2rem] p-12 text-center border border-white/5 neo-extrusion">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white/10" />
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-2">Sin solicitudes</h3>
              <p className="text-white/30 text-xs uppercase tracking-widest font-bold">No se encontraron registros para el rango seleccionado.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface-low rounded-[3rem] p-8 md:p-12 neo-extrusion border border-white/10 max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-headline text-2xl font-black uppercase tracking-tighter">Solicitar / pre-reservar</h2>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-8" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Fecha</label>
                    <input type="text" readOnly value={`2026-03-${selectedDate?.toString().padStart(2, '0')}`} className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Slot</label>
                    <select name="slot" defaultValue={selectedSlot || 'mañana'} className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors appearance-none capitalize">
                      <option value="mañana">Mañana</option>
                      <option value="tarde">Tarde</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Tipo de cobertura</label>
                  <select name="type" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors appearance-none">
                    <option>Partido</option>
                    <option>Torneo</option>
                    <option>Evento Especial</option>
                    <option>Clínica</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Equipo / Organización</label>
                    <input name="team" value={formValues.team} onChange={handleInputChange} type="text" placeholder="Nombre del equipo" className={`w-full bg-background/60 border ${formErrors.team ? 'border-red-500' : 'border-white/5'} rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10`} />
                    {formErrors.team && <p className="text-red-500 text-xs mt-1 ml-2">{formErrors.team}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Sede (lugar del encuentro)</label>
                    <input name="location" value={formValues.location} onChange={handleInputChange} type="text" placeholder="Ej. Campo X, CDMX Norte" className={`w-full bg-background/60 border ${formErrors.location ? 'border-red-500' : 'border-white/5'} rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10`} />
                    {formErrors.location && <p className="text-red-500 text-xs mt-1 ml-2">{formErrors.location}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Hora aproximada</label>
                    <input name="time" type="text" placeholder="Ej. 10:00 am" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">¿Incluye comercial?</label>
                    <select name="commercial" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors appearance-none">
                      <option>No</option>
                      <option>Sí</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Tu nombre</label>
                    <input name="name" value={formValues.name} onChange={handleInputChange} type="text" placeholder="Nombre y apellido" className={`w-full bg-background/60 border ${formErrors.name ? 'border-red-500' : 'border-white/5'} rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10`} />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1 ml-2">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">WhatsApp</label>
                    <input name="whatsapp" type="text" required placeholder="+52 ..." className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Correo</label>
                  <input name="email" value={formValues.email} onChange={handleInputChange} type="email" placeholder="tu@correo.com" className={`w-full bg-background/60 border ${formErrors.email ? 'border-red-500' : 'border-white/5'} rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10`} />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1 ml-2">{formErrors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Notas</label>
                  <textarea name="notes" rows={4} placeholder="Detalles adicionales (rival, categoría, requisitos, etc.)" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10 resize-none" />
                </div>

                <div className="pt-4">
                  <p className="text-[10px] text-white/40 mb-6 text-center">Esto genera un primer contacto y una <span className="text-white font-bold">pre-reserva</span> (pendiente de confirmación). Te contactamos para cerrar.</p>
                  <button type="submit" className="w-full bg-primary text-background font-headline font-black uppercase py-6 rounded-2xl text-lg shadow-[0_15px_40px_rgba(255,199,0,0.25)] active:scale-95 transition-all">
                    Enviar solicitud
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedRequest && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRequest(null)}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-surface-low rounded-[3rem] p-8 md:p-10 neo-extrusion border border-white/10"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-headline text-xl font-black uppercase tracking-tight">Detalles de Solicitud</h2>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">ID: #{selectedRequest.id}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRequest(null)}
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/40 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-1">Equipo</p>
                    <p className="text-sm font-black text-white uppercase">{selectedRequest.team}</p>
                  </div>
                  <div className="bg-background/40 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-1">Estado</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedRequest.color }} />
                      <p className="text-sm font-black uppercase" style={{ color: selectedRequest.color }}>{selectedRequest.status}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background/40 p-5 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Fecha y Hora</span>
                    <span className="text-xs font-black text-white">{selectedRequest.date} · {selectedRequest.slot}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Tipo</span>
                    <span className="text-xs font-black text-white uppercase">{selectedRequest.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Sede</span>
                    <span className="text-xs font-black text-white">{selectedRequest.location}</span>
                  </div>
                </div>

                <div className="bg-background/40 p-5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-3">Contacto</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white/80">{selectedRequest.contact}</span>
                    <span className="text-xs font-mono text-primary">{selectedRequest.phone}</span>
                  </div>
                </div>

                {selectedRequest.notes && (
                  <div className="bg-background/40 p-5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">Notas</p>
                    <p className="text-xs text-white/60 leading-relaxed italic">"{selectedRequest.notes}"</p>
                  </div>
                )}

                <button 
                  onClick={() => setSelectedRequest(null)}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-headline font-black uppercase text-xs tracking-widest transition-all"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccessOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccessOpen(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-surface-low rounded-[3rem] p-10 neo-extrusion border border-white/10 overflow-hidden"
            >
              <div className="absolute top-6 right-6">
                <button 
                  onClick={() => setIsSuccessOpen(false)}
                  className="p-3 bg-white/5 rounded-full border border-white/10 active:scale-90 transition-transform"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_30px_rgba(255,199,0,0.1)]">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                
                <h2 className="font-headline text-3xl font-black uppercase tracking-tighter mb-4 leading-tight">
                  ¡SOLICITUD <br/> <span className="text-primary">ENVIADA!</span>
                </h2>
                
                <p className="text-white/40 text-sm mb-10 max-w-[200px]">
                  Tu pre-reserva para el <span className="text-white font-bold">{selectedDate} de Marzo, 2026</span> está siendo procesada.
                </p>

                <div className="w-full space-y-4">
                  <button className="w-full bg-surface p-5 rounded-2xl border border-white/5 flex items-center justify-center gap-4 font-headline font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-colors group">
                    <CalendarPlus className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    Agregar al Calendario
                  </button>
                  
                  <button className="w-full bg-surface p-5 rounded-2xl border border-white/5 flex items-center justify-center gap-4 font-headline font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-colors group">
                    <Headset className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    Contactar Soporte
                  </button>
                </div>

                <button 
                  onClick={() => setIsSuccessOpen(false)}
                  className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white/40 transition-colors"
                >
                  Cerrar Ventana
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const LigasView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const leagues = [
    {
      id: 1,
      name: "Liga Premier CDMX",
      category: "Profesional",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      description: "La liga más competitiva de la zona metropolitana con cobertura total.",
      teams: 16,
      nextMatch: "Sábado 21, 10:00 AM",
      details: "Incluye transmisión en vivo, estadísticas por jugador y highlights semanales."
    },
    {
      id: 2,
      name: "Torneo Inter-Prepas",
      category: "Juvenil",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
      description: "Fomentando el talento joven con visibilidad profesional.",
      teams: 12,
      nextMatch: "Viernes 20, 4:00 PM",
      details: "Enfoque en scouting y desarrollo de jugadores con clips individuales."
    },
    {
      id: 3,
      name: "Copa Veteranos 35+",
      category: "Amateur",
      image: "https://images.unsplash.com/photo-1529900948632-58674ba19306?q=80&w=800&auto=format&fit=crop",
      description: "Pasión que no conoce edad. Cobertura nostálgica y profesional.",
      teams: 8,
      nextMatch: "Domingo 22, 9:00 AM",
      details: "Entrevistas post-partido y resúmenes narrados para redes sociales."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 py-12"
    >
      <SectionHeader 
        title="Nuestras Ligas" 
        subtitle="Explora las competencias que confían en QuackTrack para su gestión visual." 
      />

      <div className="space-y-6">
        {leagues.map((league) => (
          <motion.div
            key={league.id}
            layout
            className={`bg-surface-low rounded-[2.5rem] overflow-hidden neo-extrusion border border-white/5 cursor-pointer transition-all duration-500 ${expandedId === league.id ? 'ring-2 ring-primary/50' : ''}`}
            onClick={() => setExpandedId(expandedId === league.id ? null : league.id)}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className={`relative md:w-1/3 ${expandedId === league.id ? 'h-64 md:h-auto' : 'h-48 md:h-auto'}`}>
                <img 
                  src={league.image} 
                  alt={league.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">{league.category}</span>
                    <h3 className="font-headline text-2xl font-black uppercase tracking-tight">{league.name}</h3>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedId === league.id ? 180 : 0 }}
                    className="p-2 bg-white/5 rounded-full"
                  >
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </motion.div>
                </div>
                <p className="text-white/40 text-sm mb-6">{league.description}</p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-white/60">{league.teams} Equipos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-white/60">{league.nextMatch}</span>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === league.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-background/40 p-8 border-t border-white/5"
                >
                  <div className="max-w-2xl">
                    <h4 className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">Detalles de Cobertura</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-8">{league.details}</p>
                    <button className="bg-primary text-background font-headline font-black uppercase py-4 px-8 rounded-xl text-xs tracking-widest shadow-lg active:scale-95 transition-all">
                      Ver Estadísticas de Liga
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const HomeView = ({ onNavigate }: { onNavigate: (tab: string) => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
  <motion.div 
    key="home-view"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Elite athlete in a stadium tunnel" 
          className="w-full h-full object-cover brightness-[0.3] contrast-125 scale-110" 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl py-12"
      >
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-6 uppercase">
          EL JUEGO <br/>
          <span className="text-primary">COMIENZA</span> <br/>
          AQUÍ
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-medium mb-10 max-w-sm leading-relaxed">
          Elevamos la experiencia del fútbol amateur con tecnología de élite y gestión profesional.
        </p>
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => onNavigate('citas')}
            className="bg-primary text-background font-headline font-black uppercase py-5 px-10 rounded-2xl text-lg shadow-[0_10px_30px_rgba(255,199,0,0.3)] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            APARTA TU FECHA
          </button>
          <button 
            onClick={() => onNavigate('portfolio')}
            className="bg-surface/40 backdrop-blur-sm text-white font-headline font-bold uppercase py-5 px-10 rounded-2xl text-center border border-white/10 neo-extrusion active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            VER PORTAFOLIO
          </button>
        </div>
      </motion.div>
    </section>

    {/* Performance Metrics */}
    <section className="px-6 pt-5 -mt-16 relative z-20 grid grid-cols-2 gap-4">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-surface-low p-6 rounded-[2rem] neo-extrusion border border-white/5 flex flex-col justify-center aspect-square text-center"
      >
        <span className="font-headline text-4xl font-black text-primary tracking-tighter">85+</span>
        <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-2 leading-tight">Torneos Activos</span>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-surface-low p-6 rounded-[2rem] neo-extrusion border border-white/5 flex flex-col justify-center aspect-square text-center"
      >
        <span className="font-headline text-4xl font-black text-primary tracking-tighter">12K</span>
        <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-2 leading-tight">Jugadores Reg.</span>
      </motion.div>
    </section>

    {/* Services Section */}
    <section className="px-6 pb-24 pt-[50px]">
      <SectionHeader title="Servicios Élite" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-low p-8 rounded-[2rem] neo-extrusion relative overflow-hidden group border border-white/5"
        >
          <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <LandPlot className="w-32 h-32" />
          </div>
          <div className="flex items-start justify-between mb-8">
            <div className="p-4 bg-surface rounded-2xl neo-concave border border-white/5">
              <LandPlot className="text-primary w-8 h-8" />
            </div>
          </div>
          <h3 className="font-headline text-2xl font-black uppercase mb-3 tracking-tight">LIGAS DE FÚTBOL</h3>
          <p className="text-white/60 leading-relaxed text-sm">Grabación profesional multicámara con estadísticas avanzadas en tiempo real para ligas competitivas.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-surface-low p-8 rounded-[2rem] neo-extrusion relative overflow-hidden group border border-white/5"
        >
          <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Trophy className="w-32 h-32" />
          </div>
          <div className="flex items-start justify-between mb-8">
            <div className="p-4 bg-surface rounded-2xl neo-concave border border-white/5">
              <Medal className="text-primary w-8 h-8" />
            </div>
          </div>
          <h3 className="font-headline text-2xl font-black uppercase mb-3 tracking-tight">TORNEOS VIP</h3>
          <p className="text-white/60 leading-relaxed text-sm">Experiencias premium para eventos corporativos y privados con cobertura cinematográfica completa.</p>
        </motion.div>
      </div>
    </section>

    {/* Quick Packages Preview */}
    <section className="px-6 py-12 bg-surface/30">
      <div className="flex justify-between items-end mb-10">
        <SectionHeader title="Paquetes" subtitle="Soluciones a medida para cada nivel de competencia." />
        <button 
          onClick={() => onNavigate('paquetes')}
          className="mb-10 text-primary font-headline font-black uppercase text-xs tracking-widest flex items-center gap-2 group"
        >
          Ver todos <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
        {[
          {
            title: "Game Day · Partido",
            bullets: ["Grabación completa del juego", "Transmisión opcional", "Overlays básicos"],
            button: "Solicitar",
            price: "1,200"
          },
          {
            title: "Temporada · Recomendado",
            bullets: ["Bloqueo de fechas", "Contenido histórico", "Highlights básicos"],
            button: "Agendar",
            featured: true,
            price: "4,500"
          }
        ].map((pkg, i) => (
          <div key={i} className="min-w-[280px] snap-center">
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </section>

    {/* Quote Section */}
    <section className="px-6 py-20">
      <div className="bg-surface-low neo-extrusion rounded-[2.5rem] p-10 border border-white/5 relative z-10 text-center">
        <Quote className="text-primary w-12 h-12 mx-auto mb-8 opacity-80 fill-primary" />
        <p className="font-headline text-2xl font-black uppercase tracking-tight leading-tight text-white mb-8 italic">
          "ELEVAMOS EL NIVEL DE TU COMPETENCIA CON TECNOLOGÍA VISUAL DE VANGUARDIA."
        </p>
        <div className="h-1 w-12 bg-primary mx-auto mb-4 rounded-full"></div>
        <span className="text-[11px] uppercase font-black tracking-[0.3em] text-primary">QuackTrack Team</span>
      </div>
    </section>

    {/* Contact Section */}
    <section className="px-6 pb-24">
      <div className="mb-10">
        <h2 className="font-headline text-3xl font-black uppercase tracking-tight mb-2">Pide información aquí!!</h2>
        <p className="text-white/60 text-sm">ig: @quatracksports fb: @quatracksports ws: +52 1 56 6495 2214</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WhatsApp Card */}
        <div className="bg-surface-low p-8 rounded-[2rem] neo-extrusion border border-white/5 flex flex-col items-start">
          <h3 className="font-headline text-xl font-black uppercase mb-2">WhatsApp</h3>
          <p className="text-white/60 text-sm mb-8">Ideal para confirmar disponibilidad en minutos.</p>
          
          <a 
            href="https://wa.me/5215664952214" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-background font-headline font-black uppercase py-4 px-6 rounded-2xl text-center shadow-[0_10px_30px_rgba(255,199,0,0.2)] active:scale-95 transition-all duration-200 mb-8 inline-block"
          >
            Hablar por WhatsApp
          </a>

          <div className="mt-auto space-y-2 text-xs w-full">
            <p className="flex justify-between border-b border-white/5 pb-2"><span className="font-bold text-white/80">Cobertura:</span> <span className="text-white/60">CDMX · EdoMex · y más</span></p>
            <p className="flex justify-between pt-2"><span className="font-bold text-white/80">Horario:</span> <span className="text-white/60">Sáb/Dom (principal) + agenda</span></p>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-surface-low p-8 rounded-[2rem] neo-extrusion border border-white/5">
          <h3 className="font-headline text-xl font-black uppercase mb-2">Formulario rápido</h3>
          <p className="text-white/60 text-sm mb-8">Si aún no tienes fecha, igual podemos cotizar y asesorarte.</p>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Tu nombre</label>
              <input name="name" required type="text" placeholder="Nombre y apellido" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10" />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Correo</label>
              <input name="email" required type="email" placeholder="tu@correo.com" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">WhatsApp</label>
              <input name="whatsapp" required type="tel" placeholder="+52 ..." className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Mensaje</label>
              <textarea name="message" required rows={3} placeholder="Cuéntanos qué necesitas (juego, torneo, temporada)" className="w-full bg-background/60 border border-white/5 rounded-2xl p-4 text-sm font-bold text-white/80 outline-none focus:border-primary/50 transition-colors placeholder:text-white/10 resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`w-full font-headline font-black uppercase py-4 rounded-2xl text-sm transition-all duration-200 mt-4 ${
                isSuccess 
                  ? 'bg-green-500 text-white' 
                  : 'bg-surface border border-white/10 text-white hover:bg-white/5 active:scale-95'
              }`}
            >
              {isSubmitting ? 'Enviando...' : isSuccess ? '¡Enviado!' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  </motion.div>
  );
};

const PackagesView = () => {
  const transmissionPackages = [
    {
      title: "Game Day · Partido",
      icon: Timer,
      bullets: [
        "Grabación completa del juego",
        "Transmisión opcional (según logística)",
        "Overlays básicos de canal",
        "Entrega organizada del contenido"
      ],
      button: "Solicitar",
    },
    {
      title: "Temporada · Recomendado",
      icon: Sparkles,
      bullets: [
        "Bloqueo de fechas (por bloques)",
        "Contenido histórico para tu comunidad",
        "Highlights básicos para redes",
        "Soporte extendido y seguimiento"
      ],
      button: "Agendar",
      featured: true,
    },
    {
      title: "Elite · Liga",
      icon: Award,
      bullets: [
        "Operación completa (liga/torneo)",
        "Integraciones premium (a definir)",
        "Reportes acumulados y evolución",
        "Activación comercial profesional"
      ],
      button: "Platicar",
    }
  ];

  const sponsorshipPackages = [
    {
      title: "Patrocinador Local",
      icon: Zap,
      bullets: [
        "Logo en pantalla (limitado)",
        "Menciones puntuales",
        "Ideal para comercios locales"
      ],
      button: "Me interesa",
    },
    {
      title: "Patrocinador Oficial",
      icon: Medal,
      bullets: [
        "Mejor presencia de marca",
        "Menciones + overlay",
        "Inventario limitado por partido"
      ],
      button: "Cotizar",
      featured: true,
    },
    {
      title: "Patrocinador Premium",
      icon: Trophy,
      bullets: [
        "Posible exclusividad por categoría",
        "Mayor presencia de marca",
        "Activación más completa"
      ],
      button: "Hablar",
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="px-6 py-12"
    >
      {/* Paquetes Section */}
      <div className="mb-20">
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-black uppercase tracking-tighter text-white mb-2">
            Paquetes de Transmisión
          </h1>
          <p className="text-white/40 text-sm max-w-md">
            Soluciones profesionales de cobertura y streaming para elevar el nivel visual de tu competencia.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar -mx-6 px-6">
          {transmissionPackages.map((pkg, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[380px] snap-center">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* Patrocinios Section */}
      <div className="mb-20">
        <div className="mb-10 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/40 rounded-full" />
          <h1 className="font-headline text-4xl font-black uppercase tracking-tighter text-white mb-2">
            Patrocinios
          </h1>
          <p className="text-white/40 text-sm max-w-md">
            Oportunidades exclusivas para marcas que buscan conectar con la comunidad deportiva de forma orgánica y profesional.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar -mx-6 px-6">
          {sponsorshipPackages.map((pkg, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[380px] snap-center">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* Potencia Ingenieril Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(255,199,0,0.5)]"></div>
          <h2 className="font-headline text-3xl font-black uppercase tracking-tighter italic">Potencia Ingenieril</h2>
        </div>
        {/* ... existing content ... */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-low p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group"
          >
            <div className="p-4 bg-surface rounded-2xl w-fit mb-6 border border-white/5">
              <Clapperboard className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-black uppercase mb-3 tracking-tight">Movimiento Cinematográfico</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Seguimiento de cuadros de alta fidelidad con interpolación cinematográfica para una reproducción ultra fluida.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-low p-8 rounded-[2rem] border border-white/5 flex flex-col items-start"
            >
              <div className="p-4 bg-surface rounded-2xl mb-6 border border-white/5">
                <Zap className="text-emerald-400 w-6 h-6" />
              </div>
              <h3 className="font-headline text-sm font-black uppercase tracking-tight">Feedback en Vivo</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-low p-8 rounded-[2rem] border border-white/5 flex flex-col items-start"
            >
              <div className="p-4 bg-surface rounded-2xl mb-6 border border-white/5">
                <TrendingUp className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-sm font-black uppercase tracking-tight">Percepciones Élite</h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Soluciones Personalizadas Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative h-[450px] rounded-[3rem] overflow-hidden border border-white/10 group mt-20"
      >
        <img 
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop" 
          alt="Business solutions"
          className="w-full h-full object-cover brightness-[0.4] transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
            Soluciones <br/> Personalizadas <br/> Empresariales
          </h2>
          <p className="text-white/60 text-sm max-w-xs mb-10">
            Infraestructura a medida para ligas profesionales y complejos deportivos.
          </p>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-headline font-black uppercase py-5 px-10 rounded-2xl text-sm tracking-widest hover:bg-white/20 transition-all">
            Contactar Ventas
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProfileView = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Hunter',
    email: 'alex.hunter@example.com',
    phone: '+52 55 1234 5678',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
    bio: 'Jugador profesional y apasionado del fútbol. Siempre buscando mejorar mi rendimiento.'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="px-6 py-12 max-w-2xl mx-auto"
    >
      <SectionHeader 
        title="Mi Perfil" 
        subtitle="Gestiona tu información personal y detalles de contacto." 
      />

      <div className="bg-surface-low rounded-[2.5rem] p-8 border border-white/5 neo-extrusion relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-surface-low neo-extrusion border border-white/10 p-1 flex items-center justify-center overflow-hidden">
                <img src={profile.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
              </div>
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Cambiar</span>
                </div>
              )}
            </div>
            {isEditing && (
              <input 
                type="text" 
                name="avatar" 
                value={profile.avatar} 
                onChange={handleChange} 
                placeholder="URL de la imagen"
                className="w-full max-w-[200px] bg-background/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80 focus:outline-none focus:border-primary/50 text-center"
              />
            )}
          </div>

          <div className="flex-1 w-full space-y-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-white">Información</h3>
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs font-bold uppercase tracking-wider text-white/80 flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> Editar
                </button>
              ) : (
                <button 
                  onClick={handleSave}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-xl border border-primary/20 transition-colors text-xs font-black uppercase tracking-wider text-background flex items-center gap-2 shadow-[0_0_15px_rgba(255,199,0,0.3)]"
                >
                  <CheckCircle2 className="w-4 h-4" /> Guardar
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Nombre Completo</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="name" 
                    value={profile.name} 
                    onChange={handleChange} 
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-lg text-white font-medium">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Correo Electrónico</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    name="email" 
                    value={profile.email} 
                    onChange={handleChange} 
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-white/80">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Teléfono</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    name="phone" 
                    value={profile.phone} 
                    onChange={handleChange} 
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-white/80">{profile.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Biografía</label>
                {isEditing ? (
                  <textarea 
                    name="bio" 
                    value={profile.bio} 
                    onChange={handleChange} 
                    rows={3}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                ) : (
                  <p className="text-white/60 text-sm leading-relaxed">{profile.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SettingsView = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    language: 'es',
    privacy: 'public'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="px-6 py-12 max-w-2xl mx-auto"
    >
      <SectionHeader 
        title="Configuración" 
        subtitle="Ajusta tus preferencias y la configuración de tu cuenta." 
      />

      <div className="bg-surface-low rounded-[2.5rem] p-8 border border-white/5 neo-extrusion space-y-8">
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold text-lg">Notificaciones</h4>
            <p className="text-white/60 text-sm">Recibe alertas sobre tus torneos y partidos.</p>
          </div>
          <button 
            onClick={() => setSettings(s => ({ ...s, notifications: !s.notifications }))}
            className={`w-12 h-6 rounded-full transition-colors relative ${settings.notifications ? 'bg-primary' : 'bg-white/10'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${settings.notifications ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
        </div>

        <div className="h-px bg-white/5" />

        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold text-lg">Modo Oscuro</h4>
            <p className="text-white/60 text-sm">Apariencia de la aplicación.</p>
          </div>
          <button 
            onClick={() => setSettings(s => ({ ...s, darkMode: !s.darkMode }))}
            className={`w-12 h-6 rounded-full transition-colors relative ${settings.darkMode ? 'bg-primary' : 'bg-white/10'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${settings.darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
        </div>

        <div className="h-px bg-white/5" />

        {/* Language */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold text-lg">Idioma</h4>
            <p className="text-white/60 text-sm">Selecciona tu idioma preferido.</p>
          </div>
          <select 
            value={settings.language}
            onChange={(e) => setSettings(s => ({ ...s, language: e.target.value }))}
            className="bg-background/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary/50"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="h-px bg-white/5" />

        {/* Privacy */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold text-lg">Privacidad del Perfil</h4>
            <p className="text-white/60 text-sm">Quién puede ver tu perfil.</p>
          </div>
          <select 
            value={settings.privacy}
            onChange={(e) => setSettings(s => ({ ...s, privacy: e.target.value }))}
            className="bg-background/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary/50"
          >
            <option value="public">Público</option>
            <option value="private">Privado</option>
            <option value="friends">Solo amigos</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};

const SideMenu = ({ isOpen, onClose, activeTab, onNavigate }: { isOpen: boolean, onClose: () => void, activeTab: string, onNavigate: (tab: string) => void }) => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: LayoutGrid },
    { id: 'perfil', label: 'Mi Perfil', icon: User },
    { id: 'ligas', label: 'Ligas', icon: Users },
    { id: 'citas', label: 'Citas', icon: Calendar },
    { id: 'portfolio', label: 'Portafolio', icon: Trophy },
    { id: 'paquetes', label: 'Paquetes', icon: Package },
    { id: 'divider', label: '', icon: null },
    { id: 'settings', label: 'Configuración', icon: Sparkles },
    { id: 'help', label: 'Soporte', icon: Headset },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[150] bg-background/80 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-sm z-[200] bg-surface-low border-r border-white/5 neo-extrusion overflow-y-auto flex flex-col"
          >
            {/* Profile Header */}
            <div className="p-8 border-b border-white/5 bg-background/30">
              <div className="flex items-center justify-between mb-8">
                <img 
                  src="https://storage.googleapis.com/aistudio-attachments/uploads/123619128710/20260319011254-6r1i4s7t07s.png" 
                  alt="QuackTrack AI Sport" 
                  className="h-12 object-contain" 
                  referrerPolicy="no-referrer"
                />
                <button onClick={onClose} aria-label="Cerrar menú" className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>
              
              <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => {
                  onNavigate('perfil');
                  onClose();
                }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-surface-low neo-extrusion border border-white/10 p-1 flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-colors">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#34A853] border-2 border-surface-low rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">Alex Hunter</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Pro Member</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 py-6 px-4 space-y-2">
              {menuItems.map((item, idx) => {
                if (item.id === 'divider') {
                  return <div key={`divider-${idx}`} className="h-px bg-white/5 my-4 mx-2" />;
                }
                
                const Icon = item.icon!;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (['inicio', 'perfil', 'ligas', 'citas', 'portfolio', 'paquetes', 'settings'].includes(item.id)) {
                        onNavigate(item.id);
                        onClose();
                      }
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/10 border border-primary/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]' 
                        : 'bg-transparent border border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary text-background shadow-[0_0_15px_rgba(255,199,0,0.4)]' : 'bg-surface-low neo-extrusion border border-white/5 text-white/40'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-headline text-sm font-black uppercase tracking-widest ${isActive ? 'text-primary' : 'text-white/60'}`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,199,0,0.8)]" />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-background/30">
              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-surface-low neo-extrusion border border-white/5 text-white/40 hover:text-white hover:border-white/10 transition-all font-headline text-xs font-black uppercase tracking-widest">
                <LogOut className="w-4 h-4" /> Cerrar Sesión
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('ligas');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: LayoutGrid },
    { id: 'ligas', label: 'Ligas', icon: Users },
    { id: 'citas', label: 'Citas', icon: Calendar },
    { id: 'portfolio', label: 'Portafolio', icon: Trophy },
    { id: 'paquetes', label: 'Paquetes', icon: Package },
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-md flex justify-between items-center px-6 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Abrir menú" className="p-2 -ml-2 hover:bg-white/5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <Menu className="text-primary w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <motion.img 
              initial={{ scale: 0.5, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              src="https://storage.googleapis.com/aistudio-attachments/uploads/123619128710/20260319011254-j6d34e9p3k.png" 
              alt="QuackTrack Logo" 
              className="w-8 h-8 object-contain" 
              referrerPolicy="no-referrer"
            />
            <span className="font-headline font-black tracking-tighter uppercase text-2xl text-primary">QUACKTRACK</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Notificaciones" className="p-2 -mr-2 hover:bg-white/5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <Bell className="text-white/60 w-6 h-6" />
          </button>
        </div>
      </header>

      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        activeTab={activeTab} 
        onNavigate={setActiveTab} 
      />

      <main className="pt-[80px]">
        <AnimatePresence mode="wait">
          {activeTab === 'inicio' ? (
            <HomeView onNavigate={setActiveTab} />
          ) : activeTab === 'perfil' ? (
            <ProfileView />
          ) : activeTab === 'settings' ? (
            <SettingsView />
          ) : activeTab === 'ligas' ? (
            <LigasView />
          ) : activeTab === 'paquetes' ? (
            <PackagesView />
          ) : activeTab === 'portfolio' ? (
            <PortfolioView />
          ) : activeTab === 'citas' ? (
            <CitasView />
          ) : (
            <motion.div 
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center"
            >
              <div className="p-8 bg-surface-low rounded-full neo-extrusion mb-8">
                <LayoutGrid className="w-12 h-12 text-primary/20" />
              </div>
              <h2 className="font-headline text-2xl font-black uppercase mb-4">Próximamente</h2>
              <p className="text-white/40 max-w-xs">Estamos preparando esta sección para ofrecerte la mejor experiencia visual.</p>
              <button 
                onClick={() => setActiveTab('ligas')}
                className="mt-8 flex items-center gap-2 text-primary font-headline font-black uppercase text-xs tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Volver al inicio
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-background/90 backdrop-blur-2xl border-t border-white/5 rounded-t-[2.5rem] neo-extrusion">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.id);
              }}
              className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-white/40 hover:text-primary'
              }`}
              animate={{ 
                scale: isActive ? 1.15 : 1,
                y: isActive ? -4 : 0
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon 
                className={`w-6 h-6 transition-all duration-300 ${isActive ? 'fill-primary/20' : ''}`} 
              />
              <span className={`font-headline text-[9px] font-black uppercase tracking-tighter mt-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                {item.label}
              </span>
              
              {isActive && (
                <>
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-primary/10 rounded-2xl -z-10 blur-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1 w-6 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,199,0,0.8)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </>
              )}
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
}
