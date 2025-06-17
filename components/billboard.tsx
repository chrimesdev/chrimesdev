export default function CricketBillboard() {
  return (
    <div
      className="w-full bg-emerald-50 flex items-center justify-center p-8"
      style={{ aspectRatio: "4/1", minHeight: "300px" }}
    >
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        {/* Left side - Prominent CHRIMES.DEV branding */}
        <div className="flex-1">
          <div className="text-8xl lg:text-9xl font-bold text-emerald-600 mb-4">CHRIMES.DEV</div>
          <div className="text-3xl lg:text-4xl text-gray-900 font-bold">Website Design & Development</div>
        </div>

        {/* Right side - Supporting info */}
        <div className="flex-shrink-0 text-right ml-12">
          <div className="text-2xl lg:text-3xl text-gray-700 mb-2">Proud sponsors of</div>
          <div className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">Meanwood Cricket Club</div>
          <div className="text-xl lg:text-2xl text-gray-700 font-medium">www.chrimes.dev</div>
        </div>
      </div>
    </div>
  )
}
