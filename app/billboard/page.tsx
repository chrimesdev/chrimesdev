import CricketBillboard from "@/components/billboard"

export default function BillboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cricket Pitch Billboard Design</h1>
          <p className="text-gray-600">2440mm x 610mm - Optimized for distance viewing</p>
        </div>

        {/* Billboard Preview */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <CricketBillboard />
        </div>

        {/* Design Notes */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Design Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dimensions</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Width: 2440mm (8 feet)</li>
                <li>• Height: 610mm (2 feet)</li>
                <li>• Aspect Ratio: 4:1</li>
                <li>• Print Resolution: 300 DPI recommended</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Design Elements</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Background: Light emerald green (#f0fdf4)</li>
                <li>• Primary text: Dark gray (#111827)</li>
                <li>• Accent text: Emerald green (#059669)</li>
                <li>• Large, bold typography for distance reading</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Print-Ready Version */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Print-Ready Version</h2>
          <p className="text-gray-600 mb-4">
            High-resolution version optimized for professional printing at cricket pitch dimensions.
          </p>

          {/* Full-size billboard for print */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="w-full bg-emerald-50 flex items-center justify-center relative" style={{ height: "200px" }}>
              <div className="absolute inset-0 flex items-center justify-between px-12">
                {/* Left side - Prominent CHRIMES.DEV branding */}
                <div className="flex-1">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">CHRIMES.DEV</div>
                  <div className="text-2xl text-gray-900 font-bold">Website Design & Development</div>
                </div>

                {/* Right side - Supporting info */}
                <div className="flex-shrink-0 text-right ml-8">
                  <div className="text-base text-gray-700 mb-1">Proud sponsors of</div>
                  <div className="text-xl font-semibold text-gray-900 mb-3">Meanwood Cricket Club</div>
                  <div className="text-2xl text-gray-700 font-medium">www.chrimes.dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
