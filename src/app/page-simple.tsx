export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">ClearRx</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Voice-Activated Medication Management for Visually Impaired and Seniors
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            Join Pilot Program
          </button>
        </div>
      </div>
    </div>
  );
}
