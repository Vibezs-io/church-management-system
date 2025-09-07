import { Navigation } from '@/components/layout/Navigation'

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome to your Church Management System control center
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-green-600">89</p>
            <p className="text-sm text-gray-500 mt-1">Currently online</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibent mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">$45,678</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            <p className="text-3xl font-bold text-orange-600">98.5%</p>
            <p className="text-sm text-gray-500 mt-1">Uptime</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-gray-600">New user registered</span>
                <span className="text-sm text-gray-400">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-gray-600">System backup completed</span>
                <span className="text-sm text-gray-400">1 hour ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Performance report generated</span>
                <span className="text-sm text-gray-400">3 hours ago</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">API Services</span>
                <span className="text-green-600 font-semibold">✓ Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Database</span>
                <span className="text-green-600 font-semibold">✓ Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">AI Processing</span>
                <span className="text-green-600 font-semibold">✓ Operational</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
