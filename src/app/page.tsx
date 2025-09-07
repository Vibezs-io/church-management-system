import { Navigation } from '@/components/layout/Navigation'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Church Management System
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            AI-powered enterprise platform designed to revolutionize your business operations
            with cutting-edge technology and intelligent automation.
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <Link href="/dashboard">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
              <p className="text-gray-600">
                Leverage advanced AI capabilities for intelligent decision-making
                and automated workflows.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Enterprise Ready</h3>
              <p className="text-gray-600">
                Built with enterprise-grade security, scalability, and 
                compliance features.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Modern Architecture</h3>
              <p className="text-gray-600">
                Powered by Next.js, React, and TypeScript for optimal 
                performance and developer experience.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
