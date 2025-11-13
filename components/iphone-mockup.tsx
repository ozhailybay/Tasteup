"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IPhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const screens = [
    {
      type: "home",
      title: "Today's Menu",
      subtitle: "Lunch • March 15",
      items: [
        { 
          emoji: "🍕", 
          name: "Margherita Pizza", 
          rating: 4.8, 
          reviews: 23,
          price: "Free",
          description: "Fresh mozzarella, basil, tomato sauce"
        },
        { 
          emoji: "🥗", 
          name: "Caesar Salad", 
          rating: 4.5, 
          reviews: 18,
          price: "Free",
          description: "Crisp romaine, parmesan, croutons"
        },
        { 
          emoji: "🍎", 
          name: "Fresh Apple", 
          rating: 4.9, 
          reviews: 31,
          price: "Free",
          description: "Organic, locally sourced"
        }
      ],
      action: "Rate Your Meal"
    },
    {
      type: "rating",
      title: "How was your meal?",
      subtitle: "Your feedback helps improve our menu",
      items: [
        { emoji: "😍", name: "Amazing", color: "bg-green-500" },
        { emoji: "😊", name: "Good", color: "bg-blue-500" },
        { emoji: "😐", name: "Okay", color: "bg-yellow-500" },
        { emoji: "😞", name: "Not great", color: "bg-red-500" }
      ],
      action: "Submit Feedback"
    },
    {
      type: "insights",
      title: "Your Impact",
      subtitle: "Keep up the great work!",
      items: [
        { 
          emoji: "🎯", 
          name: "Feedback Given", 
          value: "47", 
          unit: "meals rated",
          trend: "+12 this month"
        },
        { 
          emoji: "📈", 
          name: "School Rating", 
          value: "4.7", 
          unit: "out of 5",
          trend: "Above average"
        },
        { 
          emoji: "🌱", 
          name: "Waste Reduced", 
          value: "23%", 
          unit: "this month",
          trend: "Great improvement"
        }
      ],
      action: "View Full Report"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const renderScreenContent = () => {
    const screen = screens[currentScreen]
    
    return (
      <div className="h-full flex flex-col bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Header - positioned below camera notch */}
        <div className="pt-12 pb-4 px-5 bg-white border-b border-green-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-xs text-white">🍏</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">TasteUp</span>
            </div>
            <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-xs text-green-600">👤</span>
            </div>
          </div>
          <h1 className="text-lg font-bold text-gray-900">{screen.title}</h1>
          <p className="text-xs text-gray-500 mt-1">{screen.subtitle}</p>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
          {screen.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 border border-green-100 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-2">
                <div className="text-xl">{item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">
                    {item.name}
                  </h3>
                  
                  {screen.type === "home" && (
                    <div className="mt-1 space-y-1">
                      <p className="text-xs text-gray-600 leading-tight">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-xs ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">{item.rating}</span>
                          <span className="text-xs text-gray-400 mx-1">•</span>
                          <span className="text-xs text-gray-500">{item.reviews}</span>
                        </div>
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {screen.type === "rating" && (
                    <div className="mt-2">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.color} text-white shadow-sm`}>
                        {item.name}
                      </div>
                    </div>
                  )}
                  
                  {screen.type === "insights" && (
                    <div className="mt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-green-600">{item.value}</span>
                        <span className="text-xs text-gray-500">{item.unit}</span>
                      </div>
                      <p className="text-xs text-green-600 font-medium mt-1">{item.trend}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="px-3 py-3 bg-white border-t border-green-100">
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2.5 rounded-lg text-xs shadow-lg hover:shadow-xl transition-all duration-200">
            {screen.action}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-72 h-[580px] mx-auto">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-slate-800">
          {/* Screen */}
          <div className="absolute inset-1 bg-white rounded-[2rem] overflow-hidden shadow-inner">
            {/* App Content */}
            {renderScreenContent()}
            
            {/* Home Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-sm"></div>
          </div>
          
          {/* Modern Camera Notch */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-lg">
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full shadow-inner"></div>
          </div>
        </div>
        
        {/* Modern Floating Elements */}
        <div className="absolute -top-4 -right-4 text-2xl opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            💬
          </div>
        </div>
        <div className="absolute -bottom-4 -left-4 text-xl opacity-70 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            ⭐
          </div>
        </div>
        <div className="absolute top-1/2 -left-6 text-lg opacity-70 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            📊
          </div>
        </div>
        <div className="absolute -top-2 -left-2 text-sm opacity-60 animate-pulse">
          <div className="bg-green-100 rounded-full p-1.5 shadow-sm">
            🍏
          </div>
        </div>
      </div>
    </div>
  )
}
