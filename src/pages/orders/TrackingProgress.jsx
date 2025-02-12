import { CheckCircle, Circle } from "lucide-react"

const TrackingProgress = ({ steps }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              {step.completed ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <Circle className="h-8 w-8 text-gray-300" />
              )}
            </div>
            <div className={`w-1/2 pr-8 ${index % 2 === 0 ? "text-right" : "text-left ml-auto"}`}>
              <h4 className="text-lg font-semibold">{step.title}</h4>
              {step.date && <p className="text-gray-600">{step.date}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackingProgress

